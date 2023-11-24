import React from "react"
import { NavLink } from "react-router-dom";
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
                                

                            <NavLink className="hov right active nav-link" to="/">HOME</NavLink>
                            <NavLink className="hov right nav-link" to="/contact">CONTACT</NavLink>
                            <NavLink className="hov right nav-link" to="/about">ABOUT US</NavLink>
                            <NavLink className="hov right nav-link" to="/blogs">BLOGS</NavLink>

                            <NavDropdown className="hov right" title="CITY" id="basic-nav-dropdown hov">
                                <NavDropdown.Item className="hov" to="#action/3.1">Kathmandu</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className="hov" to="#action/3.2">
                                    Bhaktapur
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className="hov" to="#action/3.3">Lalitpur</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown className="hov left right" title="CATEGORY" id="basic-nav-dropdown hov">
                                <NavDropdown.Item className="hov" to="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item className="hov" to="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item className="hov" to="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className="hov" to="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>

                            <NavLink className="hov right nav-link" to="/recentdemands">RECENT DEMANDS</NavLink>
                            <NavLink className="hov right nav-link" to="/news">NEWS</NavLink>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header