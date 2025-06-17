/* @refresh reload */
import { render } from "solid-js/web";
import { Router, Route, useNavigate, redirect } from "@solidjs/router";
import "./index.css";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Events from "./Events.jsx";
import Members from "./Members.jsx";
import Contact from "./Contact.jsx";

const root = document.getElementById("root");

render(
  () => (
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
  ),
  root
);
