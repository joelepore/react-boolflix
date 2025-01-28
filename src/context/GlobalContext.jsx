import { createContext, useState } from "react"

export const ContextProvider = createContext();

export const GlobalContext = ({ children }) => {
  const initialGlobalState = {
    movies: [],
    series: [],
    search: [],
    isLoading: false,
    isSearching: false,
  }
  const [globalState, setGlobalState] = useState(initialGlobalState);

  const [selectedGenre, setSelectedGenre] = useState(0);

  return (
    <ContextProvider.Provider value={{ globalState, setGlobalState, selectedGenre, setSelectedGenre }}>
      {children}
    </ContextProvider.Provider>
  )
}
