import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import WatchedPage from "./pages/WatchedPage";
import HomePage from "./pages/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import FavoritesPage from "./pages/FavoritesPage";
import WatchListPage from "./pages/WatchListPage";

function App() {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
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
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);
  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify(watched));
  }, [watched]);
  useEffect(() => {
    localStorage.setItem("watchList", JSON.stringify(watchList));
  }, [watchList]);
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
            watchList={watchList}
            toggleWatchList={toggleWatchList}
          />
        }
      />{" "}
    </Routes>
  );
}

export default App;
