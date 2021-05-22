import React from 'react';
import { Row, Col } from 'reactstrap';
import Heading from './Heading';
import Carousel from './Carousel';

const Rate = (props) => {
        return (
            <React.Fragment>
                <Heading heading='Rate the moggies' />
                <Row>
                    <Col sm={12} >
                        <Carousel 
                        list={props.list} 
                        tally={props.tally} 
                        updateVoteCount={props.updateVoteCount} />
                    </Col>
                </Row>
            </React.Fragment>
        );
}

export default Rate;
