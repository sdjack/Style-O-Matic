/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React from "react";
import { Header, Drawer, ToolBar, Footer, Main } from "../../../src/index";
import Navigation from "./Navigation";

class PageWrapper extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isLoading: false
    };
  }

  handleLoadingState = () => {
    this.setState({ isLoading: !this.state.isLoading });
  };

  render() {
    const { children } = this.props;
    // UI.setTheme("foo");
    const loadingProp = this.state.isLoading ? "cube" : null;
    return [
      <Header key="app-header">
        <Navigation />
      </Header>,
      <Main key="app-content" loader={loadingProp}>
        <Main.Content>
          <Drawer fixed />
          {children}
        </Main.Content>
      </Main>,
      <Footer key="app-footer" onClick={this.handleLoadingState}>
        <Footer.Content>
          <ToolBar>
            <ToolBar.Content contentAlign="left">
              <ToolBar.Title observe="scroll">Toggle Loading</ToolBar.Title>
            </ToolBar.Content>
            <ToolBar.Content contentAlign="right">
              <ToolBar.Button>OP1</ToolBar.Button>
              <ToolBar.Button>OP2</ToolBar.Button>
            </ToolBar.Content>
          </ToolBar>
        </Footer.Content>
      </Footer>
    ];
  }
}

export default PageWrapper;
