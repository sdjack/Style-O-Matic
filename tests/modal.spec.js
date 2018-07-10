/**
 * Unit testing spec
 * @namespace modal.spec
 */
import expect from "expect";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

import Modal from "../src/components/Modal";

describe("Modal", () => {
  let node;

  beforeEach(() => {
    node = document.createElement("div");
  });

  afterEach(() => {
    unmountComponentAtNode(node);
  });

  it("displays a success message", () => {
    render(<Modal>SUCCESS</Modal>, node, () => {
      expect(node.innerHTML).toContain("SUCCESS");
    });
  });
});
