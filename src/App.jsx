import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import FavoritesPage from "./pages/FavoritesPage";
import { useState, useEffect } from "react";

function App() {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });
  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage favorites={favorites} setFavorites={setFavorites} />}
      />

      <Route path="/movie/:id" element={<MovieDetailsPage />} />

      <Route
        path="/favorites"
        element={<FavoritesPage favorites={favorites} />}
      />
    </Routes>
  );
}

export default App;
