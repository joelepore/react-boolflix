import { useContext } from "react"
import { ContextProvider } from "../context/GlobalContext"
import ResultSection from './ResultSection'

const Main = () => {
  const { movies } = useContext(ContextProvider);

  return (
    <main className="container mx-auto">
      <ResultSection title="Film" data={movies} />
    </main>
  )
}

export default Main