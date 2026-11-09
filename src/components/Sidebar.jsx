import "../../styles/Sidebar.css";
import { Link, useLocation } from "react-router-dom";
function Sidebar({ favoritesCount, watchedCount }) {
  const location = useLocation();
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <span className="brand-icon">✦</span>
        <h2>CineTrack</h2>
      </div>

      <p className="sidebar-label">MENU</p>

      <nav className="sidebar-nav">
        <Link
          to="/"
          className={`sidebar-link ${location.pathname === "/" ? "active" : ""}`}
        >
          ◈ <span>Explorar</span>
        </Link>
        <Link
          to="/favorites"
          className={`sidebar-link ${location.pathname === "/favorites" ? "active" : ""}`}
        >
          ♡ <span>Minha lista ({favoritesCount})</span>{" "}
        </Link>
        <Link
          to="/watched"
          className={`sidebar-link ${location.pathname === "/watched" ? "active" : ""}`}
        >
          ✓ <span>Assistidos ({watchedCount})</span>{" "}
        </Link>
      </nav>

      <div className="sidebar-footer">
        <span>✦</span> Seu universo de filmes
      </div>
    </aside>
  );
}

export default Sidebar;
