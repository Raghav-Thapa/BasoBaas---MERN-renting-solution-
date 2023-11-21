const CityService = require("../services/city.service");
const slugify = require("slugify");
const RoomService = require("../services/room.service");

class CityController{
    _svc;

    constructor(){
        this._svc = new CityService(); 
        this.roomSvc = new RoomService();
    }

    getDetailOfCity = async(req, res, next) => {
        try{
            let slug = req.params.slug
            let city = await this._svc.getCityByFilter({slug: slug})
            let rooms = await this.roomSvc.getRoomByFilter({
                city: city
            }, {
                perPage:100,
                currentPage: 1
            })
            res.json({
                data:{
                    cityDetail: city,
                    roomList: rooms
                },
                status: true,
                msg: "City List"
            })

        }catch(exception){
            next(exception)
        }
    }
    
    listAllCitys = async (req, res, next) => {
        try{
            let paging ={
                totalNoOfRows: await this._svc.getAllCount(),
                perPage: req.query.perPage ? Number(req.query.perPage):10,
                currentPage: req.query.page ? Number(req.query.page):1
            }

            let data = await this._svc.getAllCitys(paging)
            // console.log(data)
            res.json({
                result: data,
                status: true,
                msg: "City Data Fetched",
                meta: paging
            })
        } catch(exception){
            next(exception)
        }

    }

    storeCity = async (req, res ,next) =>{
        try{
            let data = req.body;
            if(req.file){
                data.image = req.file.filename;
            }

            let validated = await this._svc.cityValidate(data);
            validated.slug = slugify(validated.name, {lower: true, replacement :"-"})
            let response = await this._svc.createCity(validated); 
            res.json({
                result: response,
                msg : "City created successfully",
                status: true,
                meta: null
            })
        }catch(exception){
            next(exception)
        }

    }

    updateCity = async (req, res, next) => {
        try{
            let data = req.body;
            let city = await this._svc.getCityById(req.params.id)
            if(req.file){
                data.image = req.file.filename;
            } else{
                data.image = city.image
            }

            let validated = await this._svc.cityValidate(data);
            let response = await this._svc.updateCity(validated, req.params.id); 
            res.json({
                result: response,
                msg : "City updated successfully",
                status: true,
                meta: null
            })
        }catch(exception){
            next(exception)
        }

    }

    deleteCity = async (req, res, next) => {
        try{
            let city = await this._svc.getCityById(req.params.id)
            let del = await this._svc.deleteCityById(req.params.id)
            res.json({
                result : del,
                msg: "City deleted successfully",
                status: true,
                meta: null
            })
        }catch(except){
            next(except)
        }

    }

    getCityForHomePage = async (req, res, next) => {
        try{
            let filter ={
                status: "active",
            }
            let paging ={
                totalNoOfRows: await this._svc.getAllCount(filter),
                perPage: req.query.perPage ? Number(req.query.perPage):10,
                currentPage: req.query.page ? Number(req.query.page):1
            }
            let data = await this._svc.getCityByFilter(filter, paging);
            res.json({
                result: data,
                msg:"City data",
                status: true,
                meta: paging
            })
        }catch(exception){
            next(exception)
        }

    }

    getCityById = async (req, res, next) => {
        try{
            let id = req.params.id;
            let data = await this._svc.getCityById(id);
            res.json({
                result: data,
                msg:"City data fetched",
                status: true,
                meta: null
            })
        }catch(exception){
            next(exception)
        }
    }


}

module.exports = CityController