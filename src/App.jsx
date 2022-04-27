import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import Content from "./Content";
import AboutUs from "./AboutUs";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { Redirect, Route, Switch } from "react-router";

const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/home" component={Home} />
3:35 PM 3/11/2021
        <Route exact path="/content" component={Content} />
        <Route exact path="/contact" component={AboutUs} />
        <Redirect to="/home" />
      </Switch>
    </>
  );
};
export default App;
