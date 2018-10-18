/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */
import React from "react";
import Dropdown from "./Dropdown";

const DropdownExample = () => (
  <Dropdown>
    <Dropdown.Toggle>Example Dropdown</Dropdown.Toggle>
    <Dropdown.Content>
      <span>Option 1</span>
      <span>Option 2</span>
      <span>Option 3</span>
      <span>Option 4</span>
      <span>Option 5</span>
      <span>Option 6</span>
    </Dropdown.Content>
  </Dropdown>
);

export default DropdownExample;
