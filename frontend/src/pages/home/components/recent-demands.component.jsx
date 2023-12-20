import { Container, Row, Col, Button, Card } from "react-bootstrap"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import room from "../../admin/room"
import { useCallback, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import RoomList from ".././components/room-list.component";
import "../../../assets/css/room.css"


export const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, backgroundColor: "#bf9959", borderRadius: "50%" }}
            onClick={onClick}
        >
            Next
        </div>
    );
};

export const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, backgroundColor: "#bf9959", borderRadius: "50%" }}
            onClick={onClick}
        >
            Prev
        </div>
    );
};

const RecentDemands = () => {

    const [cats, setCats] = useState();

    const loadCategories = useCallback(async () => {
        let response = await category.categorySvc.listAllHomeCategories(20, 1);
        setCats(response.result)
    }, [])

    

    const [roomList, setRoomList] = useState();

    const loadRooms = useCallback(async() => {
        let response = await room.roomSvc.listHomeRooms(24, 1)
        setRoomList(response.result)
      }, [])


    const loadCitys = useCallback(async() => {
        let response = await city.citySvc.listAllHomeCitys(20.1)
        setCityList(response.result)
      }, [])


    useEffect(() => {
        loadRooms()
    }, [])

    const catSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,


    };

    const roomSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,

    };



    return(<>

        <>
        <Container fluid className="my-5 bg-light">
                <Row className="my-3 bg-light">
                    <div style={{ padding: "40px" }} >
                        <Slider {...roomSettings}>

                            {
                               roomList && roomList.map((room, index) => (
                                <RoomList 
                                  key={index}
                                  room={room}
                                />
                                ))
                            }
                        </Slider>
                    </div>
                </Row>
            </Container>

        </>
    </>)
}

export default RecentDemands