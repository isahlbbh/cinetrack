import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import WatchedPage from "./pages/WatchedPage";
import HomePage from "./pages/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import FavoritesPage from "./pages/FavoritesPage";

function App() {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });
  const [watched, setWatched] = useState(() => {
    const savedWatched = localStorage.getItem("watched");
    return savedWatched ? JSON.parse(savedWatched) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);
  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify(watched));
  }, [watched]);
  function toggleFavorite(id) {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favoriteId) => favoriteId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  }
  function toggleWatched(id) {
    if (watched.includes(id)) {
      setWatched(watched.filter((watchedId) => watchedId !== id));
    } else {
      setWatched([...watched, id]);
    }
  }
  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage
            favorites={favorites}
            toggleFavorite={toggleFavorite}
            watched={watched}
            toggleWatched={toggleWatched}
          />
        }
      />
      <Route path="/movie/:id" element={<MovieDetailsPage />} />
      <Route
        path="/favorites"
        element={
          <FavoritesPage
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />
        }
      />
      <Route
        path="/watched"
        element={
          <WatchedPage watched={watched} toggleWatched={toggleWatched} />
        }
      />{" "}
    </Routes>
  );
}

export default App;
