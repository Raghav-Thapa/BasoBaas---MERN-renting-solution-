import React from "react"
// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Col, Container, Row } from "react-bootstrap"

const Header = () => {

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary navs">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                                

                            <Nav.Link className="hov right active" href="#home">HOME</Nav.Link>
                            <Nav.Link className="hov right" href="#link">CONTACT</Nav.Link>
                            <Nav.Link className="hov right" href="#link">ABOUT US</Nav.Link>
                            <Nav.Link className="hov right" href="#link">BLOGS</Nav.Link>

                            <NavDropdown className="hov right" title="CITY" id="basic-nav-dropdown hov">
                                <NavDropdown.Item className="hov" href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item className="hov" href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item className="hov" href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className="hov" href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown className="hov left right" title="CATEGORY" id="basic-nav-dropdown hov">
                                <NavDropdown.Item className="hov" href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item className="hov" href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item className="hov" href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className="hov" href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>

                            <Nav.Link className="hov right" href="#link">RECENT DEMANDS</Nav.Link>
                            <Nav.Link className="hov right" href="#link">NEWS</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header