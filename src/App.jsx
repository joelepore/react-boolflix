import Header from "./components/Header"
import Main from "./components/Main"
import { GlobalContext } from "./context/GlobalContext"

const App = () => {
  return (
    <GlobalContext>
      <Header />
      <Main />
    </GlobalContext>
  )
}

export default App