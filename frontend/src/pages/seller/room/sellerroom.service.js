import HttpService from "../../../services/http.service"

class SellerRoomService extends HttpService {
    // CRUD 
    createRoom =async (data) => {
        try {
            let response = await this.postRequest('/v1/room', data, {auth: true, file: true})
            return response
        } catch(exception){
            throw exception
        }
    }
    listHomeRooms = async (perpage =10, page=1) => {
        try {
            let response = await this.getRequest("/v1/room/list/home?perPage="+perpage+"&page="+page, {auth:true});
            return response;
        } catch(exception){
            throw exception;
        }
    }
    listAllRooms = async (perpage =10, page=1) => {
        try {
            let response = await this.getRequest("/v1/room?perPage="+perpage+"&page="+page, {auth:true});
            return response;
        } catch(exception){
            throw exception;
        }
    }
    deleteRoomById = async(id) => {
        try{
            let response = await this.deleteRequest("/v1/room/"+id, {auth: true});
            return response;
        } catch(exception) {
            throw exception
        }
    }
    getRoomById = async(id) => {
        try{
            let response = await this.getRequest("/v1/room/"+id, {auth: true});
            return response;
        } catch(exception) {
            throw exception
        }
    }
    getRoomBySlug = async(slug) => {
        try{
            let response = await this.getRequest("/v1/room/"+slug+"/detail");
            return response;
        } catch(exception) {
            throw exception
        }
    }
    updateRoom = async(data, id) => {
        try{
            let response = await this.putRequest("/v1/room/"+id, data, {auth: true, file: true});
            return response;
        } catch(exception) {
            throw exception
        }
    }
}
export default SellerRoomService