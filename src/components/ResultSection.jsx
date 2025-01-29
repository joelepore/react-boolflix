import Card from './Card'
import { ContextProvider } from '../context/GlobalContext'
import { useContext, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useNavigate } from 'react-router-dom';

const ResultSection = ({ title, data, type }) => {

  const { selectedGenre, movies, series, isLoading } = useContext(ContextProvider);
  const [filteredTitles, setFilteredTitles] = useState(data);
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedGenre == 0) {
      setFilteredTitles(data);
    } else {
      setFilteredTitles(data.filter(item => item.genre_ids.includes(selectedGenre)));
    }
  }, [selectedGenre, movies, series, isLoading])

  return (
    <>
      {filteredTitles.length > 0 && (
        <section className='pb-8 px-4'>
          <h2 className="text-3xl font-bold pb-4">{title}</h2>
          <Swiper
            modules={[Navigation]}
            spaceBetween={12}
            slidesPerView={6}
            navigation={true}
            loop
          >
            {filteredTitles.map(item => (
              <SwiperSlide key={item.id}>
                <Card data={item} onClick={() => navigate(`/${type}/${item.id}`)} />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      )}
    </>
  )
}

export default ResultSection