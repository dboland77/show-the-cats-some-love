import { Fragment } from "react";
import {
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import Heading from "./Heading";

const Home = (props) => {
  return (
    <Fragment>
      <Heading heading="Nice Kitty or Not Nice Kitty?" />
      <Row>
        <Col>
          <p style={{ marginBottom: "24px" }}>
            Cat ipsum dolor sit amet, sleep but scratch my tummy actually i hate
            you now fight me. Sleep everywhere, but not in my bed flop over
            scratch my tummy actually i hate you now fight me curl into a furry
            donut. Chase after silly colored fish toys around the house scratch
            my tummy actually i hate you now fight me and human clearly uses
            close to one life a night no one naps that long so i revive by
            standing on chestawaken!{" "}
          </p>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={6}>
          <Card>
            <CardImg
              top
              width="100%"
              src="https://placekitten.com/318/180"
              alt="Cat image"
            />
            <CardBody>
              <CardTitle>Nice or Not?</CardTitle>
              <CardSubtitle>Vote on pictures of cats</CardSubtitle>
              <CardText>
                {" "}
                The power to judge cats is now yours.
                Upload cats, vote on cats,
                feline the power.
              </CardText>
              <Link to="/rate">
                <Button color="primary">Vote Now</Button>
              </Link>
            </CardBody>
          </Card>
        </Col>
        <Col sm={12} md={6}>
          <Card>
            <CardImg
              top
              width="100%"
              src="https://placekitten.com/318/181"
              alt="Cat image"
            />
            <CardBody>
              <CardTitle>Index of Results</CardTitle>
              <CardSubtitle>See a list of kitties.</CardSubtitle>
              <CardText>
                How did these cats do? Find out now. Easily browse the kitty
                cats and see their scores.
              </CardText>
              <Link to="/list">
                <Button color="success">View List</Button>
              </Link>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};
export default Home;
