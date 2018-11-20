/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React from "react";
import {
  Button,
  Modal,
  Grid,
  Header,
  Section,
  Footer,
  ToolTip
} from "../../../src/index";

class ModalView extends React.Component {
  render() {
    return [
      <Header display="xxl" textAlign="center" key="view-title">
        <Header.Title>Modals</Header.Title>
      </Header>,
      <Grid key="grip-panel1">
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Grid panel>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Header display="xl" textAlign="center">
                    <Header.Title>Basic Modal</Header.Title>
                  </Header>
                  <hr />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Button id="modal1-toggle">
                    <ToolTip text="Basic Modal">DEMO</ToolTip>
                    <Modal toggle="modal1-toggle">
                      <Header>Modal Header</Header>
                      <Section>Modal Content</Section>
                      <Footer>Modal Footer</Footer>
                    </Modal>
                  </Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    ];
  }
}

export default ModalView;
