import RoomCreateForm from "./room-create.page";
import RoomEditForm from "./room-edit.page";
import RoomService from "./room.service";
import RoomListPage from "./room-list.page";

const roomSvc= new RoomService()
export default {
    RoomCreateForm,
    roomSvc,
    RoomListPage,
    RoomEditForm,
}