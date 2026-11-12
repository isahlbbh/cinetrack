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

  useEffect(() => {
    async function loadFavorites() {
      setLoading(true);

      try {
        const requests = favorites.map((id) => getMovieDetails(id));

        const results = await Promise.all(requests);

        setMovies(results);
      } catch (error) {
        console.error("Erro ao carregar favoritos:", error);
      } finally {
        setLoading(false);
      }
    }

    loadFavorites();
  }, [favorites]);
  return (
    <div className="app-layout">
      <Sidebar
        favoritesCount={favorites.length}
        watchedCount={watched.length}
      />

      <div className="main-content">
        <main className="page-content">
          <h1>Meus favoritos</h1>
          {loading && <p>Carregando favoritos...</p>}
          {!loading && movies.length === 0 && (
            <p className="empty-message">
              Você ainda não tem filmes favoritos.
            </p>
          )}
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
        </main>
      </div>
    </div>
  );
}
