import "../../styles/Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <span className="brand-icon">✦</span>
        <h2>CineTrack</h2>
      </div>

      <p className="sidebar-label">MENU</p>

      <nav className="sidebar-nav">
        <a href="#" className="sidebar-link active">
          ◈ <span>Explorar</span>
        </a>
        <a href="#" className="sidebar-link">
          ♡ <span>Minha lista</span>
        </a>
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
