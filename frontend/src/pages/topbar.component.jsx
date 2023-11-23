import React, { useState } from "react";
import logo1 from "../assets/images/logo1.png"
import logo2 from "../assets/images/logo2.png"
import { FaUser } from "react-icons/fa";
import { RiInstagramFill, RiWhatsappFill } from "react-icons/ri"
import { FaFacebook, FaTwitter } from "react-icons/fa"
// import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import CloseButton from 'react-bootstrap/CloseButton';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';


export const Topbar = () => {
    const [visible, setVisible] = useState(false);
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
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><FaUser /></a>
                            <ul className="dropdown-menu dropdown-menu-end admin-menu" aria-labelledby="navbarDropdown">



                                <li to="login">
                                    <Button className="btnstyle" label="Login" onClick={() => setVisible(true)} />
                                    <Dialog className="loginoverlay" draggable ={false} visible={visible} onHide={() => setVisible(false)}>
                                        <p className="m-5">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </p>
                                    </Dialog>
                                </li>

                                <li to="signup">
                                <Button className="btnstyle" style={{marginLeft:'-33px'}} label=" Register"/> </li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#!">Logout</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

        </div>

    </>)
}