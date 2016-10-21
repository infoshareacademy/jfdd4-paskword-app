import React from 'react'
import './Menu.css'
import Logo from './logo.png'
import {IndexLinkContainer, LinkContainer} from 'react-router-bootstrap'
import {Nav, Navbar, NavItem} from 'react-bootstrap'
import GoogleLogin from 'react-google-login'

export default (props) =>

    <Navbar inverse className="App-Menu">
        <Navbar.Header>
            <Navbar.Brand>
                <img src={Logo} alt="Logo" className="responsive"/>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
            <Nav>
                <IndexLinkContainer to={`/`}>
                    <NavItem eventKey={0} href="#"><strong>Futrzak</strong></NavItem>
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

            </Nav>

            {/*<Navbar.Form pullRight>*/}
                {/*<GoogleLogin*/}
                    {/*clientId="751663115292-f4n69p03t1hj8mkrt79d107nrirvbbdc.apps.googleusercontent.com"*/}
                    {/*onSuccess={console.log}*/}
                    {/*onFailure={console.log}*/}
                    {/*className="btn btn-default btn-sm"/>*/}
            {/*</Navbar.Form>*/}
        </Navbar.Collapse>
    </Navbar>

