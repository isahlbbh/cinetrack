import "../../styles/MovieCard.css";

function MovieCard({ title, year, rating, poster }) {
  return (
    <article className="movie-card">
      <img src={poster} alt={`Pôster de ${title}`} className="movie-poster" />

      <div className="movie-info">
        <h3>{title}</h3>

        <div className="movie-details">
          <span>{year}</span>
          <span className="movie-rating">★ {rating}</span>
        </div>
      </div>
    </article>
  );
}

export default MovieCard;
