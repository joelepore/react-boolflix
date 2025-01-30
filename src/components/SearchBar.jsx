import { BiSearch } from "react-icons/bi"
import { useContext } from "react"
import { ContextProvider } from "../context/GlobalContext"
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, searchDb } = useContext(ContextProvider);
  const navigate = useNavigate();

  const handleSearch = () => {
    searchDb(() => navigate('/search'));
  }

  return (
    <div className="flex">
      <input
        className="bg-neutral-900 py-2 px-4 focus:outline-none"
        type="text"
        placeholder="Cerca"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyUp={e => {
          if (e.key === 'Enter') handleSearch();
        }}
      />
      <button
        onClick={handleSearch}
        className="text-2xl px-2 bg-neutral-900 cursor-pointer"
      ><BiSearch /></button>
    </div>
  )
}

export default SearchBar