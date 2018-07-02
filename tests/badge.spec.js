/**
 * Unit testing spec
 * @namespace badge.spec
 */
import expect from "expect";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

import Badge from "../src/components/Badge";

describe("Badge", () => {
  let node;

  beforeEach(() => {
    node = document.createElement("div");
  });

  afterEach(() => {
    unmountComponentAtNode(node);
  });

  it("displays a success message", () => {
    render(<Badge>SUCCESS</Badge>, node, () => {
      expect(node.innerHTML).toContain("SUCCESS");
    });
  });
});
