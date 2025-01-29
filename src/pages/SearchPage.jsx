import { useContext } from "react"
import { ContextProvider } from "../context/GlobalContext"
import ResultSection from '../components/ResultSection'
import Loader from "../components/Loader"

const SearchPage = () => {
  const { movies, series, isLoading } = useContext(ContextProvider);

  return (
    <main className="container mx-auto pb-12">
      {isLoading ?
        <Loader /> :
        (
          <>
            <ResultSection title="Film" data={movies} />
            <ResultSection title="Serie" data={series} />
          </>

        )
      }
    </main>
  )
}

export default SearchPage