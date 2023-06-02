import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
    const token = localStorage.getItem("access-token");
    const { data: users = [], refetch } = useQuery(["users"], async () => {
        const res = await fetch(" http://localhost:5000/users", {
            headers: {
                authorization: `bearer ${token}`,
            },
        });
        return res.json();
    });

    const handleAddAdmin = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "",
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Make Admin",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(` http://localhost:5000/users/admin/${id}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.acknowledged) {
                            refetch();
                            Swal.fire({
                                title: "Added to Admin Successful",
                                showConfirmButton: false,
                                timer: 1500,
                                icon: "success",
                                showClass: {
                                    popup: "animate__animated animate__fadeInDown",
                                },
                                hideClass: {
                                    popup: "animate__animated animate__fadeOutUp",
                                },
                            });
                        }
                    });
            }
        });
    };
    const handleDelete = (user) => {};
    return (
        <div className="drawer-content bg-[#F3F3F3] w-full">
            <Helmet>
                <title>Manage Users</title>
            </Helmet>
            <SectionTitle
                heading={"How Many?"}
                subHeading={"Manage all Users"}
            ></SectionTitle>
            <div className="md:my-20 px-1 md:px-10 md:pt-10 pt-2 pb-5 md:pb-10 bg-base-100  mx-auto w-fit md:w-full max-w-4xl rounded-2xl">
                <h1 className="text-2xl mb-5 text-center ">
                    Total Users:{users.length}
                </h1>
                <div className="hidden md:block">
                    <div className="overflow-x-auto rounded-2xl border-b">
                        <table className="table w-fit md:w-full">
                            <thead>
                                <tr className="">
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => (
                                    <tr key={user._id}>
                                        <th>{index + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            {user.role === "admin" ? (
                                                "Admin"
                                            ) : (
                                                <button
                                                    onClick={() => {
                                                        handleAddAdmin(
                                                            user._id
                                                        );
                                                    }}
                                                    className="cursor-pointer hover:bg-amber-300 p-2 rounded-xl border border-amber-700 bg-amber-100 text-xl text-amber-700 "
                                                >
                                                    <FaUserShield></FaUserShield>
                                                </button>
                                            )}
                                        </td>
                                        <td>
                                            <button
                                                disabled={user.role === "admin"}
                                                onClick={() => {
                                                    handleDelete(user);
                                                }}
                                                className="cursor-pointer hover:bg-red-300 p-2 rounded-xl border border-red-700 bg-red-100 text-xl text-red-700 "
                                            >
                                                <FaTrashAlt></FaTrashAlt>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* For Mobile Devices */}
                <div className="md:hidden">
                    <div className="rounded-2xl border-b ">
                        <table className="table">
                            <thead>
                                <tr className="">
                                    <th>#</th>
                                    <th>Name & Email</th>
                                    <th>Role</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => (
                                    <tr key={user._id}>
                                        <th>{index + 1}</th>
                                        <td className="font-bold text-xs">
                                            {user.name} <br />
                                            <p className=" w-36 overflow-x-auto ">
                                                {user.email}
                                            </p>
                                        </td>

                                        <td className="">
                                            {user.role === "admin" ? (
                                                "Admin"
                                            ) : (
                                                <button
                                                    onClick={() => {
                                                        handleAddAdmin(
                                                            user._id
                                                        );
                                                    }}
                                                    className="cursor-pointer hover:bg-amber-300 p-2 rounded-xl border border-amber-700 bg-amber-100 text-xl text-amber-700 "
                                                >
                                                    <FaUserShield></FaUserShield>
                                                </button>
                                            )}
                                        </td>
                                        <td className="font-bold text-xs w-[70px] lg:w-fit whitespace-pre-wrap">
                                            {" "}
                                            <button
                                                onClick={() => {
                                                    handleDelete(user);
                                                }}
                                                className="cursor-pointer hover:bg-red-300 p-2 rounded-xl border border-red-700 bg-red-100 text-xl text-red-700 "
                                            >
                                                <FaTrashAlt></FaTrashAlt>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;
