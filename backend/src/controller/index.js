const BannerController = require("./banner.controller")
const CityController = require("./city.controller")
const RoomController = require("./room.controller")
const bannerCtrl = new BannerController()
const cityCtrl = new CityController()
const roomCtrl = new RoomController()
const CategoryController = require('./category.controller')
const categoryCtrl = new CategoryController();

module.exports = {
    bannerCtrl,
    cityCtrl,
    roomCtrl,
    categoryCtrl,
}