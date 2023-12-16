import { NavLink } from "react-router-dom";

import { Col, Card, Badge, Row } from "react-bootstrap";
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
    <Slider >
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

            <NavLink  to={`/city/${room.city.slug}`}  className={"citybadge bhov"}>
                <i class="fa-solid fa-location-dot"></i>  {room.city.name}
              </NavLink>
                <p style={{marginTop:'10px'}}>      
              {
                room.categories && room.categories.map((cat) => (
                    
                    <NavLink key={cat._id} to={`/category/${cat.slug}`} className={"me-3 btn btn-sm categorybadge bhov"}>
                        {cat.name}
                    </NavLink>
                    
                ))
              }
            </p>
            
              <p style={{fontWeight:'bold'}}>
              <span>NPR. {room.price}</span>
              {
                room.discount && <del className="mx-3 text-danger">Npr. {room.price}</del>
              }
            </p>

          
            <NavLink
              to={`/room/`+room.slug}
              className={"btn btn-sm viewmore bhov"}
            >
              View More  <i class="fa-solid fa-beat fa-angle-right"></i>
            </NavLink>
          </Card.Body>
        </Card>
      </Col>
      </Slider>
    </>
  );
};

export default RoomList;