import { getMovieDetails } from "../services/tmdb";
import { useState, useEffect } from "react";

export default function WatchListPage({ watchList, toggleWatchList }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const results = await Promise.all(
        watchList.map((id) => getMovieDetails(id)),
      );
      setMovies(results);
    }
    fetchMovies();
  }, [watchList]);

  return (
    <div>
      <h1>🍿 Quero assistir ({watchList.length})</h1>

      {movies.map((movie) => (
        <p key={movie.id}>{movie.title}</p>
      ))}
    </div>
  );
}
