/**
 * Unit testing spec
 * @namespace table.spec
 */
import expect from "expect";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

import Table from "../src/components/Table";

describe("Table", () => {
  let node;

  beforeEach(() => {
    node = document.createElement("div");
  });

  afterEach(() => {
    unmountComponentAtNode(node);
  });

  it("displays a success message", () => {
    render(<Table>SUCCESS</Table>, node, () => {
      expect(node.innerHTML).toContain("SUCCESS");
    });
  });
});
