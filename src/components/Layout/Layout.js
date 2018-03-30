/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import Header from "../Header";
import Loading from "../Loading";
import Nav from "../Nav";
import Drawer from "../Drawer";
import Toasts from "../Toasts";

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    path: PropTypes.string
  };

  static defaultProps = {
    children: null,
    path: ""
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      navActive: false
    };
  }

  onToggleHandler = e => {
    e.preventDefault();
    this.setState({ navActive: !this.state.navActive });
  };

  muteOnToggle = e => {
    e.preventDefault();
  };

  render() {
    const { children } = this.props;
    const path = window.currentRoute;
    const { loading, navActive } = this.state;

    return (
      <div className="ui-page">
        <Header>
          <Header.Content contentAlign="left">
            <Button className="ui-header-button" onClick={this.onToggleHandler}>
              <span className="fa fa-bars" aria-hidden="true" />
            </Button>
          </Header.Content>
          <Header.Content contentAlign="right">
            <div className="ui-header-item">
              <ul className="ui-header-list">
                <li>Guest</li>
                <li>email@email.com</li>
              </ul>
              <span className="fa fa-user" aria-hidden="true" />
            </div>
          </Header.Content>
        </Header>
        <div className="ui-main">
          <Drawer
            active={navActive}
            onToggle={this.muteOnToggle}
            uidata={{ minimizable: true }}
          >
            <Drawer.Content>
              <Nav path={path} active={navActive}>
                <Nav.Item to="/" icon="fa fa-home" text="Home" />
                <Nav.Item
                  to="/typography"
                  icon="fa fa-font"
                  text="Typography"
                />
                <Nav.Item
                  to="/layout"
                  icon="fa fa-object-group"
                  text="Layout"
                />
                <Nav.Item to="/grid" icon="fa fa-th" text="Grid" />
                <Nav.Item
                  to="/navigation"
                  icon="fa fa-sitemap"
                  text="Navigation"
                />
                <Nav.Item to="/buttons" icon="fa fa-cube" text="Buttons" />
                <Nav.Item to="/table" icon="fa fa-table" text="Tables" />
                <Nav.Item to="/form" icon="fa fa-wpforms" text="Forms" />
                <Nav.Item
                  to="/accordion"
                  icon="fa fa-th-list"
                  text="Accordion"
                />
                <Nav.Item
                  to="/breadcrumbs"
                  icon="fa fa-angle-double-right"
                  text="Breadcrumbs"
                />
                <Nav.Item
                  to="/modal"
                  icon="fa fa-window-restore"
                  text="Modal"
                />
                <Nav.Folder to="/misc" icon="fa fa-folder" text="Misc">
                  <Nav.Item to="/toolbar" icon="fa fa-cogs" text="ToolBar" />
                  <Nav.Item to="/tabs" icon="fa fa-bookmark" text="Tabs" />
                  <Nav.Item to="/toasts" icon="fa fa-comment" text="Toasts" />
                </Nav.Folder>
              </Nav>
            </Drawer.Content>
          </Drawer>
          <div className="ui-scroll-wrapper">
            <div className="ui-content">{children}</div>
            <Loading
              key="contentLoadingElement"
              closed={!loading}
              overlay="true"
              message="Please Wait..."
            />
          </div>
          <Toasts />
        </div>
      </div>
    );
  }
}

export default Layout;
