import * as React from "react";
import CoffeeOrder from "./CoffeeOrder";
import CoffeeCustomisation from "./CoffeeCustomisation";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./Header";
import Login from "./Login";

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Header />
        <Route path="/login" component={Login} />
        <Route path="/customise" component={CoffeeCustomisation} />
        <Route path="/" exact component={CoffeeOrder} />
      </React.Fragment>
    </Router>
  );
};

export default App;
