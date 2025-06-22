import Navbar from "./Navbar.jsx";
import logo from "./assets/minesdesel_blanc.png";

function About() {
  return (
    <>
      <div class="flex flex-col items-center">
        <img
          src={logo}
          alt="Mines de Sel Logo"
          class="m-8 w-80 opacity-80 drop-shadow-lg"
        />
        <div class="flex flex-col items-center">
          <div class="max-w-lg space-y-6 px-4 text-center">
            <h1 class="text-5xl font-bold text-white">Mines de Sel</h1>
          </div>
          <p class="relative mx-auto mt-4 w-[90vw] max-w-[400px] overflow-hidden rounded-2xl p-4 text-center text-sm text-white [box-shadow:inset_1px_1px_1px_rgba(255,255,255,0.75)] brightness-110 saturate-150 backdrop-blur-sm dark:[box-shadow:inset_1px_1px_1px_rgba(255,255,255,0.15)]">
            Notre mission est de répandre le plus de sel possible à travers le
            monde entier. Leurs raisons sont nombreuses et jamais légitime, mais
            vous avez face à vous les mineurs les plus aigris de la promo. Ils
            ont même essayé de reproduire le liquidglass de apple dans un but
            satirique mais le résultat est un site très lent à charger aux
            visuels médiocres qui est aussi responsive que Basile Marchand quand
            il n'a pas bu de café.
            <br />
            <br />
            P.S. Oui 3 milliard d'arbres sont brulés à chaque fois que ce fond
            d'écran de 98Mo est chargé
            <br />
            Crédit: pour la vidéo (reflections from Uyuni sur youtube) Pour le
            liquidglass (u/triple6dev sur reddit)
          </p>
        </div>
      </div>

      {/* Navbar */}
      <Navbar />
    </>
  );
}

export default About;
