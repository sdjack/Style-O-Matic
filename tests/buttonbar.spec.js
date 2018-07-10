/**
 * Unit testing spec
 * @namespace buttonbar.spec
 */
import expect from "expect";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

import ButtonBar from "../src/components/ButtonBar";

describe("ButtonBar", () => {
  let node;

  beforeEach(() => {
    node = document.createElement("div");
  });

  afterEach(() => {
    unmountComponentAtNode(node);
  });

  it("displays a success message", () => {
    render(<ButtonBar>SUCCESS</ButtonBar>, node, () => {
      expect(node.innerHTML).toContain("SUCCESS");
    });
  });
});
