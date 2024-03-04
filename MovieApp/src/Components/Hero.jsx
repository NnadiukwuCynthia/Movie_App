
const Hero = () => {
  return (
    <div className="w-full h-96 hero bg-cover bg-center relative"> 
    <div className="w-full h-full flex flex-col justify-center pl-10 bg-charcoal-black bg-cover bg-center absolute">
      <p className="text-6xl">Welcome.</p>
      <p className="font-bold text-2xl">Millions of movies, TV shows to discover. Explore now!!!.</p>
      <input type="text" className="w-4/4 h-12 mr-8 px-10 bg-light mt-5 rounded-full text-base outline-none" placeholder="Search For Movie or TV Shows..." />
    </div>
    </div>
  )
}

export default Hero