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
import Topbar from "../pages/home/components/topbar.component";
import ForgetPage from "../pages/auth/forget-password.page"
import ResetPage from "../pages/auth/reset-password.page"
import Banner from "../pages/admin/banner"
import City from "../pages/admin/city"
import Category from "../pages/admin/category"
import User from "../pages/admin/user"
import Room from "../pages/admin/room"
import SellerRoom from "../pages/seller/room"
import { Outlet } from "react-router-dom"
import {useDispatch } from "react-redux";
import { useEffect } from "react";
import { getLoggedInUser } from "../reducer/user.reducer"
import CityDetail from "../pages/city/city.page";
import RoomDetail from "../pages/room";
import { setItemInTheBooking } from "../reducer/room.reducer";
import BookingDetail from "../pages/home/booking-detail.page";
import AboutUs from "../pages/home/components/about-us.page";
import Blogs from "../pages/home/components/blogs.page";
import RoomList from "../pages/home/components/room-list.component";
import RecentDemands from "../pages/home/components/recent-demands.component";
import ContactUs from "../pages/home/components/contact.page";
import SellerLayout from "../pages/layout/seller.layout";
import SellerDashboard from "../pages/seller/dashboard.page";


const Routing = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getLoggedInUser());
        dispatch(setItemInTheBooking());

    }, [])
    return (<>
            <ToastContainer />
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePageLayout />}>
                    <Route index element={<HomePage />} />

                    <Route path="about" element={<AboutUs />}></Route>

                    <Route path="about" element={<AboutUs />}></Route>

                    <Route path="blogs" element={<Blogs/>}></Route>

                    <Route path="news" element={<Blogs/>}></Route>
                    
                    <Route path="privacy-policy" element={<Blogs/>}></Route>

                    <Route path="terms-and-conditions" element={<Blogs/>}></Route>

                    <Route path="contact" element={<ContactUs/>}></Route>

                    <Route path="recentdemands" element={<RecentDemands/>}></Route>

                    <Route path="category/:slug" element={<CategoryDetail />} />
                    <Route path="category/:slug/:childSlug" element={<CategoryDetail />} />

                    <Route path="city/:slug" element={<CityDetail/>} />
                    <Route path="city/:slug/:childSlug" element={<CityDetail />} />

                    <Route path="room/:slug" element={<RoomDetail/>} />

                    <Route path="booking" element={<BookingDetail />} ></Route>

                    <Route path="/activate/:token" element={<ActivateUser />} />
                    <Route path="*" element={<ErrorPage />}></Route>

                    <Route path="/customer" element={<CheckPermission accessBy={"customer"} Component={<HomePage/>} />}/>


                </Route>

                <Route path="/login" element={<Topbar />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/forget-password" element={<ForgetPage />} />
                <Route path="/reset-password/:token" element={<ResetPage />} />

                <Route path="/admin" element={<CheckPermission accessBy={["admin","seller"]} Component={<AdminLayout />} />}>
                    <Route index element={<AdminDashboard />} />

                    <Route path="banner" element={<><Outlet /></>}>
                        <Route index element={<Banner.BannerListPage />} />
                        <Route path="create" element={<Banner.BannerCreateForm />} />
                        <Route path=":id" element={<Banner.BannerEditForm />} />
                    </Route>

                    <Route path="city" element={<><Outlet /></>}>
                        <Route index element={<City.CityListPage />} />
                        <Route path="create" element={<City.CityCreateForm />} />
                        <Route path=":id" element={<City.CityEditForm />} />
                    </Route>

                    <Route path="category" element={<><Outlet /></>}>
                        <Route index element={<Category.CategoryListPage/>} />
                        <Route path="create" element={<Category.CategoryCreateForm />} />
                        <Route path=":id" element={<Category.CategoryEditForm />} />
                    </Route>

                    <Route path="user" element={<><Outlet /></>}>
                        <Route index element={<User.UserListPage/>} />
                        <Route path="create" element={<User.UserCreateForm />} />
                        <Route path=":id" element={<User.UserEditForm />} />
                    </Route>

                    <Route path="room" element={<><Outlet /></>}>
                        <Route index element={<Room.RoomListPage/>} />
                        <Route path="create" element={<Room.RoomCreateForm />} />
                        <Route path=":id" element={<Room.RoomEditForm />} />
                    </Route>


                </Route>





                <Route path="/seller" element={<CheckPermission accessBy={"seller"} Component={<SellerLayout />} />}>
                    <Route index element={<SellerDashboard />} />
                    
                    <Route path="room" element={<><Outlet /></>}>
                        <Route index element={<SellerRoom.SellerRoomListPage/>} />
                        <Route path="create" element={<SellerRoom.SellerRoomCreateForm />} />
                        <Route path=":id" element={<SellerRoom.SellerRoomEditForm />} />
                    </Route>

                    <Route path="category" element={<><Outlet /></>}>
                        <Route index element={<Category.CategoryListPage/>} />
                        <Route path="create" element={<Category.CategoryCreateForm />} />
                        <Route path=":id" element={<Category.CategoryEditForm />} />
                    </Route>

                    </Route>

                <Route path="/customer" element={<CheckPermission accessBy={"customer"} Component={<>Customer Layout</>} />}/>

            </Routes>
            </BrowserRouter>
    </>)
}

export default Routing