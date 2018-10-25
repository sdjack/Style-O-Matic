/**
 * @namespace Style-O-Matic UI
 * @todo Write sub-component documentation
 * @author Steven Jackson
 */
import React from "react";
import Accordion from "./Accordion";

const AccordionExample = () => (
  <Accordion>
    <Accordion.Title>Example Title 1</Accordion.Title>
    <Accordion.Content>Example Content 1</Accordion.Content>
    <Accordion.Title>Example Title 2</Accordion.Title>
    <Accordion.Content>Example Content 2</Accordion.Content>
    <Accordion.Title>Example Title 3</Accordion.Title>
    <Accordion.Content>Example Content 3</Accordion.Content>
    <Accordion.Title>Example Title 4</Accordion.Title>
    <Accordion.Content>Example Content 4</Accordion.Content>
  </Accordion>
);

export default AccordionExample;
