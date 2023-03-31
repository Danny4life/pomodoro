//import Home from "./page/homepage/Home"
import StopTimer from "./page/timer/StopTimer"
import { BrowserRouter, Router, Routes } from "react-router-dom"

function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <Router>
        <Routes index="/" element={ <StopTimer />} />
      </Router>
      </BrowserRouter>
      {/* <Home /> */}
     
    </div>
  )
}

export default App
