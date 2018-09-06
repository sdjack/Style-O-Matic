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
      drawerOpen: false
    };
  }

  handleDrawer = () => {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  };

  render() {
    const { children } = this.props;
    // UI.setTheme("foo");
    return [
      <Header key="app-header" onClick={this.handleDrawer} fixed>
        <ToolBar>
          <ToolBar.Content contentAlign="left">
            <ToolBar.Title observe="scroll">Demo</ToolBar.Title>
          </ToolBar.Content>
          <ToolBar.Content contentAlign="right">
            <ToolBar.Button>OP1</ToolBar.Button>
            <ToolBar.Button>OP2</ToolBar.Button>
          </ToolBar.Content>
        </ToolBar>
      </Header>,
      <Main key="app-content" color="!grey" header footer>
        <Drawer
          persistentId="main-drawer"
          icon="fa fa-angle-double-right"
          active={this.state.drawerOpen}
          minimizable
        >
          <Navigation orientation="vertical" />
        </Drawer>
        <Main.Content>{children}</Main.Content>
      </Main>,
      <Footer key="app-footer" fixed>
        <ToolBar>
          <ToolBar.Content contentAlign="left">
            <ToolBar.Title observe="scroll">Demo</ToolBar.Title>
          </ToolBar.Content>
          <ToolBar.Content contentAlign="right">
            <ToolBar.Button>OP1</ToolBar.Button>
            <ToolBar.Button>OP2</ToolBar.Button>
          </ToolBar.Content>
        </ToolBar>
      </Footer>
    ];
  }
}

export default PageWrapper;
