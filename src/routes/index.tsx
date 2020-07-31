import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Components
import Home from "../pages/index";
import Projects from "../pages/projects";
import Technologies from "../pages/technologies";
import Certificates from "../pages/Certificates";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/technologies" component={Technologies} />
        <Route exact path="/certificates" component={Certificates} />
      </Switch>
    </Router>
  );
}

export default Routes;
