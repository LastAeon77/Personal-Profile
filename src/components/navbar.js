import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Component } from "react"
import { LinkContainer } from 'react-router-bootstrap';

class Bar extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/home">Kamontat Swasdikulavath</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer to="/home">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/projects">
                            <Nav.Link>Project</Nav.Link>
                        </LinkContainer>
                        <NavDropdown title="Other" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/Test">Test</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Resume</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Bar