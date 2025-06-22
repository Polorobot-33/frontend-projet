import Navbar from "./Navbar.jsx";
import logo from "./assets/minesdesel_blanc.png";
import { render } from "solid-js/web";

/* Balise HTML représentant une goutte de pluie */
function Raindrop() {
  return (
    <div
      class="animate-fall absolute top-0 h-1 w-0.5 bg-stone-100"
      style={`left : ${Math.random() * window.innerWidth}px`}
    />
  );
}

/* Crée une goutte de pluie sur la page, puis la supprime */
function createRaindrop() {
  const container = document.getElementById("container");
  if (container != null) {
    // We need an extra container because dispose() revomes all the contents inside a container.
    const dropletContainer = document.createElement("div");
    container.appendChild(dropletContainer);
    const dispose = render(() => <Raindrop />, dropletContainer);
    setTimeout(() => {
      dispose();
      container.removeChild(dropletContainer);
    }, 2000);
  }
}

/* Lance la pluie de sel */
function launchRaindrop() {
  const droplets = setInterval(createRaindrop, 10);
  setTimeout(() => clearInterval(droplets), 5000);
}

function Home() {
  return (
    <div class="relative h-screen w-screen overflow-hidden" id="container">
      <div class="flex flex-col items-center">
        {/* Logo de l'association */}
        <img
          src={logo}
          alt="Mines de Sel Logo"
          class="m-10 w-100 opacity-80 drop-shadow-lg"
        />
        <div class="flex items-center justify-center">
          <div class="max-w-lg space-y-6 px-4 text-center">
            {/* Nom de l'association */}
            <h1 class="text-5xl font-bold text-white">Mines de Sel</h1>
            <p class="text-lg text-white">
              « Cogito ergo Seum »
              <br />
              <i>Descartes</i>
            </p>
            {/* Bouton permettant de lancer la pluie de sel (cliquer plusieurs fois pour une pluie plus intense) */}
            <button
              class="relative mx-auto rounded-lg bg-white/10 px-6 py-3 font-semibold text-white [box-shadow:inset_1px_1px_1px_rgba(255,255,255,0.75)] filter backdrop-blur-sm transition duration-300 hover:bg-white/40 dark:[box-shadow:inset_1px_1px_1px_rgba(255,255,255,0.15)]"
              onClick={launchRaindrop}
            >
              Saler la page
            </button>
          </div>
        </div>
      </div>

      {/* Menu de navigation entre les pages */}
      <Navbar />
    </div>
  );
}

export default Home;
