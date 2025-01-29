import Card from './Card'
import { ContextProvider } from '../context/GlobalContext'
import { useContext, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const ResultSection = ({ title, data }) => {

  const { selectedGenre, movies, series } = useContext(ContextProvider);
  const [filteredTitles, setFilteredTitles] = useState(data);

  useEffect(() => {
    if (selectedGenre == 0) {
      setFilteredTitles(data);
    } else {
      setFilteredTitles(data.filter(item => item.genre_ids.includes(selectedGenre)));
    }
  }, [selectedGenre, movies, series])

  return (
    <section className='pb-8 px-4'>
      {filteredTitles.length > 0 && <h2 className="uppercase text-3xl font-bold py-2">{title}</h2>}
      <Swiper
        modules={[Navigation]}
        spaceBetween={12}
        slidesPerView={6}
        navigation={true}
      >
        {filteredTitles.map(item => (
          <SwiperSlide key={item.id}>
            <Card data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <div className='grid grid-cols-3 sm:grid-cols-6 gap-4'>
      </div> */}
    </section>
  )
}

export default ResultSection