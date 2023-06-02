import React from "react";
import {
    FaBars,
    FaBook,
    FaCalendarAlt,
    FaCartPlus,
    FaCommentAlt,
    FaEnvelope,
    FaHome,
    FaShoppingBag,
    FaWallet,
    FaUtensils,
    FaUsers,
} from "react-icons/fa";
import "./DashBoard.css";
import { Link, NavLink, Outlet } from "react-router-dom";
import UseAdmin from "../../Hooks/UseAdmin";

const DashBoard = () => {
    const [isAdmin] = UseAdmin();
    const admin = isAdmin?.result?.admin;

    return (
        <div>
            <div className="drawer  drawer-mobile">
                <input
                    id="my-drawer-2"
                    type="checkbox"
                    className="drawer-toggle"
                />

                <Outlet></Outlet>
                <div>
                    <label
                        htmlFor="my-drawer-2"
                        className=" btn-outline absolute top-3 text-3xl p-1 border text-[#D1A054]  left-3 drawer-button rounded-md lg:hidden"
                    >
                        <FaBars></FaBars>
                    </label>
                </div>
                <div className="drawer-side">
                    <label
                        htmlFor="my-drawer-2"
                        className="drawer-overlay"
                    ></label>

                    <ul className="menu  bg-[#D1A054] p-4 w-80 h-screen uppercase text-base-content">
                        <Link className="mb-10" to={"/"}>
                            <div>
                                <h2 className="text-2xl font-bold">
                                    BISTRO BOSS
                                </h2>
                                <p className="font-bold text-lg">
                                    R E S T A U R A N T
                                </p>
                            </div>
                        </Link>
                        {admin ? (
                            <>
                                {" "}
                                <li>
                                    <NavLink to={"/dashboard"}>
                                        <FaHome></FaHome> Admin Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"reservation"}>
                                        <FaUtensils></FaUtensils> Add Item
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"myCart"}>
                                        <FaBars></FaBars> Manage Item
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"paymentHistory"}>
                                        <FaBook></FaBook> Manage Bookings
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"allusers"}>
                                        <FaUsers></FaUsers> All Users
                                    </NavLink>
                                </li>
                            </>
                        ) : (
                            <>
                                {" "}
                                <li>
                                    <NavLink to={"/dashboard"}>
                                        <FaHome></FaHome> User Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"reservation"}>
                                        <FaCalendarAlt></FaCalendarAlt>{" "}
                                        Reservation
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"myCart"}>
                                        <FaCartPlus></FaCartPlus> My cart
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"paymentHistory"}>
                                        <FaWallet></FaWallet> Payemnt History
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"addReviews"}>
                                        <FaCommentAlt></FaCommentAlt> Add Review
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"bookngs"}>
                                        {" "}
                                        <FaBook></FaBook> My bookings
                                    </NavLink>
                                </li>
                            </>
                        )}
                        <div className="divider "></div>
                        <li>
                            <NavLink to={"/"}></NavLink>
                        </li>
                        <li>
                            <NavLink to={"/menu"}>
                                <FaBars></FaBars> Menu
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/shop/salad"}>
                                <FaShoppingBag></FaShoppingBag> Shop{" "}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/contact"}>
                                <FaEnvelope></FaEnvelope> Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;
