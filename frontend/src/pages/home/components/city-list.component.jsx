import { Col, Container, Row } from "react-bootstrap"
import kathmandu from "../../../assets/images/kathmandu.jpg"
import lalitpur from "../../../assets/images/lalitpur.jpg"
import bhaktapur from "../../../assets/images/bhaktapur.jpg"
import "../../../assets/css/cities.css"
import { NavLink } from "react-router-dom"

const CityPage = () => {

    return(<>

        <>
        <Container fluid className="marginn">
            <Row >

                <Col lg = {6}> 
                <div className="ktmcol">
                <NavLink to={`/city/kathmandu`}>
                <h1 className="kathmanduText">KATHMANDU</h1>
                <img className="rowKathmanduImage" src={kathmandu} alt="" srcset="" /></NavLink></div>
                </Col>

                
                <Col style={{height:'600px'}} lg = {6}>

                    <div className="bktcol">
                    <NavLink to={`/city/bhaktapur`}>
                    <Row className="rowBhaktapur">
                    <h1 className="bhaktapurText">BHAKTAPUR</h1>
                    <img className="rowBhaktapurImage" src={bhaktapur} alt="" srcset="" />
                    </Row>
                    </NavLink>
                    </div>
                    

                    <div className="lptcol">
                    <NavLink to={`/city/lalitpur`}>
                    <Row className="rowLalitpur">
                    <h1 className="lalitpurText">LALITPUR</h1>
                    <img className="rowLalitpurImage"  src={lalitpur} alt="" srcset="" />
                    </Row></NavLink>
                    </div>
                
                </Col>


               
            </Row>
        </Container>
        </>

    </>)
}

export default CityPage