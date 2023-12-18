const router = require("express").Router();
const { bookingCtrl } = require("../controller");
const authCheck = require("../middleware/auth.middleware");
const {checkPermission} = require("../middleware/permission.middleware")

router.route("/").post(authCheck, bookingCtrl.addToBooking);
router.get("/list-all", authCheck, checkPermission("admin"),bookingCtrl.listAll)
router.post("/detail", authCheck, bookingCtrl.getBookingDetail);
router.post("/setBooking", authCheck, bookingCtrl.placeOrder);

module.exports = router;