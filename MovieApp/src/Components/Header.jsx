import { NavLink } from "react-router-dom"
import {useState, useEffect} from "react"

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={isScrolled ? 'hidden' : ''}>
        <header className="w-full h-20 flex justify-between p-5 bg-black" >
            <p>MOOVEE</p>
            <div  className='w-1/2 flex justify-between '>
            <NavLink>Movies</NavLink>
            <NavLink>TV Shows</NavLink>
            <NavLink>Trending</NavLink>
            <NavLink>In Cinema</NavLink>
            </div>
        </header>
    </div>
  )
}

export default Header