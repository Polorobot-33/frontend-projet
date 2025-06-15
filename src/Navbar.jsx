import { A } from "@solidjs/router";

//<A activeClass="text-blue-900" end={_end} href={_href}>{_name}</A>

function Navbar() {
  return (
    <div class="flex justify-around bg-white overflow-x-scroll sticky top-0 shadow-md">
      <A class="text-center p-2 w-full" inactiveClass="bg-white hover:bg-gray-200" activeClass="bg-blue-200" end={true} href="/">Home</A>
      <A class="text-center p-2 w-full" inactiveClass="bg-white hover:bg-gray-200" activeClass="bg-blue-200" href="/about">About</A>
      <A class="text-center p-2 w-full" inactiveClass="bg-white hover:bg-gray-200" activeClass="bg-blue-200" href="/events">Events</A>
      <A class="text-center p-2 w-full" inactiveClass="bg-white hover:bg-gray-200" activeClass="bg-blue-200" href="/members">Members</A>
      <A class="text-center p-2 w-full" inactiveClass="bg-white hover:bg-gray-200" activeClass="bg-blue-200" href="/contact">Contact</A>
    </div>
  );
}

export default Navbar;
