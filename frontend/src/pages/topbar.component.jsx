import logo1 from "../assets/images/logo1.png"
import logo2 from "../assets/images/logo2.png"
// import { NavLink} from "react-router-dom"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { FaUser } from "react-icons/fa";
import { RiInstagramFill, RiWhatsappFill } from "react-icons/ri"
import { FaFacebook, FaTwitter} from "react-icons/fa"


export const Topbar = () => {
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
                            <li className="dropdown-item" to="login">Login </li>
                            <li className="dropdown-item" to="signup">Register </li>
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