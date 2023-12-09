import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/home"
import ErrorPage from "../pages/errors/error.page";
import CategoryDetail from "../pages/category/category.page";
import HomePageLayout from "../pages/layout/home.layout";
import AdminDashboard from "../pages/admin/dashboard.page";
import AdminLayout from "../pages/layout/admin.layout";
import RegisterPage from "../pages/auth/register.page";
import CheckPermission from "./rbac.config";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import ActivateUser from "../pages/auth/activate-user.page";

const Routing = () => {
    return (<>
    <ToastContainer/>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePageLayout />}>

                    <Route index element={<HomePage />} />
                    <Route path="category/:slug" element={<CategoryDetail />} />
                    <Route path="category/:slug/:childSlug" element={<CategoryDetail />} />
                    <Route path="/activate/:token" element={<ActivateUser />} />
                    <Route path="*" element={<ErrorPage />}></Route>

                </Route>

                {/* <Route path="/login" element={} /> */}
                <Route path="/register" element={<RegisterPage />} />
                {/* <Route path="/forget-password" element={<ForgetPage />} />
        <Route path="/reset-password/:token" element={<ResetPage />} /> */}

                {/* <Route path="/admin" element={<CheckPermission accessBy={"admin"} Component={<AdminLayout />} />}> */}
                <Route path="/admin" element={<AdminLayout />}>
                    <Route index element={<AdminDashboard />} /></Route>


                <Route path="/seller" element={<CheckPermission accessBy={"seller"} Component={<>Seller Layout</>} />}>
                    Sellerroute
                </Route>

                <Route path="/customer" element={<CheckPermission accessBy={"customer"} Component={<>Customer Layout</>} />}>
                    Customerroute
                </Route>

            </Routes>
        </BrowserRouter>
    </>)
}

export default Routing