import { useParams } from "react-router-dom"
import { Container, Row, Image, Col,Card } from "react-bootstrap";
// import bgimage from "../../assets/images/header-bg.jpeg"
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import city from "../admin/city/index";
import RoomList from "../home/components/room-list.component";
import { NavLink } from "react-router-dom";

const CityDetail = () => {
    let params = useParams();
    const [citysDetail, setCityDetail] = useState();
    const [roomDetail, setRoomDetail] = useState();
    const [loading, setLoading] = useState(true);

    const loadCityDetail = useCallback(async() => {
        try{

            let response = await city.citySvc.getDetailCity(params.slug);
            // console.log(response)
            setCityDetail(response.data.cityDetail)
            setRoomDetail(response.data.roomList)
        }  catch(exception) {
            toast.warn("Error during Category fetch...")
            console.log(exception);
        } finally{
            setLoading(false)
        }
    }, [params])
    useEffect(() => {
        loadCityDetail()
    }, [params])

    // console.log(setRoomDetail)
    // console.log(roomDetail)

    return (
        <>
            <div className="header-wrapper">
                <Row>
                    {/* <Image src={bgimage} alt="" fluid /> */}
                </Row>
            </div>
            <Container className="bg-light my-3">
                {
                    loading ? <>Loading....</> : <>
                        <Row>
                            <Col>
                                
                            </Col>
                        </Row>
                        
                        <Row>
                            {
                                roomDetail ? <>
                                    {
                                        roomDetail.map((room, index) => (

                                            <Col sm={6} md={4} lg={3} className="mb-3">
                                            <Card className="">
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
                                        ))
                                    }
                                </> : <Col sm={12}><p className="text-danger">No rooms available on this category!!</p></Col>
                            }
                        </Row>
                    </>
                }
            </Container>
        </>
    )
}

export default CityDetail