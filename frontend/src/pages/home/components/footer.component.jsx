import { Navbar, Container, Col, NavDropdown, Nav, ListGroup, Row } from "react-bootstrap";
import logo from "../../../assets/images/logo1.png"
import { NavLink } from "react-router-dom";
import "../../../assets/css/footer.css"

const Footer = ()  => {
    return(<>
     <Container fluid className="p-5 bg-light backimage">
                <Row>
                    <Col sm={12} md={4}>
                        <img src={logo} style={{width: "50%"}} className="logoimage"></img>
                        <p className="textt">Your go-to platform for hassle-free and efficient rental property searches, revolutionizing the way you find your perfect space.
                        </p>
                    </Col>
                    <Col sm={12} md={4}>
                        <h4 className="texttt">Quick Links</h4>
                        <hr/>
                        <ListGroup >
                            <ListGroup.Item style={{backgroundColor:'rgba(0, 0, 0, 0.265)',color:"white",opacity:"0.67"}}>
                                <NavLink className="nav-link" to="/about">
                                    About Us
                                </NavLink>
                            </ListGroup.Item>
                            <ListGroup.Item style={{backgroundColor:'rgba(0, 0, 0, 0.265)',color:"white",opacity:"0.67"}}>
                                <NavLink className="nav-link" to="/privacy-policy">
                                    Privacy Policy
                                </NavLink>
                            </ListGroup.Item>
                            <ListGroup.Item style={{backgroundColor:'rgba(0, 0, 0, 0.265)',color:"white",opacity:"0.67"}}>
                                <NavLink className="nav-link" to="/terms-and-conditions">
                                    Terms and Conditions
                                </NavLink>
                            </ListGroup.Item>
                            <ListGroup.Item style={{backgroundColor:'rgba(0, 0, 0, 0.265)',color:"white",opacity:"0.67"}}>
                                <NavLink className="nav-link" to="/feedback-link">
                                    Feedback Links
                                </NavLink>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col sm={12} md={4}>
                        <h4 className="texttt">Find Us On</h4>

                        <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.713119781052!2d85.32620194886643!3d27.695260255687835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a4ead6b4d1%3A0xa7a2e08cc13ac414!2z4KSf4KSC4KSVIOCkquCljeCksOCkuOCkvuCkpiDgpJjgpYHgpK7gpY3gpKTgpYAg4KS44KSh4KSVLCBLYXRobWFuZHUgNDQ2MDA!5e0!3m2!1sen!2snp!4v1694423864462!5m2!1sen!2snp"
                         width="350" 
                         height="250" 
                         style={{border: "0px"}} 
                         allowfullscreen="" 
                         loading="lazy" 
                         referrerpolicy="no-referrer-when-downgrade">

                         </iframe>

                    </Col>
                </Row>
            </Container>

    </>)
}

export default Footer