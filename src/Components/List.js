import React from "react";
import { Row, Col } from "reactstrap";
import { ListGroup, ListGroupItem } from "reactstrap";

const List = (props) => {

  const niceOrNot = (vote) => {
    if (vote === 1) {
      return "success";
    }
  };

  const kitties = props.list.map((cat) => {
    return (
      <ListGroupItem key={cat.image.id} color={niceOrNot(cat.value)}>
        <img
          src={cat.image.url}
          alt={cat.image.id}
          style={{
            paddingRight: "20px",
            display: "inline-block",
            maxWidth: "150px",
          }}
        />
        <p>
          <span className="cat-name">{cat.image.id}</span>
        </p>
      </ListGroupItem>
    );
  });
  return (
    <React.Fragment>
      <Row>
        <Col>
          <ListGroup className="cat-list">{kitties}</ListGroup>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default List;
