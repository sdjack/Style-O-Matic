/**
 * Unit testing spec
 * @namespace pagination.spec
 */
import expect from "expect";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

import Pagination from "../src/components/Pagination";

describe("Pagination", () => {
  let node;

  beforeEach(() => {
    node = document.createElement("div");
  });

  afterEach(() => {
    unmountComponentAtNode(node);
  });

  it("displays a success message", () => {
    render(<Pagination>SUCCESS</Pagination>, node, () => {
      expect(node.innerHTML).toContain("SUCCESS");
    });
  });
});
