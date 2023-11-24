import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "../pages/home"
import ErrorPage from "../pages/errors/error.page";
import CategoryDetail from "../pages/category/category.page";
import HomePageLayout from "../pages/layout/home.layout";
import AdminDashboard from "../pages/admin/dashboard.page";

const Routing = () => {
 return(<>
    <BrowserRouter>
    <Routes>
        <Route path = "/" element ={<HomePageLayout/>}>

        <Route index element ={<HomePage/>}/>
        <Route path="category/:slug" element={<CategoryDetail/>} />
        <Route path="category/:slug/:childSlug" element={<CategoryDetail />} />

        <Route path="*" element={<ErrorPage/>}></Route>

        </Route>

        <Route path="/admin" element ={<AdminDashboard/>}></Route>
    </Routes>
    </BrowserRouter>
 </>)
}

export default Routing