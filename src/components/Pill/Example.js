/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */
import React from "react";
import Pill from "./Pill";

const PillExample = () => [
  <Pill id="pill1" onAction={() => {}}>
    Action
  </Pill>,
  <Pill id="pill2" onRemove={() => {}}>
    Closable
  </Pill>,
  <Pill id="pill3" onAction={() => {}} onRemove={() => {}}>
    Both
  </Pill>,
  <Pill id="pill4" onAction={() => {}} onRemove={() => {}} disabled>
    Disabled
  </Pill>
];

export default PillExample;
