/**
 * Unit testing spec
 * @namespace datepicker.spec
 */
import expect from "expect";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

import DatePicker from "../src/components/DatePicker";

describe("DatePicker", () => {
  let node;

  beforeEach(() => {
    node = document.createElement("div");
  });

  afterEach(() => {
    unmountComponentAtNode(node);
  });

  it("displays a success message", () => {
    render(<DatePicker>SUCCESS</DatePicker>, node, () => {
      expect(node.innerHTML).toContain("SUCCESS");
    });
  });
});
