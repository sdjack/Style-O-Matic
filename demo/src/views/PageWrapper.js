/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React from "react";
import { Header, ToolBar, Footer, Main } from "../../../src/index";
import Navigation from "./Navigation";

class PageWrapper extends React.Component {
  render() {
    const { children } = this.props;
    // UI.setTheme("foo");
    return [
      <Header key="layout-header" fixed>
        <Header.Drawer icon="fa fa-user" color="transparent" minimizable>
          <ToolBar>
            <ToolBar.Content contentAlign="left">
              <ToolBar.Title observe="scroll">Demo</ToolBar.Title>
            </ToolBar.Content>
            <ToolBar.Content contentAlign="right">
              <ToolBar.Button>OP1</ToolBar.Button>
              <ToolBar.Button>OP2</ToolBar.Button>
            </ToolBar.Content>
          </ToolBar>
          <ToolBar>
            <ToolBar.Content contentAlign="left">
              <ToolBar.Title observe="scroll">Hidden Toolbar 1</ToolBar.Title>
              <ToolBar.Button>OP3</ToolBar.Button>
              <ToolBar.Button>OP4</ToolBar.Button>
            </ToolBar.Content>
          </ToolBar>
          <ToolBar>
            <ToolBar.Content contentAlign="left">
              <ToolBar.Title observe="scroll">Hidden Toolbar 2</ToolBar.Title>
              <ToolBar.Button>OP5</ToolBar.Button>
              <ToolBar.Button>OP6</ToolBar.Button>
            </ToolBar.Content>
          </ToolBar>
          <ToolBar>
            <ToolBar.Content contentAlign="left">
              <ToolBar.Title observe="scroll">Hidden Toolbar 3</ToolBar.Title>
              <ToolBar.Button>OP7</ToolBar.Button>
              <ToolBar.Button>OP8</ToolBar.Button>
            </ToolBar.Content>
          </ToolBar>
        </Header.Drawer>
      </Header>,
      <Main key="layout-main" color="!grey">
        <Main.Drawer
          persistentId="main-drawer"
          icon="fa fa-angle-double-right"
          minimizable
        >
          <Navigation />
        </Main.Drawer>
        <Main.Content>{children}</Main.Content>
      </Main>,
      <Footer key="layout-footer" fixed>
        <Footer.Drawer icon="fa fa-bars" minimizable>
          <ToolBar>
            <ToolBar.Content contentAlign="right">
              <ToolBar.Title observe="scroll">Demo</ToolBar.Title>
            </ToolBar.Content>
          </ToolBar>
          <ToolBar>
            <ToolBar.Content contentAlign="left">
              <ToolBar.Title observe="scroll">Hidden Toolbar 1</ToolBar.Title>
              <ToolBar.Button>OP3</ToolBar.Button>
              <ToolBar.Button>OP4</ToolBar.Button>
            </ToolBar.Content>
          </ToolBar>
          <ToolBar>
            <ToolBar.Content contentAlign="left">
              <ToolBar.Title observe="scroll">Hidden Toolbar 2</ToolBar.Title>
              <ToolBar.Button>OP5</ToolBar.Button>
              <ToolBar.Button>OP6</ToolBar.Button>
            </ToolBar.Content>
          </ToolBar>
          <ToolBar>
            <ToolBar.Content contentAlign="left">
              <ToolBar.Title observe="scroll">Hidden Toolbar 3</ToolBar.Title>
              <ToolBar.Button>OP7</ToolBar.Button>
              <ToolBar.Button>OP8</ToolBar.Button>
            </ToolBar.Content>
          </ToolBar>
        </Footer.Drawer>
      </Footer>
    ];
  }
}

export default PageWrapper;
