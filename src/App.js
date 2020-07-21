import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AOS from "aos";

import "assets/scss/style.scss";
import "aos/dist/aos.css";
import LandingPage from "./pages/LandingPage";

function App() {
  AOS.init({
    once: true,
  });
  return (
    <div className="App">
      <Router>
        <Route path="/" component={LandingPage}></Route>
      </Router>
    </div>
  );
}

export default App;
