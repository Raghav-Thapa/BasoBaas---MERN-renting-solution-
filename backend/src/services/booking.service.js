const BookingModel = require("../models/booking.model");

class BookingService {
  addToBooking = async (data) => {
    try {
      let booking = new BookingModel(data);
      return await booking.save();
    } catch (exception) {
      throw exception;
    }
  };
}

module.exports = BookingService;