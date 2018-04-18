/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React from "react";
import { Header, Footer, Main } from "../../../src/index";
import Navigation from "./Navigation";

class PageWrapper extends React.Component {
  render() {
    const { children } = this.props;

    return [
      <Header fixed key="layout-header">
        <Header.Content contentAlign="left">
          <Header.Title observe="scroll">Style-O-Matic</Header.Title>
          <Header.Button>OP1</Header.Button>
          <Header.Button>OP2</Header.Button>
        </Header.Content>
        <Header.Content contentAlign="right">
          <Header.Item>
            <ul className="ui-header-list">
              <li>Guest</li>
              <li>email@email.com</li>
            </ul>
            <span className="fa fa-user" aria-hidden="true" />
          </Header.Item>
        </Header.Content>
      </Header>,
      <Main key="layout-main">
        <Main.Drawer minimizable>
          <Navigation />
        </Main.Drawer>
        <Main.Content>
          {children}
          <div style={{ height: "1000px" }} key="view-bolster" />
        </Main.Content>
      </Main>,
      <Footer fixed key="layout-footer">
        <Footer.Content contentAlign="left">
          <Footer.Text>Style-O-Matic UI DEMO</Footer.Text>
        </Footer.Content>
        <Footer.Content contentAlign="right">
          <Footer.Button>Footer Button</Footer.Button>
          <Footer.Button>Footer Button</Footer.Button>
        </Footer.Content>
      </Footer>
    ];
  }
}

export default PageWrapper;
