import "../../styles/Header.css";

function Header({ search, setSearch }) {
  return (
    <header className="header">
      <div className="header-search">
        <span className="search-icon">⌕</span>

        <input
          type="text"
          placeholder="Pesquisar filmes e séries..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="header-profile">
        <span className="profile-status"></span>
        <span className="profile-name">Meu espaço</span>
        <div className="profile-avatar">C</div>
      </div>
    </header>
  );
}

export default Header;
