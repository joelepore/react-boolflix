import { BiSearch } from "react-icons/bi"
import { useContext } from "react"
import { ContextProvider } from "../context/GlobalContext"

const SearchBar = () => {
  const { search, setSearch, searchDb } = useContext(ContextProvider);

  return (
    <div className="flex">
      <input
        className="bg-neutral-900 py-2 px-4 focus:outline-none"
        type="text"
        placeholder="Cerca"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={searchDb} className="text-2xl px-2 bg-neutral-900 cursor-pointer"><BiSearch /></button>
    </div>
  )
}

export default SearchBar