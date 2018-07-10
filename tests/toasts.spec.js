/**
 * Unit testing spec
 * @namespace toasts.spec
 */
import expect from "expect";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

import Toasts from "../src/components/Toasts";

describe("Toasts", () => {
  let node;

  beforeEach(() => {
    node = document.createElement("div");
  });

  afterEach(() => {
    unmountComponentAtNode(node);
  });

  it("displays a success message", () => {
    render(<Toasts>SUCCESS</Toasts>, node, () => {
      expect(node.innerHTML).toContain("SUCCESS");
    });
  });
});
