/**
 * Unit testing spec
 * @namespace loading.spec
 */
import expect from "expect";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

import Loading from "../src/components/Loading";

describe("Loading", () => {
  let node;

  beforeEach(() => {
    node = document.createElement("div");
  });

  afterEach(() => {
    unmountComponentAtNode(node);
  });

  it("displays a success message", () => {
    render(<Loading>SUCCESS</Loading>, node, () => {
      expect(node.innerHTML).toContain("SUCCESS");
    });
  });
});
