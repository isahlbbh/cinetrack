import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import WatchedPage from "./pages/WatchedPage";
import HomePage from "./pages/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import FavoritesPage from "./pages/FavoritesPage";
import WatchListPage from "./pages/WatchListPage";
import { readFavorites, saveFavorites, toggleFavoriteId } from "./services/favorites.ts";

function App() {
  const [favorites, setFavorites] = useState(() => {
    return readFavorites(localStorage);
  });
  const [watched, setWatched] = useState(() => {
    const savedWatched = localStorage.getItem("watched");
    return savedWatched ? JSON.parse(savedWatched) : [];
  });
  const [watchList, setWatchList] = useState(() => {
    const savedWatchList = localStorage.getItem("watchList");
    return savedWatchList ? JSON.parse(savedWatchList) : [];
  });
  useEffect(() => {
    saveFavorites(localStorage, favorites);
  }, [favorites]);
  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify(watched));
  }, [watched]);
  useEffect(() => {
    localStorage.setItem("watchList", JSON.stringify(watchList));
  }, [watchList]);
  function toggleFavorite(id) {
    setFavorites((current) => toggleFavoriteId(current, id));
  }
  function toggleWatched(id) {
    if (watched.includes(id)) {
      setWatched(watched.filter((watchedId) => watchedId !== id));
    } else {
      setWatched([...watched, id]);
    }
  }
  function toggleWatchList(id) {
    if (watchList.includes(id)) {
      setWatchList(watchList.filter((movieId) => movieId !== id));
    } else {
      setWatchList([...watchList, id]);
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
            watchList={watchList}
            toggleWatchList={toggleWatchList}
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
            watched={watched}
            toggleWatched={toggleWatched}
            watchList={watchList}
            toggleWatchList={toggleWatchList}
          />
        }
      />
      <Route
        path="/watched"
        element={
          <WatchedPage
            watched={watched}
            toggleWatched={toggleWatched}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
            watchList={watchList}
            toggleWatchList={toggleWatchList}
          />
        }
      />
      <Route
        path="/watchlist"
        element={
          <WatchListPage
            favorites={favorites}
            toggleFavorite={toggleFavorite}
            watched={watched}
            toggleWatched={toggleWatched}
            watchList={watchList}
            toggleWatchList={toggleWatchList}
          />
        }
      />
    </Routes>
  );
}

export default App;
