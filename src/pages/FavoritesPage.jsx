import { useState, useEffect } from "react";
import { getMovieDetails } from "../services/tmdb";
import MovieCard from "../components/MovieCard";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";

export default function FavoritesPage({ favorites }) {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function loadFavorites() {
      const requests = favorites.map((id) => getMovieDetails(id));

      const results = await Promise.all(requests);

      setMovies(results);
    }

    loadFavorites();
  }, [favorites]);
  return (
    <div className="app-layout">
      <Sidebar />

      <div className="main-content">
        <main className="page-content">
          <h1>Meus favoritos ❤️</h1>

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
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
