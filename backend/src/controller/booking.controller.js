const helpers = require("../utilities/helpers");
const room = require("../services/room.service");
const RoomService = require("../services/room.service");
const BookingService = require("../services/booking.service");
// const OrderModel = require("../models/order.model");
const BookingModel = require("../models/booking.model");

class BookingController {
  constructor() {
    this.bookSvc = new RoomService();
    this.svc = new BookingService();
  }
  addToBooking = async (req, res, next) => {
    try {
      let payload = req.body;


      let bookDetail = await this.bookSvc.getRoomById(payload.roomId);
      // let subtotal = bookDetail.afterDiscount * payload.qty;
      // let discount = payload.discount ?? 0;
      console.log(bookDetail);
      let bookingobj = {
        buyer: req.authUser._id,
        room: payload.roomId,
        // qty: payload.qty,
        price: bookDetail.price,
        // subTotal: subtotal,
        // discount: discount ?? 0,
        // total: subtotal - discount,
        status: "pending",
      };
      let response = await this.svc.addToBooking(bookingobj);
      res.json({
        status: true,
        msg: "Room added in Booking",
        result: response,
      });
    } catch (exception) {
      next(exception);
    }
  };

  getBookingDetail = async (req, res, next) => {
    try {
      let booking = req.body;
      let roomIds = booking.map((item) => item.roomId);
      let roomList = await this.bookSvc.getRoomByFilter(
        {
          _id: { $in: roomIds },
        },
        {
          perPage: 100,
          currentPage: 1,
        }
      );
      console.log(roomList);
      let bookingDetail = [];
      roomList.map((book) => {
        let singleItem = {
          roomId: book._id,
          roomName: book.name,
          roomImage: book.images[0],
          price: book.price,
          city: book.city.name,
        };
        let qty = 0;
        let amt = 0;
        booking.map((bookingItem) => {
          if (book._id.equals(bookingItem.roomId)) {
            qty = bookingItem.qty;
            amt = bookingItem.qty * book.afterDiscount;
          }
        });
        singleItem.qty = qty;
        singleItem.amount = amt;
        bookingDetail.push(singleItem);
      });
      console.log(bookingDetail)
      res.json({
        result: bookingDetail,
        msg: "Booking Detail Fetched",
        status: true,
      });
    } catch (exception) {
      next(exception);
    }
  };

  placeOrder = async (req, res, next) => {
    try {
      let booking = req.body;
      let roomIds = booking.map((item) => item.roomId);
      let roomList = await this.bookSvc.getRoomByFilter(
        {
          _id: { $in: roomIds },
        },
        {
          perPage: 100,
          currentPage: 1,
        }
      );
      let bookingDetail = [];
      let subTotal = 0;
      roomList.map((book) => {
        let singleItem = {
          room: book._id,
          price: book.afterDiscount,
          qty: "",
        };
        let qty = 0;
        let amt = 0;
        booking.map((bookingItem) => {
          if (book._id.equals(bookingItem.roomId)) {
            qty = bookingItem.qty;
            amt = bookingItem.qty * book.afterDiscount;
          }
        });
        singleItem.qty = qty;
        singleItem.amount = amt;
        subTotal += Number(amt);
        bookingDetail.push(singleItem);
      });

      let code = helpers.generateRandomString(10);

      let orderDetail = {
        bookingCode: code,
        buyer: req.authUser._id,
        booking: bookingDetail,
        subTotal: subTotal,
        discount: 0,
        total: subTotal - 0,
        status: "pending",
      };

      let order = new OrderModel(orderDetail);
      await order.save();

      res.json({
        result: order,
        msg: "Your order placed successfully",
        status: true,
      });
    } catch (exception) {
      next(exception);
    }
  };

  listAll = async (req, res, next) => {
    try {
      let detail = await OrderModel.find().populate("buyer");
      res.json({
        result: detail,
        status: true,
        msg: "All Bookings",
      });
    } catch (exception) {
      next(exception);
    }
  };
}

module.exports = BookingController;