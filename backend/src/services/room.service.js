const RoomModel = require("../models/room.model");
const Joi = require("joi");

class RoomService {
    roomValidate = async (data) => {
        try {
            let schema = Joi.object({
                name: Joi.string().min(3).required(),
                categories: Joi.string(),
                detail: Joi.string(),
                price: Joi.number().min(1).required(),
                // discount: Joi.number().min(0).max(99),
                city: Joi.string(),
                attributes: Joi.array(),
                isFeatured: Joi.bool(),
                images: Joi.array().items(Joi.string()),
                sellerId: Joi.string(),
                status: Joi.string().valid("active",'inactive').default("inactive")
            })
            let response = schema.validate(data);
            if(response.error) {
                let msg = response.error.details[0].message;
                throw {status: 400, msg: msg}
            }
            return response.value;
        } catch(exception) {
            console.log(exception)
            throw exception
        }
    }

    getAllRooms = async ({perPage= 10, currentPage=1}) => {
        try {
            let skip = (currentPage-1) * perPage;
            
            let data = await RoomModel.find()
                .populate("categories")
                .populate("city")
                .populate("sellerId")
                .sort({_id: -1})
                .skip(skip)
                .limit(perPage)
            return data;
        } catch(exception) {
            console.log(exception)
            throw {status: 500, msg: "Query execution failed."}
        }
    }

    getAllCount = async (filter={}) => {
        return await RoomModel.count(filter);
    }

    createRoom = async(data) => {
        try {
            let room = new RoomModel(data);
            return await room.save()
        } catch(exception) {
            console.log(exception)
            throw {
                status: 500, msg: "DB Query failed"
            }
        }
    }

    updateRoom = async (data, id) => {
        try {
            // findByIdAndUpdate => return => before update boject
            let response = await RoomModel.findByIdAndUpdate(id, {$set: data})
            return response
        } catch(except){
            throw except
        }
    }

    getRoomById = async(id) => {
        try {
            let room = await RoomModel.findById(id)
                .populate("categories")
                .populate("city")
                .populate("sellerId");
            if(room) {
                return room
            } else {
                throw {status: 404, msg: "Room does not exists"}
            }
        } catch(err) {
            console.log(err)
            throw err
        }
    }

    deleteRoomById = async(id) => {
        try{
            let delResponse = await RoomModel.findByIdAndDelete(id)
            if(delResponse){
                return delResponse
            } else {
                throw {status: 404, msg: "Room has been already deleted or does not exists"}
            }
        } catch(except) {
            throw except
        }
    }

    getRoomByFilter = async(filter, paging) =>  {
        try {
            let skip = (paging.currentPage-1) * paging.perPage;
            let response = await RoomModel.find(filter)
                .populate("categories")
                .populate("city")
                .populate("sellerId")
                    .sort({_id: -1})
                    .skip(skip)
                    .limit(paging.perPage)
            return response;
        } catch(exception) {
            throw exception
        }
    }
}

module.exports = RoomService;