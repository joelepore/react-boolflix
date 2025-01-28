import Header from "./components/Header"
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