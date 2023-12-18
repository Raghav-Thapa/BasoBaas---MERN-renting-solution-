const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema(
  {
    buyer: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    room: {
      type: mongoose.Types.ObjectId,
      ref: "Room",
      required: true,
    },
    // qty: {
    //   type: Number,
    //   required: true,
    // },
    price: {
      type: Number,
      required: true,
    },

    // subTotal: {
    //   type: Number,
    //   required: true,
    // },
    // discount: Number,
    // total: Number,
    status: {
      type: String,
      enum: ["pending", "paid", "cancelled", "verified"],
      default: "pending",
    },
  },
  {
    timestamps: true,
    autoCreate: true,
    autoIndex: true,
  }
);

const BookingModel = mongoose.model("Booking", BookingSchema);
module.exports = BookingModel;