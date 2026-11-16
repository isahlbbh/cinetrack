import "../../styles/Header.css";

function Header({ search, setSearch }) {
  return (
    <header className="header">
      <div className="header-search">
        <span className="search-icon" aria-hidden="true">
          ⌕
        </span>
        <input
          type="text"
          aria-label="Pesquisar filmes e séries"
          placeholder="Pesquisar filmes e séries..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="header-profile">
        <span className="profile-status" aria-hidden="true"></span>{" "}
        <span className="profile-name">Meu espaço</span>
        <div className="profile-avatar" aria-hidden="true">
          C
        </div>{" "}
      </div>
    </header>
  );
}

export default Header;
