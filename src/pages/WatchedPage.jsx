import Sidebar from "../components/Sidebar";
import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { getMovieDetails } from "../services/tmdb";
import { useNavigate } from "react-router-dom";

export default function WatchedPage({
  watched,
  toggleWatched,
  favorites,
  toggleFavorite,
  watchList,
  toggleWatchList,
}) {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [retry, setRetry] = useState(0);

  useEffect(() => {
    async function loadWatched() {
      setLoading(true);
      setError("");

      try {
        const requests = watched.map((id) => getMovieDetails(id));
        const results = await Promise.all(requests);

        setMovies(results);
      } catch (error) {
        console.error("Erro ao carregar assistidos:", error);
        setError("Não foi possível carregar seus filmes assistidos.");
      } finally {
        setLoading(false);
      }
    }

    loadWatched();
  }, [watched, retry]);
  return (
    <div className="app-layout">
      <Sidebar
        favoritesCount={favorites.length}
        watchedCount={watched.length}
        watchListCount={watchList.length}
      />
      <div className="main-content">
        <main className="page-content">
          <h1>Filmes assistidos ✅</h1>
          <p>Você já assistiu {watched.length} filmes!</p>

          {loading && <p>Carregando filmes assistidos...</p>}
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
              Você ainda não marcou nenhum filme como assistido.
            </p>
          )}

          {!loading && !error && (
            <div className="movies-grid">
              {movies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  year={movie.release_date?.slice(0, 4) || "—"}
                  rating={movie.vote_average.toFixed(1)}
                  poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  onClick={() => navigate(`/movie/${movie.id}`)}
                  isWatched={watched.includes(movie.id)}
                  onWatchedClick={toggleWatched}
                  watchList={watchList}
                  toggleWatchList={toggleWatchList}
                  isFavorite={favorites.includes(movie.id)}
                  onFavoriteClick={toggleFavorite}
                />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
