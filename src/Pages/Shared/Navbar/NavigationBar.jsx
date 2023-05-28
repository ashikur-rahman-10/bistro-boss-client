import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavigationBar.css";

const NavigationBar = () => {
    const navbarOptions = (
        <div className="flex lg:flex-row flex-col gap-2">
            <NavLink
                to={"/"}
                className="hover:text-orange-500 hover:bg-slate-200  py-2 px-3 rounded-xl"
            >
                HOME
            </NavLink>
            <NavLink
                to={"/menu"}
                className="hover:text-orange-500 hover:bg-slate-200  py-2 px-3 rounded-xl"
            >
                OUR MENU
            </NavLink>
            <NavLink
                to={"/shop/salad"}
                className="hover:text-orange-500 hover:bg-slate-200  py-2 px-3 rounded-xl"
            >
                OUR SHOP
            </NavLink>
            <NavLink
                to={"/dashboard"}
                className="hover:text-orange-500 hover:bg-slate-200  py-2 px-3 rounded-xl"
            >
                DASHBOARD
            </NavLink>
            <NavLink
                to={"/contact"}
                className="hover:text-orange-500 hover:bg-slate-200  py-2 px-3 rounded-xl"
            >
                CONTACT US
            </NavLink>
        </div>
    );
    return (
        <div>
            <div className="navbar bg-black bg-opacity-60 fixed h-fit py-0 md:py-1 z-10  text-white ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52"
                        >
                            {navbarOptions}
                        </ul>
                    </div>
                    <Link className="hover:shadow normal-case flex flex-col  lg:text-3xl text-lg font-bold">
                        BISTRO BOSS{" "}
                        <span className="lg:text-2xl text-base font-medium">
                            Restaurant
                        </span>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navbarOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div>
                        <NavLink
                            to={"/login"}
                            className="hover:text-orange-500 hover:bg-slate-200  py-2 px-3 rounded-xl md:mr-10 mr-5"
                        >
                            Login
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;
