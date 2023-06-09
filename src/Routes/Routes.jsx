import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import OurMenu from "../Pages/Menu/OurMenu/OurMenu";
import OurShops from "../Pages/OurShops/OurShops/OurShops";
import Login from "../Pages/LoginOrRegister/Login";
import Register from "../Pages/LoginOrRegister/Register";
import LoginLayouts from "../Layouts/LoginLayouts";
import PrivateRoute from "./PrivateRoute";
import DashBoard from "../Layouts/DashBoard/DashBoard";
import MyCart from "../Pages/DashBoard/MyCart/MyCart";
import UserHome from "../Pages/DashBoard/UserHome/UserHome";
import AllUsers from "../Pages/DashBoard/AllUsers/AllUsers";
import AdminOnlyRoutes from "./AdminOnlyRoutes";
import NotFound from "../Pages/NotFound/NotFound";
import AddAnItem from "../Pages/DashBoard/AddAnItem/AddAnItem";
import ManageItems from "../Pages/DashBoard/ManageItem/ManageItems";
export const router = createBrowserRouter([
    {
        path: "/*",
        element: <NotFound></NotFound>,
    },
    {
        path: "/",
        element: <LoginLayouts></LoginLayouts>,
        children: [
            {
                path: "/",
                element: <Navigate to={"/home"}></Navigate>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },

            {
                path: "/register",
                element: <Register></Register>,
            },
        ],
    },
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/home",
                element: <Home></Home>,
            },
            {
                path: "/menu",
                element: <OurMenu></OurMenu>,
            },
            {
                path: "/shop/:category",
                element: <OurShops></OurShops>,
            },
        ],
    },
    {
        path: "/dashboard",
        element: (
            <PrivateRoute>
                {" "}
                <DashBoard></DashBoard>
            </PrivateRoute>
        ),
        children: [
            {
                path: "admin",
                element: <UserHome></UserHome>,
            },
            {
                path: "myCart",
                element: <MyCart></MyCart>,
            },
            {
                path: "allusers",
                element: (
                    <AdminOnlyRoutes>
                        {" "}
                        <AllUsers></AllUsers>
                    </AdminOnlyRoutes>
                ),
            },
            {
                path: "addItem",
                element: (
                    <AdminOnlyRoutes>
                        <AddAnItem></AddAnItem>
                    </AdminOnlyRoutes>
                ),
            },
            {
                path: "manageItems",
                element: (
                    <AdminOnlyRoutes>
                        <ManageItems></ManageItems>
                    </AdminOnlyRoutes>
                ),
            },
        ],
    },
]);
