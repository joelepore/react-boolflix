import Card from './Card'
import { ContextProvider } from '../context/GlobalContext'
import { useContext, useEffect, useState } from 'react'

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
      <div className='grid grid-cols-3 sm:grid-cols-6 gap-4'>
        {filteredTitles.map(item => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </section>
  )
}

export default ResultSection