import { IoClose } from "react-icons/io5";
import { useState } from "react";
import PropTypes from 'prop-types';
import { FaListUl, FaHeart, FaBookmark, FaStar } from "react-icons/fa";

const MovieDetails = ({movie}) => {
    const [closeBtn, setCloseBtn] = useState(true);

    const handleClose = () => {
        setCloseBtn(prevCloseBtn => !prevCloseBtn);
    };

    const backgroundImageStyle = {
        backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
        
      };
  return (
    <div className={`w-full h-screen bg-charcoal-black flex justify-center align-middle fixed inset-0 ${closeBtn ? '' : 'hidden'}`}>
        <button onClick={handleClose}><IoClose className="text-5xl bg-text-grey text-white rounded-full absolute right-2 top-2"/></button>
        <div className="w-full h-details-height my-40" style={backgroundImageStyle}>
            <div className="w-full h-full bg-hex-background flex">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="h-5/6 w-80 mx-12 my-7 rounded-lg"/>
            <div className="justify-between w-3/4 ml-7 my-7">
                <h1 className="text-light">{movie.title}</h1>
                <div className="flex">
                    <p className="text-light text-base font-extrabold pr-4">lang: {movie.original_language}</p>
                    <p className="text-light text-base font-extrabold">Release Date: {movie.release_date}</p>
                </div>
                <div className="flex my-4">
                    <p className="text-light text-sm font-extrabold p-4 mr-6 bg-Bgc rounded-full"><FaListUl/></p>
                    <p className="text-light text-sm font-extrabold p-4 mr-6 bg-Bgc rounded-full"><FaHeart/></p>
                    <p className="text-light text-sm font-extrabold p-4 mr-6 bg-Bgc rounded-full"><FaBookmark/></p>
                    <p className="text-light text-sm font-extrabold p-4 mr-6 bg-Bgc rounded-full"><FaStar/></p>
                </div>
                <p className="text-light text-lg font-extrabold">Overview: <br /> {movie.overview}</p>
            </div>
            </div>
        </div>
    </div>
  )
}

MovieDetails.propTypes = {
    movie: PropTypes.shape({
      title: PropTypes.string.isRequired,
      original_language: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
      backdrop_path: PropTypes.string.isRequired,
    }).isRequired,
  };

export default MovieDetails