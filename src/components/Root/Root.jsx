import { Outlet } from "react-router-dom";
import Navbar from "../Home/Navbar/Navbar";
import Footer from "../Home/Footer/Footer";
import { Toaster } from "react-hot-toast";



const Root = () => {
    return (
        <div>
            <Toaster position="top-center" reverseOrder={false} />

            <Navbar></Navbar>
            <Outlet></Outlet>
            
            <Footer></Footer>
        </div>
    );
};

export default Root;