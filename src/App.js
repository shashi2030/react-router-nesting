import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import Dashboard from "./Component/Dashboard";
import AboutUs from "./Component/AboutUs";
function App() {
  return (

    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/about">
            <AboutUs />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
