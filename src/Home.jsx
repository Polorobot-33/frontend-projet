import Navbar from "./Navbar.jsx";

function createRaindrop() {
  const boite = document.getElementById("boite");
  const raindrop = document.createElement("div");
  raindrop.classList.add("raindrop");

  raindrop.style.left = Math.random() * window.innerWidth + "px";

  const duration = Math.random() * 1 + 0.5;
  raindrop.style.animationDuration = duration + "s";

  boite.appendChild(raindrop);

  setTimeout(() => {
    raindrop.remove();
  }, duration * 1000);
}

function launchRaindrop() {
  const intervalId = setInterval(createRaindrop, 10);
  setTimeout(() => clearInterval(intervalId), 5000);
}

function Home() {
  return (
    <div class="relative h-screen w-full overflow-hidden">
      <style>
        {`
          .raindrop {
            position: absolute;
            width: 2px;
            height: 5px;
            animation: fall linear infinite;
            top: -15px;
            background-color: ivory;
          }
          @keyframes fall {
            from {
              transform: translateY(0);
            }
            to {
              transform: translateY(110vh);
            }
          }
        `}
      </style>
      <div
        id="boite"
        class="pointer-events-none fixed inset-0 z-10 overflow-hidden"
      ></div>
      <img
        src="./minesdesel_blanc.png"
        alt="Mines de Sel Logo"
        class="pointer-events-none mx-auto mb-4 h-100 w-100 object-contain opacity-80 drop-shadow-lg select-none"
      />
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="max-w-lg space-y-6 px-4 text-center">
          <h1 class="text-5xl font-bold text-white">
            Mines de Sel
          </h1>
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
