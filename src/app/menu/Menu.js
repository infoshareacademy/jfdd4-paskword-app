import React from 'react'
import './Menu.css'
import Logo from './logo.png'
import {IndexLinkContainer, LinkContainer} from 'react-router-bootstrap'
import {Nav, Navbar, NavItem} from 'react-bootstrap'
import LoginForm from '../LoginForm'

export default (props) =>

    <Navbar inverse className="App-Menu">
        <Navbar.Header>
            <Navbar.Brand>
                <img src={Logo} alt="Logo" className="responsive" id="paw-logo"/>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
            <Nav>
                <IndexLinkContainer to={`/`}>
                    <NavItem eventKey={0} href="#">FUTRZAK</NavItem>
                </IndexLinkContainer>

                <IndexLinkContainer to={`/vets`}>
                    <NavItem eventKey={1} href="#">Weterynarze</NavItem>
                </IndexLinkContainer>

                <LinkContainer to={`/offices`}>
                    <NavItem eventKey={2} href="#">Gabinety</NavItem>
                </LinkContainer>

                <LinkContainer to={`/vetSearch`}>
                    <NavItem eventKey={3} href="#">Znajdź najbliższy gabinet</NavItem>
                </LinkContainer>

                <LoginForm/>
            </Nav>

        </Navbar.Collapse>
    </Navbar>

