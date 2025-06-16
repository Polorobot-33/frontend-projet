import { A } from "@solidjs/router";

//<A activeClass="text-blue-900" end={_end} href={_href}>{_name}</A>
import { createSignal } from "solid-js";

export default function Navbar() {
  const [active, setActive] = createSignal("Home");

  return (
    <>
     

      <nav class="relative w-full max-w-lg mx-auto rounded-2xl overflow-hidden bg-transparent">
        {/* Glassmorphism*/}
        <div
          class="absolute inset-0 rounded-2xl backdrop-blur-sm [filter:url(#glass-distortion)] saturate-150 brightness-110"
        ></div>
        <div
          class="absolute inset-0 rounded-2xl bg-white/10 dark:bg-black/5"
        ></div>
        <div
          class="absolute inset-0 rounded-2xl [box-shadow:inset_1px_1px_1px_rgba(255,255,255,0.75)] dark:[box-shadow:inset_1px_1px_1px_rgba(255,255,255,0.15)]"
        ></div>

        {/* Nav content */}
        <div class="relative z-10 p-4">
          <ul class="flex justify-center gap-6">
            <li>
              <a
                href="/Home"
                onClick={() => setActive("Home")}
                class={`text-white font-medium text-base px-4 py-2 rounded-lg transition-colors duration-200 ${
                  active() === "Home" ? "bg-white/20" : "hover:bg-white/10"
                }`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/About"
                onClick={() => setActive("About")}
                class={`text-white font-medium text-base px-4 py-2 rounded-lg transition-colors duration-200 ${
                  active() === "About" ? "bg-white/20" : "hover:bg-white/10"
                }`}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/Members"
                onClick={() => setActive("Members")}
                class={`text-white font-medium text-base px-4 py-2 rounded-lg transition-colors duration-200 ${
                  active() === "Members" ? "bg-white/20" : "hover:bg-white/10"
                }`}
              >
                Members
              </a>
            </li>
            <li>
              <a
                href="/Contact"
                onClick={() => setActive("Contact")}
                class={`text-white font-medium text-base px-4 py-2 rounded-lg transition-colors duration-200 ${
                  active() === "Contact" ? "bg-white/20" : "hover:bg-white/10"
                }`}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
