import { useCallback, useEffect, useState } from "react"
import { Button, Col, Container, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import bookingService from "../room/booking.service"
import { resetBooking, setBooking } from "../../reducer/room.reducer"
import { FaMinus, FaPlus } from "react-icons/fa"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import showimage from "../../assets/images/hello.gif"


const BookingDetail = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    let booking = useSelector((root) => {
        return root.booking.booking;
    })
    const loggedInUser = useSelector((root) => {
        return root.User.loggedInUser;
    })

    const [bookingDetail, setBookingDetail] = useState()

    const loadDetail = useCallback(async() => {
        try {
            let detail = await bookingService.getBookingDetail(booking);
            // console.log(detail)
            if(detail.status) {
                setBookingDetail(detail.result);
            }
        } catch(exception) {
            throw exception;
        }
    }, [booking])

    useEffect(() => {
        if(booking) {
            loadDetail();
        }
    }, [booking])



    const placeOrder = useCallback(async() => {
        try {
            let response = await bookingService.placeAnOrder(booking);
            if(response.status) {
                toast.success("Thank you for using ecommerce. Your order has been placed successfully.")
                dispatch(resetBooking());

                  navigate('/order')
                
            }
        } catch(exception) {
            toast.warning("Sorry! Your order could not be placed.")
        }
    },[])


    return (<>
        <Container className="my-3 bg-light">
            <Row className="p-3">
                <Col sm={12}>

                    <table className="table table-sm table-bordered table-striped">
                        <thead className="table-dark">
                            <tr>
                                <th>Product Name</th>
                                <th>Product Image</th>
                                <th>Product Price</th>
                                <th>Product Qty</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookingDetail && bookingDetail.map((bookingItem, key) =>(
                                    <tr key={key}>
                                        <th>{bookingItem.roomName}</th>
                                        <th>
                                            <img className="img img-fluid" 
                                                src={import.meta.env.VITE_IMAGE_URL+'/rooms/'+bookingItem.roomImage}
                                                style={{maxWidth: "50px"}}
                                            />
                                        </th>
                                        <th>Npr. {bookingItem.price}</th>
                                        <th>
                                            <Button style={{width:"30px", height:"30px"}} variant="secondary" size="sm" className="me-3" onClick={(e) => {
                                                e.preventDefault();
                                                dispatch(setBooking({
                                                    roomId: bookingItem.roomId,
                                                    qty: bookingItem.qty - 1
                                                }))
                                            }}>
                                                <FaMinus />
                                            </Button>
                                            {bookingItem.qty}
                                            <Button  style={{width:"30px", height:"30px"}} variant="secondary" size="sm" className="mx-3" onClick={(e) => {
                                                e.preventDefault();
                                                dispatch(setBooking({
                                                    roomId: bookingItem.roomId,
                                                    qty: bookingItem.qty + 1
                                                }))
                                            }}>
                                                <FaPlus />
                                            </Button>
                                        </th>
                                        <th>Npr. {bookingItem.amount}</th>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </Col>
            </Row>
            <Row>
           
                <Col className="">
                    <Button onClick={placeOrder} variant="warning" className="text-white float-end" size="sm">Place an Order</Button>
                </Col>
                  
            </Row>
            
        </Container>
    </>)
}

export default BookingDetail