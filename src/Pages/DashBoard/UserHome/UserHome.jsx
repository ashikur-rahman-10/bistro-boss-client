import React, { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const UserHome = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="drawer-content">
            <img src={user?.photoURL} alt="" />
        </div>
    );
};

export default UserHome;
