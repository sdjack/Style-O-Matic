/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */
import React from "react";
import Card from "./Card";

const CardExample = () => (
  <Card align="center" styled round>
    <Card.Header>
      <Card.Icon icon="star" />
      Card Header
      <Card.Icon icon="star" />
    </Card.Header>
    <Card.Content>Card Content</Card.Content>
    <Card.Footer>
      <Card.Icon icon="star" />
      Card Footer
      <Card.Icon icon="star" />
    </Card.Footer>
  </Card>
);

export default CardExample;
