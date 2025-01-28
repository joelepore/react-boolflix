import { createContext, useState } from "react"

export const ContextProvider = createContext();

export const GlobalContext = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState(0);

  return (
    <ContextProvider.Provider value={{ movies, series, search, isLoading, isSearching, selectedGenre, setSelectedGenre }}>
      {children}
    </ContextProvider.Provider>
  )
}
