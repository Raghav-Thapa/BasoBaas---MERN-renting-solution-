import { Container, Card, Breadcrumb, Row, Col } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import {FaArrowLeft} from "react-icons/fa";
import sellerroom from ".";
import { toast } from "react-toastify";
import SellerRoomForm from "./sellerroom-form.component";

const SellerRoomCreateForm = () => {
    const navigate = useNavigate();

    const handleSubmit = async(values) => {
        try{
            // submit
            const response = await sellerroom.sellerroomSvc.createRoom(values)
            toast.success(response.msg)
            navigate('/seller/room')
        } catch(error) {
            // TODO: Debug for error 
            toast.error("Cannot create room. Retry again after reloading the page...")
        }
    }
    return (<>
        <Container fluid className="px-4">
            <Row>
                <Col sm={12} md={6}>
                    <h1 className="mt-4">Room Create Page</h1>
                </Col> 
                <Col md={6} sm={12} className="d-none d-md-block">
                    <NavLink className={"btn btn-sm btn-success mt-5 float-end"} to ="/seller/room">
                        <FaArrowLeft/>    Go To List
                    </NavLink>
                </Col>
            </Row>
            <Breadcrumb className="mb-4">
                <Breadcrumb.Item>
                    <NavLink to="/seller">Dashboard</NavLink>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <NavLink to="/seller/room">Room Listing</NavLink>
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Room Create</Breadcrumb.Item>
            </Breadcrumb>

            <Card className="mb-4">
                <Card.Body>
                    <SellerRoomForm 
                        submitAction={handleSubmit}
                    />
                </Card.Body>
            </Card>
        </Container>
    </>)
}

export default SellerRoomCreateForm;