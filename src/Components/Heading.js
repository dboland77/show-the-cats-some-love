import React from "react";
import { Row, Col } from "reactstrap";

const Heading = (props) => {
  return (
    <Row style={{ marginBottom: "44px", marginTop: "24px" }}>
      <Col>
        <h1>{props.heading}</h1>
      </Col>
    </Row>
  );
};

export default Heading;
