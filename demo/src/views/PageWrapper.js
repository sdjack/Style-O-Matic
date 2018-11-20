/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React from "react";
import {
  TopBar,
  Drawer,
  ToolBar,
  BottomBar,
  Main,
  Content,
  Button
} from "../../../src/index";
import Navigation from "./Navigation";

class PageWrapper extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isLoading: false,
      drawerClosed: true
    };
  }

  toggleDrawerState = () => {
    this.setState({ drawerClosed: !this.state.drawerClosed });
  };

  handleLoadingState = () => {
    this.setState({ isLoading: !this.state.isLoading });
  };

  render() {
    const { children } = this.props;
    // UI.setTheme("foo");
    const { isLoading, drawerClosed } = this.state;
    const loadingProp = isLoading ? "cube" : null;
    return [
      <TopBar key="app-top-nav" className="ui--styled">
        <Navigation />
      </TopBar>,
      <Main key="app-content" loader={loadingProp}>
        <Drawer className="ui--styled" vertical collapsed={drawerClosed}>
          Some Generic Drawer Content.
        </Drawer>
        <Content>{children}</Content>
      </Main>,
      <BottomBar key="app-footer" className="ui--styled">
        <ToolBar>
          <Content contentAlign="left">Bottom Bar</Content>
          <Content contentAlign="right">
            <Button onClick={this.toggleDrawerState}>Toggle Drawer</Button>
            <Button onClick={this.handleLoadingState}>Toggle Loading</Button>
          </Content>
        </ToolBar>
      </BottomBar>
    ];
  }

  // render() {
  //   const { children } = this.props;
  //   // UI.setTheme("foo");
  //   const { isLoading, drawerOpen } = this.state;
  //   const loadingProp = isLoading ? "cube" : null;
  //   return [
  //     <TopBar key="app-header">
  //       <Navigation />
  //     </TopBar>,
  //     <Main key="app-content" loader={loadingProp}>
  //       <Drawer vertical collapsed={drawerOpen}>
  //         Some Generic Drawer Content.
  //       </Drawer>
  //       {children}
  //     </Main>,
  //     <BottomBar key="app-footer">
  //       <ToolBar>
  //         <Content contentAlign="left">
  //           <Header observe="scroll">Toggle Loading</Header>
  //         </Content>
  //         <Content contentAlign="right">
  //           <Button onClick={this.toggleDrawerState}>Toggle Drawer</Button>
  //           <Button onClick={this.handleLoadingState}>Toggle Loading</Button>
  //         </Content>
  //       </ToolBar>
  //     </BottomBar>
  //   ];
  // }
}

export default PageWrapper;
