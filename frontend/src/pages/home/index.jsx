import { Col, Container, Row } from "react-bootstrap"
import Banner from "./components/banner.component"
import kathmandu from "../../assets/images/kathmandu.jpg"
import lalitpur from "../../assets/images/lalitpur.jpg"
import bhaktapur from "../../assets/images/bhaktapur.jpg"
import ktmblack from "../../assets/images/ktmblack.jpg"
import "../../assets/css/cities.css"

const HomePage = () => {
    return(<>
    <Banner/>
        
        <>
        <Container fluid className="marginn backgroundcolor">
            <Row >

                <Col className="ktmcol" lg = {6}> 
                <img className="rowKathmanduImage" src={kathmandu} alt="" srcset="" />
                </Col>

                
                <Col className="" style={{height:'600px'}} lg = {6}>

                    <Row className="rowBhaktapur">
                    <img className="rowBhaktapurImage" src={bhaktapur} alt="" srcset="" />
                    </Row>

                    <Row className="rowLalitpur">
                    <img className="rowLalitpurImage"  src={lalitpur} alt="" srcset="" />
                    </Row>
                
                </Col>


               
            </Row>
        </Container>
        </>

    </>)
}

export default HomePage