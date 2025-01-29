import { createContext, useEffect, useState } from "react"
import axios from "axios";

export const ContextProvider = createContext();

export const GlobalContext = ({ children }) => {

  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [search, setSearch] = useState('');
  const [genres, setGenres] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState(0);

  const baseApiUrl = `https://api.themoviedb.org/3`;
  const searchMovieEndpoint = `https://api.themoviedb.org/3/search/movie?include_adult=false&language=it-IT&page=1&query=${search}`;
  const searchSeriesEndpoint = `https://api.themoviedb.org/3/search/tv?include_adult=false&language=it-IT&page=1&query=${search}`;
  const headers = {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTg1MzllOTI0MzgxYjA4N2U5ZDhmNGI2MDdhYWYxZiIsIm5iZiI6MTczMjIxMzQ2Ny45MDcsInN1YiI6IjY3M2Y3YWRiZjQwMjgyZWJjYjliOTkzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JMcXNTyPvvTuKW413U-B5yxCOz4twSM5MNCCMWR76F4'
  }

  const fetchGenres = async (type) => {
    const response = await axios.get(`${baseApiUrl}/genre/${type}/list?language=it`, { headers })
    return response.data.genres;
  }

  const searchMovies = async () => {
    const response = await axios.get(searchMovieEndpoint, { headers });
    setMovies(response.data.results);
  }

  const searchSeries = async () => {
    const response = await axios.get(searchSeriesEndpoint, { headers });
    setSeries(response.data.results);
  }

  const searchDb = (navigateToSearchPage) => {
    setSelectedGenre(0);
    setSearch('');
    setIsLoading(true);
    setIsSearching(true);
    searchMovies();
    searchSeries();
    setIsLoading(false);
    setIsSearching(false);
    navigateToSearchPage();
  }

  // Prendo tutti i generi dall'api e unisco gli array con elementi univoci
  useEffect(() => (
    async () => {
      const movieGenres = await fetchGenres('movie');
      const tvGenres = await fetchGenres('tv');
      let genres = tvGenres.concat(movieGenres.filter(item2 => !tvGenres.some(item1 => item1.id === item2.id)))
      genres.sort((a, b) => a.name.localeCompare(b.name));
      setGenres(genres);
    }
  ), []);

  const value = {
    movies,
    series,
    search,
    setSearch,
    isLoading,
    setIsLoading,
    isSearching,
    selectedGenre,
    setSelectedGenre,
    searchDb,
    genres
  }


  return (
    <ContextProvider.Provider value={value}>
      {children}
    </ContextProvider.Provider>
  )
}
