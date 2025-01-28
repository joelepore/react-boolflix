import { createContext } from "react"

export const ContextProvider = createContext();

export const GlobalContext = ({ children }) => {
  return (
    <ContextProvider.Provider>
      {children}
    </ContextProvider.Provider>
  )
}
