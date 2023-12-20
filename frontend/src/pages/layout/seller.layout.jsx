import { Outlet } from "react-router-dom";
import "../../assets/css/adminmodel.css"
import { SellerFooter, SellerSidebar, SellerTopNav } from "../seller/components";

const SellerLayout = () => {

    return (<>

        <SellerTopNav />

        <div id="layoutSidenav">

            <SellerSidebar />

            <div id="layoutSidenav_content" className="my-5">
                <main>
                    <Outlet />
                </main>

            </div>
        </div>
        <SellerFooter />
    </>
    )
}

export default SellerLayout