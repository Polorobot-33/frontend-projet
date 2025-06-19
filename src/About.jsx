import Navbar from "./Navbar.jsx";

function About() {
  return (
    <>
    
      <img
                  src="./src/assets/minesdesel_blanc.png"
                  alt="Mines de Sel Logo"
                  class="mx-auto mb-4 w-100 h-100 object-contain drop-shadow-lg select-none pointer-events-none opacity-80"
                />
          <div class="absolute inset-0 flex items-center justify-center">
              <div class="text-center space-y-6 px-4 max-w-lg">
                <h1 class="text-white text-5xl md:text-6xl font-bold">
                  Mines de Sel
                </h1>
                <p class="text-white text-lg md:text-xxl">
                 Oui 3 milliard d'arbres sont brulés à chaque fois que ce fond d'écran de 60Mo est chargé
                </p>
                
              </div>
            </div>
      
            {/* Navbar */}
            <div class="absolute bottom-8 left-0 w-full z-20">
              <Navbar />
            </div>
      
          
          

    </>
  );
}

export default About;
