import React from "react";
import notFound from "../../assets/404.gif";
import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="min-h-screen w-full flex justify-center items-center">
            <div>
                <div>
                    <img className="md:w-[70%] mx-auto" src={notFound} alt="" />
                </div>
                <div className="w-full text-center">
                    {" "}
                    <Link className="text-info outline outline-info px-3 py-2 rounded-2xl hover:bg-info hover:text-white ">
                        Go Back To home!
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
