/**
 * Unit testing spec
 * @namespace dropdown.spec
 */
import expect from "expect";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

import Dropdown from "../src/components/Dropdown";

describe("Dropdown", () => {
  let node;

  beforeEach(() => {
    node = document.createElement("div");
  });

  afterEach(() => {
    unmountComponentAtNode(node);
  });

  it("displays a success message", () => {
    render(<Dropdown>SUCCESS</Dropdown>, node, () => {
      expect(node.innerHTML).toContain("SUCCESS");
    });
  });
});
