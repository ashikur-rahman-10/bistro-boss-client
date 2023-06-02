import { Children, useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import UseAdmin from "../Hooks/UseAdmin";
import { Navigate, useLocation } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";

const AdminOnlyRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = UseAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
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
        </div>;

        if (user && isAdmin) {
            return children;
        }
    }
    return <Navigate to={"/login"} replace state={location}></Navigate>;
};

export default AdminOnlyRoutes;
