import Navbar from "./Navbar.jsx";
import backgroundVideo from "./assets/bg-video.mp4"

import { onMount } from "solid-js";

function createRaindrop() {
  const raindrop = document.createElement("div");
  raindrop.classList.add("raindrop");

  raindrop.style.left = Math.random() * window.innerWidth + "px";

  const duration = Math.random() * 1 + 0.5;
  raindrop.style.animationDuration = duration + "s";

  document.body.appendChild(raindrop);

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
    
    <div class="relative w-full h-screen overflow-hidden">
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
      <video
        class="absolute inset-0 w-full h-full object-cover -z-10"
        src={backgroundVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
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
           « Le sucre ne sert à rien quand c'est le sel qui manque.»
          </p>
          <button
            class="relative filter backdrop-blur-sm bg-white/10 [box-shadow:inset_1px_1px_1px_rgba(255,255,255,0.75)] dark:[box-shadow:inset_1px_1px_1px_rgba(255,255,255,0.15)] hover:bg-white/40 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 mx-auto"
            onClick={launchRaindrop}
          >
            Saler la page
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
