import { A } from "@solidjs/router";

export default function Navbar() {
  return (
    <>
      <nav class="relative w-full max-w-lg mx-auto rounded-2xl overflow-hidden bg-transparent">
        {/* Glassmorphism*/}
        <div class="absolute inset-0 rounded-2xl backdrop-blur-sm [filter:url(#glass-distortion)] saturate-150 brightness-110  bg-white/10 dark:bg-gray-600/10 "></div>
        
        <div class="absolute inset-0 rounded-2xl  [box-shadow:inset_1px_1px_1px_rgba(255,255,255,0.75)] dark:[box-shadow:inset_1px_1px_1px_rgba(255,255,255,0.15)]"></div>

        
        <div class="relative z-10 p-4">
          <ul class="flex justify-center gap-6">
            <li>
              <A
                href="/"
                end={true}
                activeClass=" text-white font-medium text-base px-4 py-2 rounded-lg transition-colors duration-200 bg-white/20"
                inactiveClass="text-white font-medium text-base px-4 py-2 rounded-lg transition-colors duration-200 hover:bg-white/10"
              >
                Home
              </A>
            </li>
            <li>
              <A
                href="/About"
                activeClass=" text-white font-medium text-base px-4 py-2 rounded-lg transition-colors duration-200 bg-white/20"
                inactiveClass="text-white font-medium text-base px-4 py-2 rounded-lg transition-colors duration-200 hover:bg-white/10"
              >
                About
              </A>
            </li>
            <li>
              <A
                href="/Members"
                activeClass=" text-white font-medium text-base px-4 py-2 rounded-lg transition-colors duration-200 bg-white/20"
                inactiveClass="text-white font-medium text-base px-4 py-2 rounded-lg transition-colors duration-200 hover:bg-white/10"
              >
                Members
              </A>
            </li>
            <li>
              <A
                href="/Contact"
                activeClass=" text-white font-medium text-base px-4 py-2 rounded-lg transition-colors duration-200 bg-white/20"
                inactiveClass="text-white font-medium text-base px-4 py-2 rounded-lg transition-colors duration-200 hover:bg-white/10"
              >
                Contact
              </A>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
