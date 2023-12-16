import { NavLink } from "react-router-dom";

import { Col, Card, Badge } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../assets/css/room.css"


const RoomList = ({ room }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        // nextArrow: <NextArrow />,
        // prevArrow: <PrevArrow />,

    };
    
// console.log(room.city)
// console.log(room.categories);

  return (
    <>
    <Slider {...settings}>
      <Col sm={6} md={4} lg={3} className="mb-3">
        <Card className="cardcoverr">
          <Card.Img src={import.meta.env.VITE_IMAGE_URL+"/rooms/"+room.images[0]}></Card.Img>
          <Card.Body>
            <NavLink
              to={`/room/`+room.slug}
              style={{ textDecoration: "none", cursor: "pointer" }}
            >
              <h4 className="roomText">
                {room.name}
              </h4>
            </NavLink>
            <p>
              <span>NPR. {room.price}</span>
              {
                room.discount && <del className="mx-3 text-danger">Npr. {room.price}</del>
              }
            </p>
            <p>      
                
              <NavLink  to={`/city/${room.city.slug}`}  className={"me-3"}>
                <Badge className="bhov" bg="info">{room.city.name}</Badge>
              </NavLink>

              {
                room.categories && room.categories.map((cat) => (
                    
                    <NavLink key={cat._id} to={`/category/${cat.slug}`} className={"me-3"}>
                        <Badge className="bhov" bg="warning">{cat.name}</Badge>
                    </NavLink>
                    
                ))
              }
            </p>
            <NavLink
              to={`/room/`+room.slug}
              className={"btn btn-sm btn-warning text-white bhov"}
            >
              View More
            </NavLink>
          </Card.Body>
        </Card>
      </Col>
      </Slider>
    </>
  );
};

export default RoomList;