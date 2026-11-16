import "../../styles/Sidebar.css";
import { Link, useLocation } from "react-router-dom";
function Sidebar({ favoritesCount, watchedCount, watchListCount }) {
  const location = useLocation();
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <span className="brand-icon">✦</span>
        <h2>CineTrack</h2>
      </div>

      <p className="sidebar-label">MENU</p>

      <nav className="sidebar-nav" aria-label="Menu principal">
        {" "}
        <Link
          to="/"
          aria-current={location.pathname === "/" ? "page" : undefined}
          className={`sidebar-link ${location.pathname === "/" ? "active" : ""}`}
        >
          ◈ <span>Explorar</span>
        </Link>
        <Link
          to="/favorites"
          aria-current={location.pathname === "/favorites" ? "page" : undefined}
          className={`sidebar-link ${location.pathname === "/favorites" ? "active" : ""}`}
        >
          ♡ <span>Minha lista ({favoritesCount})</span>{" "}
        </Link>
        <Link
          to="/watched"
          aria-current={location.pathname === "/watched" ? "page" : undefined}
          className={`sidebar-link ${location.pathname === "/watched" ? "active" : ""}`}
        >
          ✓ <span>Assistidos ({watchedCount})</span>{" "}
        </Link>
        <Link
          to="/watchlist"
          aria-current={location.pathname === "/watchlist" ? "page" : undefined}
          className={`sidebar-link ${
            location.pathname === "/watchlist" ? "active" : ""
          }`}
        >
          🍿 <span>Quero assistir ({watchListCount})</span>
        </Link>
      </nav>

      <div className="sidebar-footer">
        <span>✦</span> Seu universo de filmes
      </div>
    </aside>
  );
}

export default Sidebar;
