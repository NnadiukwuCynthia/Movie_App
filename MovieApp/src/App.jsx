import { Outlet } from "react-router-dom"
import Header from "./Components/Header"
import Movies from './pages/Movies';
import Hero from "./Components/Hero";
import Trending from './pages/Trending';
import InCinema from './pages/InCinema';


const App = () => {
  return (
   <>
    <div>
    <Header/>
    <Hero/>
    <Movies/>
    <Trending/>
    <InCinema/>
    </div>
    <Outlet/>
   </>
  )
}

export default App