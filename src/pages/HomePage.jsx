import axios from "axios"
import { useEffect, useState } from "react";
import ResultSection from "../components/ResultSection";
import { ContextProvider } from "../context/GlobalContext";
import { useContext } from "react";
import Loader from "../components/Loader";

const HomePage = () => {
  const baseApiUrl = import.meta.env.VITE_BASE_API_URL;
  const authKey = import.meta.env.VITE_API_AUTH_KEY;
  const { isLoading, setIsLoading } = useContext(ContextProvider);
  const nowPlayingMoviesEndpoint = `/movie/now_playing`;
  const popularMoviesEndpoint = `/movie/popular`;
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);

  const fetchNowPlayingMovies = async () => {
    const res = await axios.get(`${baseApiUrl}${nowPlayingMoviesEndpoint}`, {
      headers: {
        'Authorization': authKey
      }
    })
    setNowPlayingMovies(res.data.results);
  }

  const fetchPopularMovies = async () => {
    const res = await axios.get(baseApiUrl + popularMoviesEndpoint, {
      headers: {
        'Authorization': authKey
      }
    })
    setPopularMovies(res.data.results);
  }

  const fetchHomePageData = async () => {
    setIsLoading(prev => true);
    await fetchNowPlayingMovies();
    await fetchPopularMovies();
    setIsLoading(prev => false)
  }

  useEffect(() => async () => fetchHomePageData(), []);

  return (
    <main>
      {isLoading ?
        <Loader /> :
        (
          <>
            <ResultSection title="Film che altri stanno guardando" data={nowPlayingMovies} type="movie" />
            <ResultSection title="Film popolari" data={popularMovies} type="movie" />
          </>
        )}
    </main>
  )
}

export default HomePage