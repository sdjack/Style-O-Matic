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
        <Header.Content contentAlign="right">
          <div className="ui-header-item">
            <ul className="ui-header-list">
              <li>Guest</li>
              <li>email@email.com</li>
            </ul>
            <span className="fa fa-user" aria-hidden="true" />
          </div>
        </Header.Content>
      </Header>,
      <Main key="layout-main">
        <Main.Drawer minimizable>
          <Navigation />
        </Main.Drawer>
        <Main.Content>{children}</Main.Content>
      </Main>,
      <Footer fixed key="layout-footer">
        <Footer.Content contentAlign="left">
          <div className="ui-footer-item">Style-O-Matic UI DEMO</div>
        </Footer.Content>
      </Footer>
    ];
  }
}

export default PageWrapper;
