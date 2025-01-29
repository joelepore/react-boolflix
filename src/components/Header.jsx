import Filters from "./Filters"
import { Link } from "react-router-dom"
const Header = () => {
  return (
    <header className="flex justify-between items-center h-20 px-6">
      <Link to="/" className="text-2xl uppercase text-red-600 font-bold">Boolflix</Link>
      <Filters />
    </header>
  )
}

export default Header