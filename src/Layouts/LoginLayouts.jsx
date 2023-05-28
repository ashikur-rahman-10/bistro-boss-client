import React from "react";
import { Outlet } from "react-router-dom";

const LoginLayouts = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayouts;
