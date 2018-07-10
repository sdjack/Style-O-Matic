/**
 * Unit testing spec
 * @namespace tabs.spec
 */
import expect from "expect";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

import Tabs from "../src/components/Tabs";

describe("Tabs", () => {
  let node;

  beforeEach(() => {
    node = document.createElement("div");
  });

  afterEach(() => {
    unmountComponentAtNode(node);
  });

  it("displays a success message", () => {
    render(<Tabs>SUCCESS</Tabs>, node, () => {
      expect(node.innerHTML).toContain("SUCCESS");
    });
  });
});
