import Filters from "./Filters"
const Header = () => {
  return (
    <header className="flex justify-between items-center h-20 px-6">
      <strong className="text-2xl uppercase text-red-600">Boolflix</strong>
      <Filters />
    </header>
  )
}

export default Header