import { useCallback, useEffect, useState } from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
import room from "../admin/room";
import { Col, Container, Row, Carousel, Badge, Form, Button  } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
// import { setCart, setCartAPI } from "../../reducer/room.reducer";

const RoomDetail = () => {
    const navigate = useNavigate();
    const params = useParams();
    let [loading, setLoading] = useState(true);
    let [detail, setDetail] = useState();

    let [qty, setQty] = useState(0);

    const loadRoomDetail = useCallback(async() => {
        try {
            let response = await room.roomSvc.getRoomBySlug(params.slug);
            setDetail(response.result)
        } catch(exception) {
            toast.warn("Room detail cannot be fetched")
        } finally {
            setLoading(false)
        }
    }, [params])
    useEffect(() => {
        loadRoomDetail()
    },[params])

    let loggedInuser = useSelector((root) => {
        return root.User.loggedInUser
    }) 

    const dispatch = useDispatch();

    // const addToCart = (e) => {
    //     e.preventDefault();
    //     if(!loggedInuser){
    //         localStorage.setItem("redirect", '/room/'+detail.slug)
    //         toast.warn("Login first to create Cart")
    //         navigate("/login")
    //     }
    //     console.log(loggedInuser)

    //     let currentItem = {
    //         roomId: detail._id,
    //         qty: Number(qty)
    //     }

    //     dispatch(setCart(currentItem))

    //     dispatch(setCartAPI(currentItem))

    //     toast.success("Your room has been added in the cart.")

    // }
    return (<>
        <Container className="my-5 bg-light">
            {
                loading ? <>Loading...</> : <>
                    <Row>
                        <Col sm={12} md={4}>
                            <Carousel data-bs-theme="dark">
                                {
                                    detail && detail.images.map((item, index) => (
                                        <Carousel.Item key={index}>
                                        
                                            <img src={import.meta.env.VITE_IMAGE_URL+"/rooms/"+item} className="img img-fluid" />
                                        </Carousel.Item>
                                    ))
                                }
                            </Carousel>
                        </Col>
                        <Col sm={12} md={8}>
                            <h4>{detail.name}</h4>
                            <p>
                                <NavLink to="/city/apple" className={"me-3"}>
                                    <Badge bg="info">{detail.city.name}</Badge>
                                </NavLink>

                                {
                                    detail.categories && detail.categories.map((cat) => (
                                        
                                        <NavLink key={cat._id} to={`/category/${cat.slug}`} className={"me-3"}>
                                            <Badge bg="warning">{cat.name}</Badge>
                                        </NavLink>
                                        
                                    ))
                                }
                            </p>
                            <p>
                                <span>NPR. {detail.price}</span>
                                {
                                    detail.discount && detail.discount > 0 ?  <del className="mx-3 text-danger">Npr. {detail.price}</del> : ""
                                }
                            </p>
                            ....
                            <Row>
                                <Col sm="6">
                                    <Form.Control
                                        type="number"
                                        name="qty"
                                        onChange={(e) => {
                                            setQty(e.target.value)
                                        }}
                                        required 
                                        size="sm"
                                        placeholder="Enter your quantity"
                                    ></Form.Control>
                                </Col>
                                <Col sm={6}>
                                    <Button variant="warning" className="text-white" size="sm">
                                        <FaPlus /> &nbsp;
                                        Add to Cart
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} dangerouslySetInnerHTML={{__html: detail.detail}}></Col>
                    </Row>
                </>
            }
        </Container>
    </>)
}

export default RoomDetail