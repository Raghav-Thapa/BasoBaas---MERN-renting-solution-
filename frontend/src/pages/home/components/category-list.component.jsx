import { NavLink } from "react-router-dom"
import { Col, Card } from "react-bootstrap"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../assets/css/category.css"

const CategoryList = ({category}) => {
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
    return (<>

<Slider {...settings}>

        <Col sm={6} md={4} lg={3} className="mb-3">
            <Card className="cardcover">

                <NavLink to={`/category/${category.slug}`}>
                    <Card.Img variant="top" src={import.meta.env.VITE_IMAGE_URL+"/categorys/"+category.image} />
                    <Card.Body>
                        <Card.Title style={{color:"#947054"}} className="text-center categoryText">
                            {category.name}</Card.Title>
                    </Card.Body>
                </NavLink>
            </Card>
        </Col>
        </Slider>

    </>)
}

export default CategoryList