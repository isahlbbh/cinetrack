import { useState, useEffect } from "react";
import { getMovieDetails } from "../services/tmdb";
import MovieCard from "../components/MovieCard";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";

export default function FavoritesPage({
  favorites,
  toggleFavorite,
  watched,
  toggleWatched,
  watchList,
  toggleWatchList,
}) {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [retry, setRetry] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadFavorites() {
      setLoading(true);
      setError("");

      try {
        const requests = favorites.map((id) => getMovieDetails(id));

        const results = await Promise.all(requests);

        setMovies(results);
      } catch (error) {
        console.error("Erro ao carregar favoritos:", error);
        setError("Não foi possível carregar seus favoritos.");
      } finally {
        setLoading(false);
      }
    }

    loadFavorites();
  }, [favorites, retry]);
  return (
    <div className="app-layout">
      <Sidebar
        favoritesCount={favorites.length}
        watchedCount={watched.length}
        watchListCount={watchList.length}
      />

      <div className="main-content">
        <main className="page-content">
          <h1>Meus favoritos</h1>
          {loading && <p>Carregando favoritos...</p>}
          {!loading && error && (
            <p className="empty-message" role="alert">
              {error}
            </p>
          )}
          {!loading && error && (
            <button
              className="load-more-btn"
              onClick={() => setRetry((prev) => prev + 1)}
            >
              Tentar novamente
            </button>
          )}
          {!loading && !error && movies.length === 0 && (
            <p className="empty-message">
              Você ainda não tem filmes favoritos.
            </p>
          )}
          {!loading && !error && (
            <div className="movies-grid">
              {movies.map((movie) => (
                <MovieCard
                  onClick={() => navigate(`/movie/${movie.id}`)}
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  year={movie.release_date?.slice(0, 4) || "—"}
                  rating={movie.vote_average.toFixed(1)}
                  poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  isFavorite={true}
                  onFavoriteClick={toggleFavorite}
                  watchList={watchList}
                  toggleWatchList={toggleWatchList}
                  isWatched={watched.includes(movie.id)}
                  onWatchedClick={toggleWatched}
                />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
