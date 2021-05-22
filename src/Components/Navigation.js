import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {
    Col,
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    Row } from 'reactstrap';

const Navigation = (props) =>  {
    const [isOpen, setOpen] = useState(false);
    
    const toggle = () =>  {
        setOpen(!isOpen)
      }

        return (
            <Row>
                <Col>
                    <Navbar color="light" light expand="md">
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink tag={Link} to="/">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to="/rate">Rate</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to="/list">List</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </Col>
            </Row>
        );
    }

export default Navigation;