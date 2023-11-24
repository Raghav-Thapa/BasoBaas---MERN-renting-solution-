import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "../pages/home"
import ErrorPage from "../pages/errors/error.page";

const Routing = () => {
 return(<>
    <BrowserRouter>
    <Routes>
        <Route path = "/" element ={<HomePage/>}></Route>
        <Route path="*" element={<ErrorPage/>}></Route>
    </Routes>
    </BrowserRouter>
 </>)
}

export default Routing