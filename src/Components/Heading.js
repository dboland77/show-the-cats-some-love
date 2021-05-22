import React from "react";
import { Row, Col } from "reactstrap";

const Heading = () => {
  return (
    <Row style={{ marginBottom: "44px", marginTop: "24px" }}>
      <Col>
        <h1>{this.props.heading}</h1>
      </Col>
    </Row>
  );
};

export default Heading;
