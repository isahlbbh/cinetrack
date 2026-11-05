import { useParams, useNavigate } from "react-router-dom";
import { getMovieDetails } from "../services/tmdb";
import { useEffect, useState } from "react";
import "../../styles/MovieDetailsPage.css";

function MovieDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadMovie() {
      setMovie(null);
      setError("");

      try {
        const data = await getMovieDetails(id);
        setMovie(data);
      } catch (error) {
        setError("Não foi possível carregar o filme.");
      }
    }

    loadMovie();
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!movie) return <p>Carregando filme...</p>;

  return (
    <main className="movie-page">
      <button className="back-btn" onClick={() => navigate("/")}>
        ← Voltar
      </button>

      <div className="movie-content">
        <img
          className="movie-cover"
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "https://placehold.co/300x450/211b30/c4a4ff?text=Sem+poster"
          }
          alt={`Pôster de ${movie.title}`}
        />

        <div className="movie-description">
          <h1>{movie.title}</h1>

          <div className="movie-meta">
            <span>{movie.release_date?.slice(0, 4) || "—"}</span>
            <span>⭐ {movie.vote_average.toFixed(1)}</span>
            <span>{movie.runtime} min</span>
          </div>

          <div className="movie-genres">
            {movie.genres?.map((genre) => (
              <span key={genre.id}>{genre.name}</span>
            ))}
          </div>

          <h2>Sinopse</h2>
          <p>{movie.overview || "Sinopse indisponível."}</p>
        </div>
      </div>
    </main>
  );
}

export default MovieDetailsPage;
