import "../../styles/MovieCard.css";

function MovieCard({ id, title, year, rating, poster, onClick }) {
  return (
    <article className="movie-card" onClick={onClick}>
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
