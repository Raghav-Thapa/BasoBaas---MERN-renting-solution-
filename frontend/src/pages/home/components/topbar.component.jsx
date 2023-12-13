import React, { useState } from "react";
import logo2 from "../../../assets/images/logo2.png"
import { FaUser } from "react-icons/fa";
import { RiInstagramFill, RiWhatsappFill } from "react-icons/ri"
import { FaFacebook, FaTwitter } from "react-icons/fa"
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { NavLink, useNavigate } from "react-router-dom";
import { Container, Form, Row, Col, InputGroup } from "react-bootstrap"
import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi"
import { FaCircleUser } from "react-icons/fa6"
import { FaRegUser } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";
// import signupimage from "../../../assets/images/user.png"
import {useFormik} from "formik"
import * as Yup from "yup"
import AuthService from "../../auth/auth.service";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setLoggedInUser } from "../../../reducer/user.reducer";

const Topbar = () => {
    const authSvc = new AuthService()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const logout = (e) => {
        e.preventDefault()
        localStorage.clear()
        toast.success("Thank you for using")
        navigate("/")
    }

    const loginSchema = Yup.object({
        email: Yup.string().email().required(),
        password: Yup.string().required(),
    })
    const formik = useFormik({
        initialValues: {
            email: null,
            password: null
        },
        validationSchema: loginSchema,
        onSubmit: async (values) => {
            try{
                let response = await authSvc.login(values) 
                if (response.status) {
                    //webstorage
                    let formattedData = {
                        id: response.result.data._id,
                        name: response.result.data.name,
                        email: response.result.data.email,
                        role: response.result.data.role,
                    }

                    //store
                    //reducer event dispatch

                    
                    dispatch(setLoggedInUser(formattedData))


                    localStorage.setItem("accessToken", response.result.token.accessToken)
                    localStorage.setItem("refreshToken", response.result.token.refreshToken)
                    localStorage.setItem("user", JSON.stringify(formattedData))

                    toast.success("Welcome to" + formattedData.role + " Portal !")
                    navigate("/" + formattedData.role)

                } else {
                    toast.warning("Credentials does not match")
                }

                //webstorage,cookie,localstorage
                // console.log(response)
            } catch (axiosErrorResponse) {
                // toast.error(axiosErrorResponse.data.msg)
                console.log(axiosErrorResponse)
                toast.error("Credentials does not match")
            }
        }
    })
    // console.log(formik.values)
    const [visible, setVisible] = useState(false);

    const dashboard = () => {
        let user = JSON.parse(localStorage.getItem("user"))
        let role = user.role
        navigate("/" + role)
    }

    const isLoggedIn = () => {
        // Check if the user is logged in based on the presence of user data in localStorage
        return localStorage.getItem("user") !== null;
    };

    
   
    return (<>
        <div className="topbar">
            <div className="container">
                <div className="contactsLogo">
                    <FaFacebook className="marginright" />
                    <FaTwitter className="marginright" />
                    <RiInstagramFill className="marginright" />
                    <RiWhatsappFill className="marginright" />
                </div>

                <div className="logo">
                    <img src={logo2} alt="logo" className="image" />
                </div>

                <div className="login">

                    <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                        <li className="nav-item dropdown ">
                            <NavLink className="nav-link dropdown-toggle" id="navbarDropdown" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><FaUser /></NavLink>
                            <ul className="dropdown-menu dropdown-menu-end admin-menu" aria-labelledby="navbarDropdown">
                                {!isLoggedIn() && (
                                    <li to="login">
                                        <Button className="btnstyle" label="Login" onClick={() => setVisible(true)} />
                                        <Dialog className="loginoverlay" draggable={false} visible={visible} onHide={() => setVisible(false)}>
                                            <Container>
                                                <Row className="backk">
                                                    <Col lg={6}>
                                                        <h3 className="login logintitle"> <FaCircleUser className="mb-2 me-2" />USER LOGIN</h3>
                                                        <hr className="mb-4" />

                                                        <Form onSubmit={formik.handleSubmit} className="form-format">

                                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                                <InputGroup className="mb-3">
                                                                    <InputGroup.Text id="basic-addon1"><HiOutlineMail /></InputGroup.Text>
                                                                    <Form.Control
                                                                        type="email"
                                                                        required
                                                                        placeholder="Enter your email"
                                                                        name="email"
                                                                        onChange={formik.handleChange}
                                                                    />
                                                                </InputGroup>
                                                                {/* <span className="text-danger">{formik.errors?.email}</span> */}
                                                            </Form.Group>

                                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                                <InputGroup className="mb-3">
                                                                    <InputGroup.Text id="basic-addon1">< HiOutlineLockClosed /></InputGroup.Text>
                                                                    <Form.Control
                                                                        type="password"
                                                                        placeholder="Enter your password"
                                                                        name="password"
                                                                        onChange={formik.handleChange}
                                                                    />
                                                                </InputGroup>
                                                                {/* <span className="text-danger">{formik.errors?.password}</span> */}
                                                            </Form.Group>


                                                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                                                <Form.Check type="checkbox" label="Remember Me" />
                                                            </Form.Group>


                                                            <Button variant="primary" type="submit" className="me-4 ms-2 loginbutton mt-3">
                                                                <FaRegUser className="me-3 " />Login
                                                            </Button>


                                                            <NavLink className="signup" style={{ textDecoration: "none", color: "blue" }} to="forget-password">Forgot Password ? </NavLink>
                                                        </Form>
                                                    </Col>

                                                    <Col lg={1}>
                                                        <div className="vline">
                                                        </div>
                                                        <div>
                                                            <b style={{ fontSize: "16px" }}>OR</b>
                                                        </div>
                                                        <div className="vline"></div>
                                                    </Col>

                                                    <Col lg={5} className="signupimage">
                                                        <div className="formatsignup">

                                                            <NavLink to="/register"><Button variant="primary" type="submit" className="me-4 ms-2 signupbutton">
                                                                <FaUserPlus className="me-3 " />Signup
                                                            </Button>
                                                            </NavLink>



                                                        </div>
                                                    </Col>

                                                </Row>

                                            </Container>
                                        </Dialog>
                                    </li>
                                )}

                                {!isLoggedIn() && (
                                     <li>
                                     <NavLink to="register"><Button className="btnstyle" style={{ marginLeft: '-33px' }} label=" Register" /> </NavLink>
                                      </li>
                                ) }

                                {isLoggedIn() && (
                                        <Button className="btnstyle" onClick={dashboard} style={{ marginLeft: '-20px' }} label="Dashboard" /> 
                                    )}
                               
                                <li><hr className="dropdown-divider" /></li>
                                            
                                <li>
                                    {isLoggedIn() && (
                                        <NavLink onClick={logout} to="/"><Button className="btnstyle" style={{ marginLeft: '-33px' }} label="Logout" /> </NavLink>
                                    )}
                                
                                    </li>

                                {/* <li>
                                    {isLoggedIn() && (
                                        <NavLink className="dropdown-item" to="/">
                                            View Profile
                                        </NavLink>
                                    )}
                                </li> */}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

        </div>

    </>)
}

export default Topbar