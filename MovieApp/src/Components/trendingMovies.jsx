
import { useEffect, useState } from 'react';
import MovieDetails from './MovieDetails';

function TrendingMovies() {
  const [movieData, setMovieData] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const fetchMovieCertifications = async () => {
          const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTkyMGViMDk0NDcyYTNhZWZkNWNmYjJlYmYzMjdiZiIsInN1YiI6IjY1ZDhmZTBjNDJmMTlmMDE4NjE5ZjhjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P8uGnZ46yzu8vQ5GvdqF2okG5JjgeM4Z_lWpZsZ_6BU'
        }
      };

      try {
        const response = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=3e920eb094472a3aefd5cfb2ebf327bf', options);
        if (!response.ok) {
          throw new Error('Failed to fetch movie certifications');
        }
        const data = await response.json();
        setMovieData(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieCertifications();
  }, []); 

  const handleClick = (movie) => {
    setSelectedMovie(movie);
  }

 
  return (
    <div className=' overflow-x-auto overflow-y-hidden h-image-height'>
      <div className='flex'>
        {movieData && movieData.results.map(movie => (
          <button key={movie.id} onClick={() => handleClick(movie)} className='h-72 mx-4'>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className='images rounded-lg'/>
            <p className='text-base text-dark-purple font-semibold'>{movie.title}</p>
            <p className='text-sm text-charcoal-black font-light'>{movie.release_date}</p>
          </button>
        )
        )}
        {selectedMovie && <MovieDetails movie={selectedMovie}/> }
      </div>
    </div>
  );
}

export default TrendingMovies;
