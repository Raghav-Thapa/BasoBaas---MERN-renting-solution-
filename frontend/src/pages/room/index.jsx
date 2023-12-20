import { useCallback, useEffect, useState } from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
import room from "../admin/room";
import { Col, Container, Row, Carousel, Badge, Form, Button  } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import "../../assets/css/room.css"
import { setBooking, setBookingAPI } from "../../reducer/room.reducer";

const RoomDetail = () => {
    const navigate = useNavigate();
    const params = useParams();
    let [loading, setLoading] = useState(true);
    let [detail, setDetail] = useState();

    // let [qty, setQty] = useState(0);

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

    const addToBooking = (e) => {
        e.preventDefault();
        if(!loggedInuser){
            localStorage.setItem("redirect", '/room/'+detail.slug)
            toast.warn("Login first to start booking")
            navigate("/")
        }
        console.log(loggedInuser)

        let currentItem = {
            roomId: detail._id,
        }

        dispatch(setBooking(currentItem))

        dispatch(setBookingAPI(currentItem))

        toast.success("You have requested for inquiry.")

    }
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
                            <h4 className="roomText">{detail.name}</h4>
                            <p>
                                <NavLink to={`/city/${detail.city.slug}`} className={"me-3 citybadge bhov"}>
                                <i class="fa-solid fa-location-dot"></i> {detail.city.name}
                                </NavLink><br/>

                                {
                                    detail.categories && detail.categories.map((cat) => (
                                        
                                        <NavLink key={cat._id} to={`/category/${cat.slug}`} className={"me-3 mt-3 btn btn-sm categorybadge bhov"}>
                                           {cat.name}
                                        </NavLink>
                                        
                                    ))
                                }
                            </p>
                            <p>
                                <span style={{fontWeight:'bold'}}>NPR. {detail.price}</span>
                                {
                                    detail.discount && detail.discount > 0 ?  <del className="mx-3 text-danger">Npr. {detail.price}</del> : ""
                                }
                            </p>
                            <Row>
                                <Col sm={6}>
                                    <Button variant="success" className="text-white" size="sm" onClick={addToBooking}>
                                        
                                        Book Now &nbsp; <i class="fa-solid fa-angles-right fa-beat-fade"></i>
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="mt-4" sm={12} dangerouslySetInnerHTML={{__html: detail.detail}}></Col>
                    </Row>
                </>
            }
        </Container>
    </>)
}

export default RoomDetail