/**
 * Unit testing spec
 * @namespace main.spec
 */
import expect from "expect";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

import Main from "../src/components/Main";

describe("Main", () => {
  let node;

  beforeEach(() => {
    node = document.createElement("div");
  });

  afterEach(() => {
    unmountComponentAtNode(node);
  });

  it("displays a success message", () => {
    render(<Main>SUCCESS</Main>, node, () => {
      expect(node.innerHTML).toContain("SUCCESS");
    });
  });
});
