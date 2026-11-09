import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MovieCard from "../components/MovieCard";

import { getPopularMovies, searchMovies } from "../services/tmdb";

import "../../styles/App.css";

function HomePage({ favorites, toggleFavorite, watched, toggleWatched }) {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const genre = searchParams.get("genre") || "all";

  const genres = [
    { id: "all", name: "Todos" },
    { id: 27, name: "Terror" },
    { id: 35, name: "Comédia" },
    { id: 10749, name: "Romance" },
    { id: 878, name: "Ficção científica" },
    { id: 18, name: "Drama" },
  ];

  function handleMovieClick(id) {
    navigate(`/movie/${id}`);
  }

  useEffect(() => {
    async function loadMovies() {
      setLoading(true);
      setError("");

      try {
        const data = search.trim()
          ? await searchMovies(search)
          : await getPopularMovies(page);

        if (search.trim()) {
          setMovies(data);
        } else if (page === 1) {
          setMovies(data.results);
        } else {
          setMovies((prevMovies) => [...prevMovies, ...data.results]);
        }

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

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesGenre =
      genre === "all" || movie.genre_ids.includes(Number(genre));

    return matchesSearch && matchesGenre;
  });
  return (
    <div className="app-layout">
      <Sidebar
        favoritesCount={favorites.length}
        watchedCount={watched.length}
      />

      <div className="main-content">
        <Header search={search} setSearch={setSearch} />

        <main className="page-content">
          <h1>Explorar filmes</h1>

          <select
            className="genre-select"
            value={genre}
            onChange={(event) => setSearchParams({ genre: event.target.value })}
          >
            {genres.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
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
                  isFavorite={favorites.includes(movie.id)}
                  onFavoriteClick={toggleFavorite}
                  isWatched={watched.includes(movie.id)}
                  onWatchedClick={toggleWatched}
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  year={movie.release_date?.slice(0, 4) || "—"}
                  rating={movie.vote_average.toFixed(1)}
                  poster={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                      : "https://placehold.co/300x450/211b30/c4a4ff?text=Sem+poster"
                  }
                  onClick={() => handleMovieClick(movie.id)}
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

export default HomePage;
