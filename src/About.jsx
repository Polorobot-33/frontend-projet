import Navbar from "./Navbar.jsx";

function About() {
  return (
    <>
      <img
        src="./minesdesel_blanc.png"
        alt="Mines de Sel Logo"
        class="pointer-events-none mx-auto mb-4 h-100 w-100 object-contain opacity-80 drop-shadow-lg select-none"
      />
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="max-w-lg space-y-6 px-4 text-center">
          <h1 class="text-5xl font-bold text-white md:text-6xl">
            Mines de Sel
          </h1>
          <p class="md:text-xxl text-lg text-white">
            Oui 3 milliard d'arbres sont brulés à chaque fois que ce fond
            d'écran de 60Mo est chargé
          </p>
        </div>
      </div>

      {/* Navbar */}
      <Navbar />
    </>
  );
}

export default About;
