/**
 * Unit testing spec
 * @namespace breadcrumbs.spec
 */
import expect from "expect";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

import Breadcrumbs from "../src/components/Breadcrumbs";

describe("Breadcrumbs", () => {
  let node;

  beforeEach(() => {
    node = document.createElement("div");
  });

  afterEach(() => {
    unmountComponentAtNode(node);
  });

  it("displays a success message", () => {
    render(<Breadcrumbs>SUCCESS</Breadcrumbs>, node, () => {
      expect(node.innerHTML).toContain("SUCCESS");
    });
  });
});
