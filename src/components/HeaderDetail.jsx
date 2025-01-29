import React from 'react'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'

const HeaderDetail = () => {
  return (
    <header className="flex justify-between items-center h-20 px-6">
      <Link to="/" className="text-2xl uppercase text-red-600 font-bold">Boolflix</Link>
      <SearchBar />
    </header>
  )
}

export default HeaderDetail