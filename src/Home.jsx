import Navbar from "./Navbar.jsx";

function Raindrop() {
  return (
    <>
      <div
        class="animate-fall absolute top-0 h-1 w-0.5 bg-stone-100"
        style={`left : ${Math.random() * window.innerWidth}px`}
      />
    </>
  );
}

function createRaindrop() {
  const root = document.getElementById("container");
  const raindropDiv = Raindrop();
  root.appendChild(raindropDiv);
  setTimeout(() => {
    raindropDiv.remove();
  }, 2000);
}

function launchRaindrop() {
  const droplets = setInterval(createRaindrop, 10);
  setTimeout(() => clearInterval(droplets), 5000);
}

function Home() {
  return (
    <div class="relative h-screen w-screen overflow-hidden" id="container">
      <img
        src="./minesdesel_blanc.png"
        alt="Mines de Sel Logo"
        class="m-auto mb-4 h-100 w-100 opacity-80 drop-shadow-lg"
      />
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="max-w-lg space-y-6 px-4 text-center">
          <h1 class="text-5xl font-bold text-white">Mines de Sel</h1>
          <p class="text-lg text-white">
            « Cogito ergo Seum » <i>Descartes</i>
          </p>
          <button
            class="relative mx-auto rounded-lg bg-white/10 px-6 py-3 font-semibold text-white [box-shadow:inset_1px_1px_1px_rgba(255,255,255,0.75)] filter backdrop-blur-sm transition duration-300 hover:bg-white/40 dark:[box-shadow:inset_1px_1px_1px_rgba(255,255,255,0.15)]"
            onClick={launchRaindrop}
          >
            Saler la page
          </button>
        </div>
      </div>

      {/* Navbar */}
      <Navbar />
    </div>
  );
}

export default Home;
