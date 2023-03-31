//import Home from "./page/homepage/Home"
import StopTimer from "./page/timer/StopTimer"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route index element={ <StopTimer />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
