import Navbar from "./Navbar.jsx";
import backgroundVideo from "./assets/bg-video.mp4"

function Home() {
  return (
    <div class="relative w-full h-screen overflow-hidden">
      <video
        class="absolute inset-0 w-full h-full object-cover -z-10"
        src={backgroundVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      
    <div class="absolute inset-0 flex items-center justify-center">
        <div class="text-center space-y-6 px-4 max-w-lg">
          <h1 class="text-white text-5xl md:text-6xl font-bold">
            Mine de Sel
          </h1>
          <p class="text-white text-lg md:text-xl">
           Le Sel ça vient de la mer
          </p>
          <button
            class="relative filter backdrop-blur-sm bg-white/10 [box-shadow:inset_1px_1px_1px_rgba(255,255,255,0.75)] dark:[box-shadow:inset_1px_1px_1px_rgba(255,255,255,0.15)] hover:bg-white/40 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 mx-auto"
            
          >
            Bouton inutile
          </button>
        </div>
      </div>

      {/* Navbar */}
      <div class="absolute bottom-8 left-0 w-full z-20">
        <Navbar />
      </div>
    </div>
  );
}

export default Home;
