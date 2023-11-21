const router = require('express').Router()
const { cityCtrl } = require('../controller')
const authCheck = require("../middleware/auth.middleware")
const { checkPermission } = require('../middleware/permission.middleware')
const uploader = require('../middleware/uploader.middleware')

const uploadPath = (req,res,next) =>{
    req.uploadPath = "./public/citys/";
    next()
}
router.get("/:slug/detail",cityCtrl.getDetailOfCity)

router.route("/")
    .get(authCheck, checkPermission('admin'), cityCtrl.listAllCitys)
    .post(authCheck, checkPermission('admin'), uploadPath, uploader.single('image'),cityCtrl.storeCity)

router.route("/:id")
    .put(authCheck, checkPermission('admin'), uploadPath, uploader.single('image'),cityCtrl.updateCity)
    .delete(authCheck, checkPermission('admin'),cityCtrl.deleteCity)
    .get(authCheck, checkPermission('admin'), cityCtrl.getCityById)

router.get('/list/home', cityCtrl.getCityForHomePage)

module.exports = router;