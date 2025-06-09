import { A } from "@solidjs/router";

function Navbar() {
  return (
    <div>
      <A activeClass="text-blue-900" end={true} href="/">Home</A>
      <A activeClass="text-blue-900" href="/about">About</A>
      <A activeClass="text-blue-900" href="/members">Members</A>
      <A activeClass="text-blue-900" href="/contact">Contact</A>
    </div>
  );
}

export default Navbar;
