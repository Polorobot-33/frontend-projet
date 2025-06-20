/* @refresh reload */
import { render } from "solid-js/web";
import { Router, Route, useNavigate, redirect } from "@solidjs/router";
import "./index.css";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Events from "./Events.jsx";
import Members from "./Members.jsx";
import Contact from "./Contact.jsx";
import backgroundVideo from "./assets/bg-video.mp4";
const root = document.getElementById("root");

render(
  () => (
    <>
      <video
        class="absolute inset-0 w-full h-full object-cover -z-10"
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
        <Route path="/Events" component={Events} />
        <Route path="/Members" component={Members} />
        <Route path="/Contact" component={Contact} />
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
  root
);
