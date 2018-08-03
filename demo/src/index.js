import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DemoWelcome from "./views/DemoWelcome";
import Typeography from "./views/Typeography";
import FormsView from "./views/FormsView";
import NotFound from "./views/NotFound";
import LayoutView from "./views/LayoutView";
import GridView from "./views/GridView";
import CardView from "./views/CardView";
import ButtonsView from "./views/ButtonsView";
import TableView from "./views/TableView";
import AccordionView from "./views/AccordionView";
import ModalView from "./views/ModalView";
import TabsView from "./views/TabsView";
import ToastsView from "./views/ToastsView";
import ToolbarView from "./views/ToolbarView";
import PageWrapper from "./views/PageWrapper";
import "../../css/style-o-matic.min.css";

const RootElement = document.getElementById("demo");

render(
  <Router>
    <Switch>
      <Route
        path="/"
        exact
        render={props => (
          <PageWrapper {...props}>
            <DemoWelcome {...props} />
          </PageWrapper>
        )}
      />
      <Route
        path="/typography"
        exact
        render={props => (
          <PageWrapper {...props}>
            <Typeography {...props} />
          </PageWrapper>
        )}
      />
      <Route
        path="/layout"
        exact
        render={props => (
          <PageWrapper {...props}>
            <LayoutView {...props} />
          </PageWrapper>
        )}
      />
      <Route
        path="/form"
        exact
        render={props => (
          <PageWrapper {...props}>
            <FormsView {...props} />
          </PageWrapper>
        )}
      />
      <Route
        path="/grid"
        exact
        render={props => (
          <PageWrapper {...props}>
            <GridView {...props} />
          </PageWrapper>
        )}
      />
      <Route
        path="/cards"
        exact
        render={props => (
          <PageWrapper {...props}>
            <CardView {...props} />
          </PageWrapper>
        )}
      />
      <Route
        path="/table"
        exact
        render={props => (
          <PageWrapper {...props}>
            <TableView {...props} />
          </PageWrapper>
        )}
      />
      <Route
        path="/buttons"
        exact
        render={props => (
          <PageWrapper {...props}>
            <ButtonsView {...props} />
          </PageWrapper>
        )}
      />
      <Route
        path="/accordion"
        exact
        render={props => (
          <PageWrapper {...props}>
            <AccordionView {...props} />
          </PageWrapper>
        )}
      />
      <Route
        path="/modal"
        exact
        render={props => (
          <PageWrapper {...props}>
            <ModalView {...props} />
          </PageWrapper>
        )}
      />
      <Route
        path="/toolbar"
        exact
        render={props => (
          <PageWrapper {...props}>
            <ToolbarView {...props} />
          </PageWrapper>
        )}
      />
      <Route
        path="/tabs"
        exact
        render={props => (
          <PageWrapper {...props}>
            <TabsView {...props} />
          </PageWrapper>
        )}
      />
      <Route
        path="/toasts"
        exact
        render={props => (
          <PageWrapper {...props}>
            <ToastsView {...props} />
          </PageWrapper>
        )}
      />
      <Route
        path="*"
        exact
        render={props => (
          <PageWrapper {...props}>
            <NotFound {...props} />
          </PageWrapper>
        )}
      />
    </Switch>
  </Router>,
  RootElement
);
