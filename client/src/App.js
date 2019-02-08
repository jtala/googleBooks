import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header/Header.js";
import Home from "./pages/Home.js";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

const App = () => (
  <Router>
    <div className="container">
      <Header/>
      <Route exact path="/" component={Home} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/saved" component={Saved}/>
      
    </div>
  </Router>
);

export default App;
