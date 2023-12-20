const router = require('express').Router()
const { roomCtrl } = require('../controller')
const authCheck = require("../middleware/auth.middleware")
const { checkPermission } = require('../middleware/permission.middleware')
const uploader = require('../middleware/uploader.middleware')

const uploadPath = (req,res,next) =>{
    req.uploadPath = "./public/rooms/";
    next()
}

router.get("/:slug/detail", roomCtrl.getRoomBySlug);

router.route("/")
    .get(authCheck, checkPermission(['admin', 'seller']), roomCtrl.listAllRooms)
    .post(authCheck, checkPermission(['admin', 'seller']), uploadPath, uploader.array('images'),roomCtrl.storeRoom)

router.route("/:id")
    .put(authCheck, checkPermission(['admin', 'seller']), uploadPath, uploader.single('image'),roomCtrl.updateRoom)
    .get(authCheck, checkPermission(['admin', 'seller']), roomCtrl.getRoomById)
    .delete(authCheck, checkPermission(['admin', 'seller']),roomCtrl.deleteRoom)

router.get('/list/home', roomCtrl.getRoomForHomePage)

module.exports = router;