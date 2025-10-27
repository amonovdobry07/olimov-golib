import "./App.css"
import About from "./components/About/About"
import Header from "./components/Header/Header"
import Work from "./components/Work/Work"
import Workers from "./components/Workers/Workers"


const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Workers />
    </div>
  )
}

export default App