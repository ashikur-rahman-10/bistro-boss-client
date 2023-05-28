import React from "react";
import NavigationBar from "../Pages/Shared/Navbar/NavigationBar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname == "/login" || "/register";
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
