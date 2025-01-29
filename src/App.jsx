import { BrowserRouter, Route, Routes } from "react-router-dom"
import { GlobalContext } from "./context/GlobalContext"
import SearchPage from "./pages/SearchPage"
import DefaultLayout from "./layouts/DefaultLayout"
import HomePage from "./pages/HomePage"
import TitlePage from "./pages/TitlePage"

const App = () => {
  return (
    <GlobalContext>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage} />
            <Route path="/search" Component={SearchPage} />
            <Route path="/title/:id" Component={TitlePage} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContext>
  )
}

export default App