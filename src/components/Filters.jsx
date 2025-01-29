import FilterSelect from './FilterSelect'
import SearchBar from './SearchBar'
const Filters = () => {
  return (
    <div className='flex gap-6 items-center'>
      <FilterSelect />
      <SearchBar />
    </div>
  )
}

export default Filters