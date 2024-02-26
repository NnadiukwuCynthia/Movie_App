import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <div className="w-full h-24 flex justify-between p-5 bg-black" >
        <p>MOOVEE</p>
        <div  className='w-1/2 flex justify-between '>
        <NavLink>Movies</NavLink>
        <NavLink>TV Shows</NavLink>
        <NavLink>Trending</NavLink>
        <NavLink>In Cinema</NavLink>
        </div>
    </div>
  )
}

export default Header