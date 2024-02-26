import { Outlet } from "react-router-dom"
import Header from "./Components/Header"
import MovieCertifications from "./Components/Movies"

const App = () => {
  return (
   <>
    <div>
    <Header/>
    <MovieCertifications/>
    </div>
    <Outlet/>
   </>
  )
}

export default App