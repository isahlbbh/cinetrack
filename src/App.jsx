import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import MovieCard from "./components/MovieCard";
import { getPopularMovies, searchMovies } from "./services/tmdb";
import "../styles/App.css";

function App() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  useEffect(() => {
    async function loadMovies() {
      setLoading(true);
      try {
        const data = search.trim()
          ? await searchMovies(search)
          : await getPopularMovies(page);

        setMovies((prevMovies) =>
          search.trim() ? data : [...prevMovies, ...data.results],
        );

        if (!search.trim() && (page >= 5 || page >= data.totalPages)) {
          setHasMore(false);
        }
      } catch (error) {
        console.error("Erro ao carregar filmes:", error);
        setError("Não foi possível carregar os filmes.");
      } finally {
        setLoading(false);
      }
    }

    loadMovies();
  }, [page, search]);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="app-layout">
      <Sidebar />

      <div className="main-content">
        <Header search={search} setSearch={setSearch} />

        <main className="page-content">
          <h1>Explorar filmes</h1>

          {loading && movies.length === 0 ? (
            <p className="empty-message">Carregando filmes...</p>
          ) : error ? (
            <p className="empty-message">{error}</p>
          ) : filteredMovies.length === 0 ? (
            <p className="empty-message">Nenhum filme encontrado. 🎬</p>
          ) : (
            <div className="movies-grid">
              {filteredMovies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  title={movie.title}
                  year={movie.release_date?.slice(0, 4) || "—"}
                  rating={movie.vote_average.toFixed(1)}
                  poster={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                      : "https://placehold.co/300x450/211b30/c4a4ff?text=Sem+poster"
                  }
                />
              ))}
            </div>
          )}
          {hasMore && !search.trim() && (
            <button
              className="load-more-btn"
              disabled={loading}
              onClick={() => setPage(page + 1)}
            >
              {loading ? "Carregando..." : "Carregar mais filmes"}
            </button>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
