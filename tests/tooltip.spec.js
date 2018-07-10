/**
 * Unit testing spec
 * @namespace tooltip.spec
 */
import expect from "expect";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

import ToolTip from "../src/components/ToolTip";

describe("ToolTip", () => {
  let node;

  beforeEach(() => {
    node = document.createElement("div");
  });

  afterEach(() => {
    unmountComponentAtNode(node);
  });

  it("displays a success message", () => {
    render(<ToolTip>SUCCESS</ToolTip>, node, () => {
      expect(node.innerHTML).toContain("SUCCESS");
    });
  });
});
