import { useEffect, useState } from 'react';
import Image from '../assets/Images/background.jpg'

function MovieCertifications() {
  const [movieData, setMovieData] = useState(null);

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
        const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=3e920eb094472a3aefd5cfb2ebf327bf', options);
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

  return (
    <div className='flex'>
      {movieData && movieData.results.map(movie => (
        <div key={movie.id} className='w-36 h-44'>
          <img src={Image} alt="" className='w-full'/>
          <p>{movie.title}</p>
        </div>  
      )
        )}
    </div>
  );
}

export default MovieCertifications;
