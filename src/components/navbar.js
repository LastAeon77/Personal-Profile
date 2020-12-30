import { Navbar, Nav } from 'react-bootstrap';
import { Component } from "react"
import { LinkContainer } from 'react-router-bootstrap';

class Bar extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <LinkContainer to="/home">
                    <Navbar.Brand>Kamontat Swasdikulavath</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer to="/home">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/projects">
                            <Nav.Link>Project</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/resume">
                            <Nav.Link>Resume</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/transcript">
                            <Nav.Link>Transcript</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Bar