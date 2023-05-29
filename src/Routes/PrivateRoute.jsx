import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { TailSpin } from "react-loader-spinner";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return (
            <div className="bg-white h-screen w-full flex justify-center items-center z-40">
                <TailSpin
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            </div>
        );
    }
    if (user) {
        return children;
    }
    return <Navigate to={"/login"} replace state={location}></Navigate>;
};

export default PrivateRoute;
