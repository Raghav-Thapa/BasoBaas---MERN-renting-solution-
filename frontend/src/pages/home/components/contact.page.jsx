import { Col, Container, Row } from "react-bootstrap"
// import image from "../../assets/images/aboutus-1.jpeg"
import { styled } from "styled-components"
const AboutBanner = styled.div`
    max-width: 100%
`
const ContactUs = () => {
    return (<>

        <Container className="my-5 bg-light p-3">
            <h2>Contact Us</h2>

            <div class="contact-info">
                <div>
                    <strong>Phone:</strong> +(977) 1111111111
                </div>
                <div>
                    <strong>Email:</strong> contact@contact.com
                </div>
                <div>
                    <strong>Location:</strong> Kathmandu, Nepal
                </div>
            </div>
        </Container>
    </>)
}
export default ContactUs