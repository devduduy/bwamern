import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "assets/scss/style.scss";
import { LandingPage, DetailsPage, Checkout } from "./pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/properties/:id" component={DetailsPage} />
        <Route exact path="/checkout/:id" component={Checkout} />
      </Router>
    </div>
  );
}

export default App;
