import { Outlet } from "react-router-dom"
import Header from "../home/components/header.component"
import Topbar from "../home/components/topbar.component"
import Footer from "../home/components/footer.component"

const HomePageLayout = () => {
    return(<>
    <Topbar/>
    <Header/>

    <Outlet/>
    <Footer/>
    </>)
}

export default HomePageLayout