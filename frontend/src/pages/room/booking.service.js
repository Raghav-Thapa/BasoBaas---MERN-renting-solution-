import HttpService from "../../services/http.service";

class BookingService extends HttpService{
    sendToBooking = async (data) => {
        try {
            let response = await this.postRequest('/v1/booking', data, {auth:true});
            return response;
        } catch(exception){
            throw exception;
        }
    }

    getBookingDetail = async (data) => {
        try {
            let response = await this.postRequest('/v1/booking/detail', data, {auth:true});
            return response;
        } catch(exception){
            throw exception;
        }
    }

    placeAnOrder = async(booking) => {
        try {
            let response = await this.postRequest('/v1/booking/setBooking', booking, {auth:true});
            return response;
        } catch(exception){
            throw exception;
        }
    }

    listAllBookings = async() => {
        try {
            let response = await this.getRequest('/v1/booking/list-all', {auth:true});
            return response;
        } catch(exception) {
            throw exception
        }
    }
}

export default new BookingService();