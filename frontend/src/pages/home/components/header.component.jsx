import React from "react"
import { NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Col, Container, Row } from "react-bootstrap"
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux"
import category from "../../admin/category"
import city from "../../admin/city"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton from 'react-bootstrap/SplitButton';

const Header = () => {

    const [cats, setCats] = useState();
    const [citys, setCitys] = useState();

    const loadCategories = useCallback(async () => {
        let response = await category.categorySvc.listAllHomeCategories(20, 1);
        setCats(response.result)
    }, [])

    const loadCitys = useCallback(async () => {
        let response = await city.citySvc.listAllHomeCitys(20, 1);
        setCitys(response.result)
    }, [])

    useEffect(() => {
        loadCategories()
        loadCitys()
    }, [])


    const styles = {
        text: {
            marginLeft: '-25px',
            color: 'grey',

        },
    };


    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary navs">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">


                            <NavLink className="hov right  nav-link" to="/">HOME</NavLink>
                            <NavLink className="hov right nav-link" to="/contact">CONTACT</NavLink>
                            <NavLink className="hov right nav-link" to="/about">ABOUT US</NavLink>
                            <NavLink className="hov right nav-link" to="/blogs">BLOGS</NavLink>

                            <NavDropdown className="hov right" title="CITY" id="basic-nav-dropdown hov citys">
                            {
                                        citys && citys.map((city, index) => (
                                            <NavLink key={index} to={`/city/${city.slug}`} className={"dropdown-item hov"}>
                                                {city.name}
                                                <NavDropdown.Divider />
                                            </NavLink>
                                            

                                        ))
                                    }
                            </NavDropdown>

                            <NavDropdown className="hov left right" title="PROPERTY" id="basic-nav-dropdown hov categories">
                            {
                                        cats && cats.map((cat, index) => (
                                            <NavLink key={index} to={`/category/${cat.slug}`} className={"dropdown-item"}>
                                                {cat.name}
                                                <NavDropdown.Divider />
                                            </NavLink>
                                        ))
                                    }
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