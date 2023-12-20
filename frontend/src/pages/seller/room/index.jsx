import SellerRoomCreateForm from "./sellerroom-create.page";
import SellerRoomEditForm from "./sellerroom-edit.page";
import SellerRoomService from "./sellerroom.service";
import SellerRoomListPage from "./sellerroom-list.page";

const sellerroomSvc= new SellerRoomService()
export default {
    SellerRoomCreateForm,
    sellerroomSvc,
    SellerRoomListPage,
    SellerRoomEditForm,
}