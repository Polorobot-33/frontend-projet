import Navbar from "./Navbar.jsx";
import logo from "./assets/minesdesel_blanc.png"

function About() {
  return (
    <>
      <div class="flex flex-col items-center">
        <img
          src={logo}
          alt="Mines de Sel Logo"
          class="m-10 w-100 object-contain opacity-80 drop-shadow-lg"
        />
        <div class="flex flex-col items-center">
          <div class="max-w-lg space-y-6 px-4 text-center">
            <h1 class="text-5xl font-bold text-white">Mines de Sel</h1>
          </div>
          <p class="p-6 text-center text-lg text-white">
            Notre mission est de répande le plus de sel possible à travers le
            monde entier. Leurs raisons sont nombreuses et jamais légitime, mais
            vous avez face à vous les mineurs les plus aigris de la promo. Ils
            ont même essayé de reproduire le liquidglass de apple dans un but
            satirique mais le résultat est un site très lent à charger aux
            visuels médiocres qui est aussi responsive que Basile Marchand quand
            il n'a pas bu de café.
            <br />
            P.S. Oui 3 milliard d'arbres sont brulés à chaque fois que ce fond
            d'écran de 98Mo est chargé
          </p>
        </div>
      </div>

      {/* Navbar */}
      <Navbar />
    </>
  );
}

export default About;
