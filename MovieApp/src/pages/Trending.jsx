import TrendingMovies from "../Components/trendingMovies"

const Trending = () => {
  return (
    <div className="trending text-4xl text-light font-bold p-5">
      <p  className="mx-4">Trending Movies</p>
      <TrendingMovies/>
    </div>
  )
}

export default Trending