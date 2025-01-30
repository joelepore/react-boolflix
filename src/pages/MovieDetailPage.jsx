import { useParams } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from '../components/Loader'
import Actor from "../components/Actor";
import app from "../config/env";

const MovieDetailPage = () => {
  const { baseApiUrl, authKey, baseImgUrl } = app;
  const { id } = useParams();
  const movieDetailEndpoint = `/movie/${id}`;

  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const options = {
    headers: {
      'Authorization': authKey
    },
    params: {
      'language': 'it-IT'
    }
  }

  const fetchMovie = async () => {
    const response = await axios.get(baseApiUrl + movieDetailEndpoint, options);
    setMovie(response.data);
  }

  const fetchCast = async () => {
    const res = await axios.get(`${baseApiUrl}${movieDetailEndpoint}/credits`, options);
    setCast(res.data.cast);
  }

  const fetchData = async () => {
    setIsLoading(true);
    await fetchMovie();
    await fetchCast();
    // isLoading verra' settato a false dall'img onLoad
  }

  const handleOnLoad = () => {
    setIsLoading(false);
  }

  useEffect(() => {
    const fetch = async () => fetchData();
    fetch();
  }, []);

  return (
    <>
      <main className="relative">
        <img
          className="absolute -z-20 h-full object-cover w-full"
          src={`${baseImgUrl}/${movie?.backdrop_path}>`}
          alt={movie?.title}
          onLoad={handleOnLoad}
          onError={e => e.target.src = `https://placehold.co/1920x1080`}
        />
        {isLoading && (movie === null || cast === null)
          ?
          <Loader />
          :
          (
            <>
              <div className="absolute -z-10 bg-gradient-to-r from-black to-transparent w-full h-full">
                {/* Background Overlay creato per migliorare la leggiblita' */}
              </div>
              <div className="container mx-auto py-24 grid grid-cols-1 md:grid-cols-2 h-full items-center">
                <div className="">
                  <h1 className="text-5xl font-bold">{movie?.title}</h1>
                  <h3 className="text-2xl">{movie?.original_title}</h3>
                  <p className="py-5">{movie?.overview}</p>
                  <div className="my-4">
                    <strong className="mb-2 inline-block">Generi</strong>
                    <ul className="flex flex-wrap gap-2">
                      {movie?.genres.map(genre => (
                        <li className="px-3 bg-neutral-800 rounded-full" key={genre.id}>{genre.name}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="my-4">
                    <strong className="mb-2 inline-block">Cast</strong>
                    <ul>
                      {cast?.slice(0, 5).map(actor => (
                        <Actor key={actor.id} data={actor} />
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </>
          )
        }
      </main>
    </>
  )
}

export default MovieDetailPage