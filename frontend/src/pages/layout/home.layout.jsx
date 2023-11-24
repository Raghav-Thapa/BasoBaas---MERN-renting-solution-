import { Outlet } from "react-router-dom"
import Header from "../home/components/header.component"
import Topbar from "../home/components/topbar.component"

const HomePageLayout = () => {
    return(<>
    <Topbar/>
    <Header/>

    <Outlet/>
    
    </>)
}

export default HomePageLayout