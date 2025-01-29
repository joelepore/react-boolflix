import { useContext } from "react"
import { ContextProvider } from "../context/GlobalContext"

const FilterSelect = () => {
  const { genres, setSelectedGenre } = useContext(ContextProvider);

  return (
    <select className="bg-black no-scrollbar" onChange={(e) => setSelectedGenre(e.target.value)}>
      <option value="null">Tutti i generi</option>
      {genres.map(genre => (
        <option key={genre.id} value={genre.id}>{genre.name}</option>
      ))}
    </select>
  )
}

export default FilterSelect