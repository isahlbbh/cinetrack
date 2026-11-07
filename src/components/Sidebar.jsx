import "../../styles/Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <span className="brand-icon">✦</span>
        <h2>CineTrack</h2>
      </div>

      <p className="sidebar-label">MENU</p>

      <nav className="sidebar-nav">
        <Link to="/" className="sidebar-link active">
          ◈ <span>Explorar</span>
        </Link>
        <Link to="/favorites" className="sidebar-link">
          ♡ <span>Minha lista</span>
        </Link>
        <a href="#" className="sidebar-link">
          ✓ <span>Assistidos</span>
        </a>
      </nav>

      <div className="sidebar-footer">
        <span>✦</span> Seu universo de filmes
      </div>
    </aside>
  );
}

export default Sidebar;
