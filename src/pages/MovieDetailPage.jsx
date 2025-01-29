import { useParams } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from '../components/Loader'
import Actor from "../components/Actor";

const MovieDetailPage = () => {
  const baseApiUrl = import.meta.env.VITE_BASE_API_URL;
  const apiKey = import.meta.env.VITE_API_AUTH_KEY;
  const baseImgUrl = import.meta.env.VITE_BASE_IMG_URL;
  const { id } = useParams();
  const movieDetailEndpoint = `/movie/${id}`;

  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState(null);

  const options = {
    headers: {
      'Authorization': apiKey
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
    await fetchMovie();
    await fetchCast();
  }
  useEffect(() => async () => fetchData(), []);

  return (
    <>
      {movie === null || cast === null
        ?
        <Loader />
        :
        (
          <main className="relative">
            <img
              className="absolute -z-20 h-full object-cover w-full"
              src={`${baseImgUrl}/${movie.backdrop_path}>`}
              alt={movie.title}
            />
            <div className="absolute -z-10 bg-gradient-to-r from-black to-transparent w-full h-full">
              {/* Background Overlay creato per migliorare la leggiblita' */}
            </div>
            <div className="container mx-auto py-24 grid grid-cols-1 md:grid-cols-2 h-full items-center">
              <div className="">
                <h1 className="text-5xl font-bold">{movie.title}</h1>
                <h3 className="text-2xl">{movie.original_title}</h3>
                <p className="py-5">{movie.overview}</p>
                <div className="my-4">
                  <strong className="mb-2 inline-block">Generi</strong>
                  <ul className="flex flex-wrap gap-2">
                    {movie.genres.map(genre => (
                      <li className="px-3 bg-neutral-800 rounded-full" key={genre.id}>{genre.name}</li>
                    ))}
                  </ul>
                </div>
                <div className="my-4">
                  <strong className="mb-2 inline-block">Cast</strong>
                  <ul>
                    {cast.slice(0, 5).map(actor => (
                      <Actor key={actor.id} data={actor} />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </main>

        )
      }
    </>
  )
}

export default MovieDetailPage