const CityModel = require("../models/city.model")
const Joi = require("joi")

class CityService{
    cityValidate = async (data) => {
        try{
            let schema = Joi.object({
                name: Joi.string().min(3).required(),
                image: Joi.string().required(),
                status: Joi.string().valid("active","inactive").default("inactive")
            })
            let response = schema.validate(data);
            if(response.error){
                let msg = response.error.details[0].message;
                throw{status: 400, msg: msg}
            }
            return response.value;
            
        }catch(exception){
            console.log(exception)
            throw exception
            // throw {
            //     status: 400,
            //     msg: "City Validation Failure"
            // }
        }
    }

    getAllCitys = async ({perPage = 10, currentPage =1}) =>{
        try{
            let skip = (currentPage-1) * perPage;

            let data = await CityModel.find()
            .sort({_id: -1})
            .skip(skip)
            .limit(perPage)
            return data;
        } catch(exception) {
            console.log(exception)
            throw{status: 500, msg: "Querry execution fialed."}
        }
    }

    getAllCount = async (filter ={}) => {
        return await CityModel.count(filter)
    }
    createCity = async (data) => {
        try{
            let city = new CityModel(data);
            return await city.save()
        }catch(exception){
            console.log(exception)
            throw{
                status: 500, msg:"Db querry failed"
            }
        }
    }
    updateCity = async(data,id) =>{
        try{
            let response = await CityModel.findByIdAndUpdate(id, {$set: data})
            return response

        } catch(except){
            throw except
        }
    }
    getCityById = async(id) => {
        try{
            let city = await CityModel.findById(id)
            if(city){
                return city
            } else{
                throw{status:404, msg:"City does not exist"}
            }

        }catch(err){
            console.log(err)
            throw err
        }
    }
    deleteCityById = async(id) => {
        try{
            let delResponse = await CityModel.findByIdAndDelete(id)
            if(delResponse){
                return delResponse
            } else{
                throw{status:404, msg: "City has been already deleted or does not exist"}
            }
            
        }catch(except){
            throw except
        }
    }
    getCityByFilter = async(filter, paging) =>  {
        try {
            let response = await CityModel.find(filter)
                    .sort({_id: -1})
                    .limit(10)
            return response;
        } catch(exception) {
            throw exception
        }
    }
}
module.exports = CityService