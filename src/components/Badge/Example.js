/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */
import React from "react";
import Badge from "./Badge";

const BadgeExample = () => [
  <Badge color="black">
    <Badge.Icon icon="star" />
  </Badge>,
  <Badge color="red">
    <Badge.Icon icon="spider" />
  </Badge>,
  <Badge color="orange">
    <Badge.Icon icon="bat" />
  </Badge>,
  <Badge color="yellow">
    <Badge.Icon icon="ghost" />
  </Badge>,
  <Badge color="green">
    <Badge.Icon icon="skull" />
  </Badge>,
  <Badge color="blue">
    <Badge.Icon icon="doot" />
  </Badge>,
  <Badge color="indigo">
    <Badge.Icon icon="robot" />
  </Badge>,
  <Badge color="violet">
    <Badge.Icon icon="sheep" />
  </Badge>
];

export default BadgeExample;
