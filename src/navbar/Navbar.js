import React, { Component } from 'react';
import { render } from 'react-dom';

import { Navbar, Nav, NavItem} from 'react-bootstrap';
import { Link } from 'react-router';

import './Navbar.css';

export default class OurNavbar extends React.Component {

    render() {
        return (
            <Navbar inverse>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to={`/`}>Futrzak</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1}>
                            <Link to={`/vets`}> Nasi weterynarze </Link>
                        </NavItem>
                        <NavItem eventKey={2}>
                            <Link to={`/offices`}> Gabinety </Link>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}