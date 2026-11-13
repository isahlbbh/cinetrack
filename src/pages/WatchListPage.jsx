import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import MovieCard from "../components/MovieCard";
import { getMovieDetails } from "../services/tmdb";

export default function WatchListPage({
  watchList,
  toggleWatchList,
  favorites,
  toggleFavorite,
  watched,
  toggleWatched,
}) {
  const navigate = useNavigate();

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    setLoading(true);
    setError("");
    setMovies([]);

    async function fetchMovies() {
      try {
        const results = await Promise.all(
          watchList.map((id) => getMovieDetails(id)),
        );

        if (active) {
          setMovies(results);
        }
      } catch {
        if (active) {
          setError(
            "Não foi possível carregar sua lista. Tente novamente mais tarde.",
          );
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    fetchMovies();

    return () => {
      active = false;
    };
  }, [watchList]);

  return (
    <div className="app-layout">
      <Sidebar
        favoritesCount={favorites.length}
        watchedCount={watched.length}
        watchListCount={watchList.length}
      />

      <div className="main-content">
        <main className="page-content">
          <h1>🍿 Quero assistir ({watchList.length})</h1>

          {loading && <p role="status">Carregando sua lista...</p>}

          {error && <p role="alert">{error}</p>}

          {!loading && watchList.length === 0 && (
            <p className="empty-message">
              Sua lista está vazia. Adicione filmes usando “Quero assistir”.
            </p>
          )}

          <div className="movies-grid">
            {movies
              .filter((movie) => watchList.includes(movie.id))
              .map((movie) => (
                <MovieCard
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  year={movie.release_date?.slice(0, 4) || "—"}
                  rating={movie.vote_average?.toFixed(1) || "—"}
                  poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  onClick={() => navigate(`/movie/${movie.id}`)}
                  isFavorite={favorites.includes(movie.id)}
                  onFavoriteClick={toggleFavorite}
                  isWatched={watched.includes(movie.id)}
                  onWatchedClick={toggleWatched}
                  watchList={watchList}
                  toggleWatchList={toggleWatchList}
                />
              ))}
          </div>
        </main>
      </div>
    </div>
  );
}
