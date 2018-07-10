/**
 * Unit testing spec
 * @namespace drawer.spec
 */
import expect from "expect";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

import Drawer from "../src/components/Drawer";

describe("Drawer", () => {
  let node;

  beforeEach(() => {
    node = document.createElement("div");
  });

  afterEach(() => {
    unmountComponentAtNode(node);
  });

  it("displays a success message", () => {
    render(<Drawer>SUCCESS</Drawer>, node, () => {
      expect(node.innerHTML).toContain("SUCCESS");
    });
  });
});
