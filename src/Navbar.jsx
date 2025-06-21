import { A } from "@solidjs/router";

const activeStyle =
  "text-white font-medium text-base px-4 py-2 rounded-lg transition-colors duration-200 bg-white/20";
const inactiveStyle =
  "text-white font-medium text-base px-4 py-2 rounded-lg transition-colors duration-200 hover:bg-white/10";

export default function Navbar() {
  return (
    <>
      <div class="absolute bottom-8 left-0 z-20 w-full">
        <nav class="relative mx-auto w-full max-w-lg overflow-hidden rounded-2xl bg-transparent">
          {/* Glassmorphism*/}
          <div class="absolute inset-0 rounded-2xl brightness-110 saturate-150 [filter:url(#glass-distortion)] backdrop-blur-sm"></div>

          <div class="absolute inset-0 rounded-2xl [box-shadow:inset_1px_1px_1px_rgba(255,255,255,0.75)] dark:[box-shadow:inset_1px_1px_1px_rgba(255,255,255,0.15)]"></div>

          <div class="relative z-10 p-4">
            <ul class="flex justify-center gap-2">
              <li>
                <A
                  href="/"
                  end={true}
                  activeClass={activeStyle}
                  inactiveClass={inactiveStyle}
                >
                  Accueil
                </A>
              </li>
              <li>
                <A
                  href="/About"
                  activeClass={activeStyle}
                  inactiveClass={inactiveStyle}
                >
                  Notre mission
                </A>
              </li>
              <li>
                <A
                  href="/Members"
                  activeClass={activeStyle}
                  inactiveClass={inactiveStyle}
                >
                  Membres
                </A>
              </li>
              <li>
                <A
                  href="/Contact"
                  activeClass="text-white font-medium text-base px-4 py-2 rounded-lg transition-colors duration-200 bg-white/20"
                  inactiveClass={inactiveStyle}
                >
                  Nous contacter
                </A>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
