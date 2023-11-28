import { Container, Form, Row, Col, Button, InputGroup } from "react-bootstrap"
import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi"
import { LiaSignInAltSolid } from "react-icons/lia"
import { SiGnuprivacyguard } from "react-icons/si"
import Header from "../home/components/header.component"
import "../../assets/css/register.css"
import { FaKey } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import userimg from "../../assets/images/userimage.png"
import { NavLink } from "react-router-dom"




const RegisterPage = () => {

    return (<>

        <Header />
        <div className="backcolor">

        <Container>
            <Row className="mt-3 shadoww">
                <Col className="leftside" lg={6}>
                    <div className="title">
                        <h3 className="login logintitle mt-3"> <SiGnuprivacyguard className="mb-2 me-2" />SIGN UP</h3>
                        <hr />

                        <Form className="form-format">

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1">< FaUser /></InputGroup.Text>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Full Name"
                                        name="text"
                                    />
                                </InputGroup>
                                <span className="text-danger"></span>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1"><IoMdMail /></InputGroup.Text>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        name="email"

                                    />
                                    {/* <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text> */}
                                    {/* <span className="text-danger">
                                    {formik.errors?.email}
                                </span> */}
                                </InputGroup>
                                <span className="text-danger"></span>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1">< FaLock /></InputGroup.Text>
                                    <Form.Control
                                        type="password"
                                        placeholder="Enter Password"
                                        name="password"

                                    />
                                </InputGroup>
                                <span className="text-danger"></span>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1">< FaKey /></InputGroup.Text>
                                    <Form.Control
                                        type="password"
                                        placeholder="Repeat Your Password"
                                        name="password"

                                    />
                                </InputGroup>
                                <span className="text-danger"></span>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Select
                                    name="role"
                                    size="sm"
                                    
                                >
                                    <option>--Select Your Role--</option>
                                    <option value={"seller"}>Owner</option>
                                    <option value={"customer"}>Customer</option>
                                </Form.Select>
                                <span className="text-danger"></span>
                            </Form.Group>

                            <Form.Group controlId="formFileSm" className="mb-3">
                                <Form.Label>Select Profile Picture</Form.Label>
                                <Form.Control
                                    type="file"
                                    size="sm"
                                    required
                                    accept="image/*"
                                    name="image"
                                    // onChange={(e) => {
                                    //     let file = e.target.files[0];
                                    //     let ext = (file.name.split(".")).pop();
                                    //     if (['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'svg'].includes(ext.toLowerCase())) {
                                    //         formik.setValues({
                                    //             ...formik.values,
                                    //             image: file
                                    //         })
                                    //     } else {
                                    //         formik.setErrors({
                                    //             ...formik.errors,
                                    //             image: "File format not supported"
                                    //         })
                                    //     }
                                    // }}
                                />
                                <span className="text-danger"></span>
                            </Form.Group>


                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="I agree to the Terms and Conditions" />
                            </Form.Group>
                            <Button variant="primary" type="submit" className="me-5 ms-2 loginbutton mt-1">
                                <FaUserPlus className="me-3 " />Sign Up
                            </Button>
                        </Form>
                    </div>
                </Col>

                <Col className="rightside" lg={6}>
                    <img className="userimg" src={userimg} alt="" />
                </Col>
            </Row>
        </Container>

        </div>


    </>
    )
}

export default RegisterPage