import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DemoWelcome from "./views/DemoWelcome";
import Typeography from "./views/Typeography";
import NotFound from "./views/NotFound";
import Layout from "./views/Layout";
import "../../css/style-o-matic.min.css";

const RootElement = document.getElementById("demo");

render(
  <Router>
    <Switch>
      <Route
        path="/"
        exact
        render={props => (
          <Layout {...props}>
            <DemoWelcome {...props} />
          </Layout>
        )}
      />
      <Route
        path="/typography"
        exact
        render={props => (
          <Layout {...props}>
            <Typeography {...props} />
          </Layout>
        )}
      />
      <Route
        path="*"
        exact
        render={props => (
          <Layout {...props}>
            <NotFound {...props} />
          </Layout>
        )}
      />
    </Switch>
  </Router>,
  RootElement
);
