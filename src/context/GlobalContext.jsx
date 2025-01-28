import { createContext, useState } from "react"
import axios from "axios";

export const ContextProvider = createContext();

export const GlobalContext = ({ children }) => {

  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState(0);

  const searchMovieEndpoint = `https://api.themoviedb.org/3/search/movie?include_adult=true&language=it-IT&page=1&query=${search}`;
  const searchSeriesEndpoint = `https://api.themoviedb.org/3/search/tv?include_adult=true&language=it-IT&page=1&query=${search}`;
  const headers = {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTg1MzllOTI0MzgxYjA4N2U5ZDhmNGI2MDdhYWYxZiIsIm5iZiI6MTczMjIxMzQ2Ny45MDcsInN1YiI6IjY3M2Y3YWRiZjQwMjgyZWJjYjliOTkzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JMcXNTyPvvTuKW413U-B5yxCOz4twSM5MNCCMWR76F4'
  }

  const searchMovies = async () => {
    const response = await axios.get(searchMovieEndpoint, { headers });
    setMovies(response.data.results);
  }

  const searchSeries = async () => {
    const response = await axios.get(searchSeriesEndpoint, { headers });
    setSeries(response.data.results);
  }

  const searchDb = () => {
    setIsLoading(true);
    setIsSearching(true);
    searchMovies();
    searchSeries();
    setIsLoading(false);
    setIsSearching(false);
  }


  return (
    <ContextProvider.Provider value={{ movies, series, search, setSearch, isLoading, isSearching, selectedGenre, setSelectedGenre, searchDb }}>
      {children}
    </ContextProvider.Provider>
  )
}
