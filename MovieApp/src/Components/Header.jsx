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
        <header className="w-full h-20 flex justify-between p-5 bg-Bgc" >
            <p className="text-4xl text-gold font-bold">MOOVEE</p>
            <div  className='w-1/2 flex justify-between '>
            <NavLink className='font-semibold'>Movies</NavLink>
            <NavLink className='font-semibold'>TV Shows</NavLink>
            <NavLink className='font-semibold'>Trending</NavLink>
            <NavLink className='font-semibold'>In Cinema</NavLink>
            </div>
        </header>
    </div>
  )
}

export default Header