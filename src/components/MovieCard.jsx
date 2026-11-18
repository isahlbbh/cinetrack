import "../../styles/MovieCard.css";
import { Link } from "react-router-dom";

function MovieCard({
  id,
  title,
  year,
  rating,
  poster,
  isFavorite,
  onFavoriteClick,
  isWatched,
  onWatchedClick,
  watchList,
  toggleWatchList,
}) {
  const isInWatchList = watchList.includes(id);
  return (
    <article className="movie-card">
      {" "}
      <img src={poster} alt={`Pôster de ${title}`} className="movie-poster" />
      <button
        className="favorite-btn"
        aria-label={`Adicionar ${title} aos favoritos`}
        aria-pressed={isFavorite}
        onClick={(event) => {
          event.stopPropagation();
          onFavoriteClick(id);
        }}
      >
        {isFavorite ? "❤️" : "🤍"}
      </button>
      <button
        className="watched-btn"
        aria-label={`Marcar ${title} como assistido`}
        aria-pressed={isWatched}
        onClick={(event) => {
          event.stopPropagation();
          onWatchedClick(id);
        }}
      >
        {isWatched ? "✅ Assistido" : "✓ Marcar como assistido"}
      </button>
      <button
        className="watchlist-btn"
        aria-label={`Quero assistir ${title}`}
        aria-pressed={isInWatchList}
        onClick={(event) => {
          event.stopPropagation();
          toggleWatchList(id);
        }}
      >
        {isInWatchList ? "🍿 Na lista" : "➕ Quero assistir"}
      </button>
      <div className="movie-info">
        <h3>
          <Link to={`/movie/${id}`} className="movie-title-link">
            {title}
          </Link>
        </h3>
        <div className="movie-details">
          <span>{year}</span>
          <span className="movie-rating">★ {rating}</span>
        </div>
      </div>
    </article>
  );
}

export default MovieCard;
