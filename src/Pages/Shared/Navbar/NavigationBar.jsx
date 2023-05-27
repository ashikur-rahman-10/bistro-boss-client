import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavigationBar.css";

const NavigationBar = () => {
    const navbarOptions = (
        <div className="flex lg:flex-row flex-col gap-4">
            <NavLink
                to={"/"}
                className="hover:text-orange-500 hover:bg-slate-200  py-2 px-4 rounded-xl"
            >
                HOME
            </NavLink>
            <NavLink
                to={"/contact"}
                className="hover:text-orange-500 hover:bg-slate-200  py-2 px-4 rounded-xl"
            >
                CONTACT US
            </NavLink>
            <NavLink
                to={"/dashboard"}
                className="hover:text-orange-500 hover:bg-slate-200  py-2 px-4 rounded-xl"
            >
                DASHBOARD
            </NavLink>
            <NavLink
                to={"/menu"}
                className="hover:text-orange-500 hover:bg-slate-200  py-2 px-4 rounded-xl"
            >
                OUR MENU
            </NavLink>
            <NavLink
                to={"/shop"}
                className="hover:text-orange-500 hover:bg-slate-200  py-2 px-4 rounded-xl"
            >
                OUR SHOP
            </NavLink>
        </div>
    );
    return (
        <div>
            <div className="navbar bg-black bg-opacity-60 fixed z-10  text-white ">
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
                    <a className="btn">Get started</a>
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;
