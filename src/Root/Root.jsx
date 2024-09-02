 
import { Outlet } from "react-router-dom";
import Navbar from "../Component/Home/Shared/Navbar";
import Footer from "../Component/Home/Shared/Footer";

 
const Root = () => {
    return (
        <div>
            <Navbar/>
            <div className="min-h-[calc(100vh-450px)]">
                <Outlet/>   
            </div> 
            <Footer/>
        </div>
    );
};

export default Root;