/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */
import React from "react";
import ToolBar from "./ToolBar";

const ToolBarExample = () => (
  <ToolBar raised>
    <ToolBar.Content contentAlign="left">
      <ToolBar.Title>TITLE</ToolBar.Title>
      <ToolBar.Button>Button</ToolBar.Button>
      <ToolBar.Button>Button</ToolBar.Button>
    </ToolBar.Content>
    <ToolBar.Content contentAlign="right">
      <ToolBar.Text>Raised</ToolBar.Text>
      <ToolBar.Text>Example</ToolBar.Text>
    </ToolBar.Content>
  </ToolBar>
);

export default ToolBarExample;
