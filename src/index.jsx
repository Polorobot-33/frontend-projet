/* @refresh reload */
import { render } from "solid-js/web";
import { Router, Route, useNavigate, redirect } from "@solidjs/router";
import "./index.css";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Members from "./Members.jsx";
import Contact from "./Contact.jsx";
import backgroundVideo from "./assets/bg-video.mp4";
const root = document.getElementById("root");

render(
  () => (
    <>
      <video
        class="absolute inset-0 -z-10 h-full w-full object-cover"
        src={backgroundVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      <Router>
        <Route path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Members" component={Members} />
        <Route path="/Contact" component={Contact} />
        {/* Redirige tous les autres liens vers la page principale */}
        <Route
          path="/*"
          component={() => {
            const navigate = useNavigate();
            navigate("/", { replace: true });
            return <></>;
          }}
        />
      </Router>
    </>
  ),
  root,
);
