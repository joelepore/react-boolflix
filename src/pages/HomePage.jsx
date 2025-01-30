import axios from "axios"
import { useEffect, useState } from "react";
import ResultSection from "../components/ResultSection";
import { ContextProvider } from "../context/GlobalContext";
import { useContext } from "react";
import Loader from "../components/Loader";
import app from "../config/env";

const HomePage = () => {
  const { baseApiUrl, authKey } = app;
  const { isLoading, setIsLoading } = useContext(ContextProvider);
  const nowPlayingMoviesEndpoint = `/movie/now_playing`;
  const popularMoviesEndpoint = `/movie/popular`;
  const popularShowsEndpoint = `/tv/popular`;
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [popularShows, setPopularShows] = useState([]);

  const options = {
    headers: {
      'Authorization': authKey
    },
    params: {
      language: 'it-IT'
    }
  }

  const fetchNowPlayingMovies = async () => {
    const res = await axios.get(`${baseApiUrl}${nowPlayingMoviesEndpoint}`, options);
    setNowPlayingMovies(res.data.results);
  }

  const fetchPopularMovies = async () => {
    const res = await axios.get(baseApiUrl + popularMoviesEndpoint, options);
    setPopularMovies(res.data.results);
  }

  const fetchPopularShows = async () => {
    const res = await axios.get(baseApiUrl + popularShowsEndpoint, options)
    setPopularShows(res.data.results);
  }

  const fetchHomePageData = async () => {
    setIsLoading(prev => true);
    await fetchNowPlayingMovies();
    await fetchPopularMovies();
    await fetchPopularShows();
    setIsLoading(prev => false)
  }

  useEffect(() => async () => fetchHomePageData(), []);

  return (
    <>
      {isLoading ?
        <Loader /> :
        (
          <main className="container mx-auto">
            <ResultSection title="Film che altri stanno guardando" data={nowPlayingMovies} type="movie" />
            <ResultSection title="Film popolari" data={popularMovies} type="movie" />
            <ResultSection title="Serie popolari" data={popularShows} type="tv" />
          </main>
        )}
    </>
  )
}

export default HomePage