/**
 * Unit testing spec
 * @namespace footer.spec
 */
import expect from "expect";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

import Footer from "../src/components/Footer";

describe("Footer", () => {
  let node;

  beforeEach(() => {
    node = document.createElement("div");
  });

  afterEach(() => {
    unmountComponentAtNode(node);
  });

  it("displays a success message", () => {
    render(<Footer>SUCCESS</Footer>, node, () => {
      expect(node.innerHTML).toContain("SUCCESS");
    });
  });
});
