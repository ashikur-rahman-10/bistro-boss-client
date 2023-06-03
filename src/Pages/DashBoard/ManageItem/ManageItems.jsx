import React from "react";
import UseMenu from "../../../Hooks/UseMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaPenFancy, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
    const { items, refetch } = UseMenu();
    const [axiosSecure] = useAxiosSecure();
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/menu/${id}`).then((data) => {
                    if (data.data.acknowledged) {
                        Swal.fire(
                            "Deleted!",
                            "Your file has been deleted.",
                            "success"
                        );
                        refetch();
                    }
                    // console.log(data.data);
                });
            }
        });
    };
    return (
        <div className="drawer-content bg-[#F3F3F3] w-full pb-20 px-2">
            <div>
                <SectionTitle
                    heading={"Hurry Up"}
                    subHeading={"Manage all item"}
                ></SectionTitle>
            </div>
            <div className="bg-white max-w-4xl mx-auto md:px-10">
                <h1 className="text-center text-2xl md:text-3xl font-medium py-10">
                    Total Items:{items.length}
                </h1>
                {/* For large Device */}
                <div className="overflow-x-auto w-full rounded-3xl hidden md:block">
                    <table className="table w-full  border ">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className="bg-[#D1A054] text-xs w-fit">
                                    #
                                </th>
                                <th className="bg-[#D1A054] text-xs w-fit">
                                    Item Image
                                </th>
                                <th className="bg-[#D1A054] text-xs w-fit">
                                    Item Name & Category
                                </th>
                                <th className="bg-[#D1A054] text-xs w-fit">
                                    Item Price
                                </th>
                                <th className="bg-[#D1A054] text-xs w-fit">
                                    Edit
                                </th>
                                <th className="bg-[#D1A054] text-xs w-fit">
                                    Delete
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item, index) => (
                                <tr key={item._id} className="">
                                    <td>
                                        <p>{index + 1}</p>
                                    </td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="font-bold text-xs w-[70px] lg:w-fit whitespace-pre-wrap">
                                            Name: {item.name}
                                        </p>
                                        <p className="text-xs text-[#737373] mt-2">
                                            Category: {item.category}
                                        </p>
                                    </td>
                                    <td>${item.price}</td>
                                    <th>
                                        <Link
                                            to={`/dashboard/edit/${item._id}`}
                                        >
                                            <button className="cursor-pointer hover:bg-[#D1A054] p-2 rounded-xl border border-[#D1A054] bg-[#D1A054] text-xl text-white ">
                                                <FaPenFancy></FaPenFancy>
                                            </button>
                                        </Link>
                                    </th>
                                    <th>
                                        <button
                                            onClick={() => {
                                                handleDelete(item._id);
                                            }}
                                            className="cursor-pointer hover:bg-red-300 p-2 rounded-xl border border-red-700 bg-red-100 text-xl text-red-700 "
                                        >
                                            <FaTrashAlt></FaTrashAlt>
                                        </button>
                                    </th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* For Mobile devices */}

                <div className="overflow-x-auto w-full md:hidden rounded-3xl">
                    <table className="table w-full  border ">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className="bg-[#D1A054] text-xs w-fit">
                                    #
                                </th>
                                <th className="bg-[#D1A054] text-xs w-fit">
                                    Item Info
                                </th>
                                <th className="bg-[#D1A054] text-xs w-fit">
                                    Item Price
                                </th>
                                <th className="bg-[#D1A054] text-xs w-fit">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item, index) => (
                                <tr key={item._id} className="">
                                    <td>
                                        <p>{index + 1}</p>
                                    </td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="font-bold text-xs w-[70px] lg:w-fit whitespace-pre-wrap">
                                            Name: {item.name}
                                        </p>
                                        <p className="text-xs text-[#737373] mt-2  w-[70px] lg:w-fit whitespace-pre-wrap">
                                            Category: {item.category}
                                        </p>
                                        <p className="text-xs  mt-2">
                                            ${item.price}
                                        </p>
                                    </td>
                                    <th className="flex items-center gap-3">
                                        <Link
                                            to={`/dashboard/edit/${item._id}`}
                                            className="cursor-pointer hover:bg-[#D1A054] p-2 rounded-xl border border-[#D1A054] bg-[#D1A054] text-xl text-white "
                                        >
                                            <FaPenFancy></FaPenFancy>
                                        </Link>

                                        <button
                                            onClick={() => {
                                                handleDelete(item._id);
                                            }}
                                            className="cursor-pointer hover:bg-red-300 p-2 rounded-xl border border-red-700 bg-red-100 text-xl text-red-700 "
                                        >
                                            <FaTrashAlt></FaTrashAlt>
                                        </button>
                                    </th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;
