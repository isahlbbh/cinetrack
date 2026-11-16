import "../../styles/MovieCard.css";

function MovieCard({
  id,
  title,
  year,
  rating,
  poster,
  onClick,
  isFavorite,
  onFavoriteClick,
  isWatched,
  onWatchedClick,
  watchList,
  toggleWatchList,
}) {
  const isInWatchList = watchList.includes(id);
  return (
    <article
      className="movie-card"
      onClick={onClick}
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.target === event.currentTarget && event.key === "Enter") {
          onClick();
        }
      }}
    >
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
