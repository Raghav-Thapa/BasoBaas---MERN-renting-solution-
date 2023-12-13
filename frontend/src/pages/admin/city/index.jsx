import CityCreateForm from "./city-create.page";
import CityEditForm from "./city-edit.page";
import CityService from "./city.service";
import CityListPage from "./city-list.page";

const citySvc= new CityService()
export default {
    CityCreateForm,
    citySvc,
    CityListPage,
    CityEditForm,
}