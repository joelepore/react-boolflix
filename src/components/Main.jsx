import { useContext } from "react"
import { ContextProvider } from "../context/GlobalContext"
import ResultSection from './ResultSection'

const Main = () => {
  const { movies, series } = useContext(ContextProvider);

  return (
    <main className="container mx-auto pb-12">
      <ResultSection title="Film" data={movies} />
      <ResultSection title="Serie" data={series} />
    </main>
  )
}

export default Main