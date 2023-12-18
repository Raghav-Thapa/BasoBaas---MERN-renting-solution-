const BookingModel = require("../models/booking.model");

class BookingService {
  addToBooking = (data) => {
    try {
      let booking = new BookingModel(data);
      return booking.save();
    } catch (exception) {
      throw exception;
    }
  };
}

module.exports = BookingService;