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

  useEffect(() => {
    async function loadWatched() {
      setLoading(true);

      try {
        const requests = watched.map((id) => getMovieDetails(id));
        const results = await Promise.all(requests);

        setMovies(results);
      } catch (error) {
        console.error("Erro ao carregar assistidos:", error);
      } finally {
        setLoading(false);
      }
    }

    loadWatched();
  }, [watched]);

  return (
    <div className="app-layout">
      <Sidebar
        favoritesCount={favorites.length}
        watchedCount={watched.length}
      />
      <div className="main-content">
        <main className="page-content">
          <h1>Filmes assistidos ✅</h1>
          <p>Você já assistiu {watched.length} filmes!</p>

          {loading && <p>Carregando filmes assistidos...</p>}

          {!loading && movies.length === 0 && (
            <p className="empty-message">
              Você ainda não marcou nenhum filme como assistido.
            </p>
          )}

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
        </main>
      </div>
    </div>
  );
}
