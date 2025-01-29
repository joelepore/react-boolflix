import { BrowserRouter, Route, Routes } from "react-router-dom"
import { GlobalContext } from "./context/GlobalContext"
import SearchPage from "./pages/SearchPage"
import DefaultLayout from "./layouts/DefaultLayout"
import DetailLayout from "./layouts/DetailLayout"
import HomePage from "./pages/HomePage"
import MovieDetailPage from "./pages/MovieDetailPage"

const App = () => {
  return (
    <GlobalContext>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage} />
            <Route path="/search" Component={SearchPage} />
          </Route>
          <Route Component={DetailLayout}>
            <Route path="/movie/:id" Component={MovieDetailPage} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContext>
  )
}

export default App