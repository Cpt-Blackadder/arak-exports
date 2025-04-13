import BackgroundImg from '../assets/background.jpg'; 

function Home() {
  return (
    <div
      className="min-h-screen flex items-center bg-cover bg-center backdrop-blur-sm brightness-70"
      style={{ backgroundImage: `url(${BackgroundImg})` }}
    >
      <div className="px-10 md:px-18">
        <h1 className="text-8xl md:text-30xl font-bold text-white leading-none">ARAK</h1>
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-widest">
          EXPORTS
        </h2>
        <p className="text-lg md:text-xl text-white mt-4 max-w-md">
        Discover the finest nostalgic and traditional exports from our curated collection.
        </p>
      </div>
    </div>
  );
}

export default Home;