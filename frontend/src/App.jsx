import { BrowserRouter,Routes,Route } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Apppage from "./pages/Apppage"
const App = ()=>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route> 
        <Route path="/app" element={<Apppage></Apppage>}></Route>
      </Routes>    
    </BrowserRouter>
  )
}
export default App