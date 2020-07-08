import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./UI/Layout";
import Main from "./pages/Main";
import List from "./pages/List";

export const App = () => (
  <Router basename="money_tracker">
    <Switch>
      <Layout>
        <Route exact path="/" component={Main} />
        <Route exact path="/list" component={List} />
      </Layout>
    </Switch>
  </Router>
);
