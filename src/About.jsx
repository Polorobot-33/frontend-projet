import Navbar from "./Navbar.jsx";

function About() {
  return (
    <>
      <img
        src="./minesdesel_blanc.png"
        alt="Mines de Sel Logo"
        class="pointer-events-none mx-auto mb-4 h-100 w-100 object-contain opacity-80 drop-shadow-lg select-none"
      />
      <div class="absolute inset-0 flex flex-col items-center justify-center">
        <div class="max-w-lg space-y-6 px-4 text-center">
          <h1 class="text-5xl font-bold text-white">
            Mines de Sel
          </h1>
        </div>
        <p class="text-lg text-white text-center p-6">
          Notre mission est de répande le plus de sel possible à travers le
          monde entier. Leurs raisons sont nombreuses et jamais légitime, mais vous avez face à vous les mineurs les plus aigris de la promo. Il ont même essayé de reproduire le liquidglass de apple dans un but satirique mais le résultat est un site très lent a charger aux visuels médiocres qui est aussi responsive que Basile Marchand quand il n'a pas bu son café.
          <br/>
          P.S. Oui 3 milliard d'arbres sont brulés à chaque fois que ce fond
          d'écran de 98Mo est chargé
        </p>
      </div>

      {/* Navbar */}
      <Navbar />
    </>
  );
}

export default About;
