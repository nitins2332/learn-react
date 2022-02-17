import "./App.css";
import React from "react";
import About from "./About";
import Shop from "./Shop";
import Nav from "./Nav";
import Item from "./ItemDetail";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />

        <Switch>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/shop" exact>
            <Shop />
          </Route>

          <Route path="/shop/:id">
            <Item />
          </Route>

          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home page</h1>
  </div>
);

export default App;
