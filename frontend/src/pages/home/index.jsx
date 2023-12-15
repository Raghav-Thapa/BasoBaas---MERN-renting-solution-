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

                <Col className="" lg = {6}> 
                <div className="ktmcol">
                <h1 className="kathmanduText">KATHMANDU</h1>
                <img className="rowKathmanduImage" src={kathmandu} alt="" srcset="" /></div>
                </Col>

                
                <Col className="" style={{height:'600px'}} lg = {6}>

                    <div className="bktcol">
                    <Row className="rowBhaktapur">
                    <h1 className="bhaktapurText">BHAKTAPUR</h1>
                    <img className="rowBhaktapurImage" src={bhaktapur} alt="" srcset="" />
                    </Row>
                    </div>
                    

                    <div className="lptcol">
                    <Row className="rowLalitpur">
                    <h1 className="lalitpurText">LALITPUR</h1>
                    <img className="rowLalitpurImage"  src={lalitpur} alt="" srcset="" />
                    </Row>
                    </div>
                
                </Col>


               
            </Row>
        </Container>
        </>

    </>)
}

export default HomePage