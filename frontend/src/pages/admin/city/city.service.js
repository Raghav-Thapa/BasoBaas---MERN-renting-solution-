import HttpService from "../../../services/http.service"

class CityService extends HttpService {
    //CRUD
    createCity =async (data) => {
        try {
            let response = await this.postRequest('/v1/city', data, {auth:true, file:true})
            return response
        } catch(exception){
            throw exception
        }
    } 

    getDetailCity = async (slug) => {
        try {
            let response = await this.getRequest('/v1/city/'+slug+"/detail")
            return response;
        } catch(exception) {
            throw exception
        }
    } 


    listAllCitys = async (perPage=10, page=1) =>{
        try{
            let response = await this.getRequest("v1/city?perPage="+perPage+"&page="+page,{auth:true})
            return response
        }catch(exception){
            throw exception
        }
    }

    listAllHomeCitys = async (perpage =10, page=1) => {
        try {
            let response = await this.getRequest("/v1/city/list/home?perPage="+perpage+"&page="+page, {auth:true});
            return response;
        } catch(exception){
            throw exception;
        }
    }

    deleteCityById = async (id) => {
        try{
            let response = await this.deleteRequest("/v1/city/"+id, {auth:true});
            return response;

        }catch(exception){
            throw exception
        }
    }

    getCityById = async(id) => {
        try{
            let response = await this.getRequest("/v1/city/"+id, {auth:true});
            return response;

        }catch(exception){
            throw exception
        }

    }

    updateCity = async (data, id) => {
        try{
            let response = await this.putRequest("/v1/city/"+id, data, {auth:true, file:true});
            return response;

        }catch(exception){
            throw exception
        }
    }
}

export default CityService