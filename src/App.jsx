import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import FavoritesPage from "./pages/FavoritesPage";

function App() {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  function toggleFavorite(id) {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favoriteId) => favoriteId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage favorites={favorites} toggleFavorite={toggleFavorite} />
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
    </Routes>
  );
}

export default App;
