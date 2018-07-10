/**
 * Unit testing spec
 * @namespace buttonmenu.spec
 */
import expect from "expect";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

import ButtonMenu from "../src/components/ButtonMenu";

describe("ButtonMenu", () => {
  let node;

  beforeEach(() => {
    node = document.createElement("div");
  });

  afterEach(() => {
    unmountComponentAtNode(node);
  });

  it("displays a success message", () => {
    render(<ButtonMenu>SUCCESS</ButtonMenu>, node, () => {
      expect(node.innerHTML).toContain("SUCCESS");
    });
  });
});
