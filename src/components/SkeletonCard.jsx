import "../../styles/SkeletonCard.css";

function SkeletonCard() {
  return (
    <div className="skeleton-card">
      <div className="skeleton-poster"></div>
      <div className="skeleton-title"></div>
      <div className="skeleton-info"></div>
    </div>
  );
}

export default SkeletonCard;
