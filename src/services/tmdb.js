
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const BASE_URL = "https://api.themoviedb.org/3";

export async function getPopularMovies(page) {
  const response = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=pt-BR&page=${page}`
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar filmes.");
  }

  const data = await response.json();

  return {
  results: data.results,
  totalPages: data.total_pages,
};
}

export async function searchMovies(query) {
  const response = await fetch(
`${BASE_URL}/search/movie?api_key=${API_KEY}&language=pt-BR&query=${query}`  );

if (!response.ok) {
  throw new Error("Erro ao buscar filmes.");
}

const data = await response.json();
return data.results;
}