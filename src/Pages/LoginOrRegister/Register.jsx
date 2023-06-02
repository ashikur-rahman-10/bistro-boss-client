import React, { useContext, useEffect, useRef, useState } from "react";
import Banner from "../../assets/others/authentication.png";
import loginPoster from "../../assets/others/authentication2.png";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
    const { user, createUser, updateUser, googleLogin, logOut } =
        useContext(AuthContext);
    const navigate = useNavigate();
    // Handle Submit login
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = ({ name, email, password }) => {
        console.log(name, email, password);
        createUser(email, password)
            .then((result) => {
                const user = result.user;
                updateUser(name)
                    .then((result) => {
                        const savedUser = { name, email };
                        fetch(" http://localhost:5000/users", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(savedUser),
                        })
                            .then((res) => res.json())
                            .then((data) => {
                                if (data.acknowledged) {
                                    Swal.fire({
                                        icon: "success",
                                        title: "Login User Successful",
                                        showConfirmButton: false,
                                        timer: 1500,
                                    });
                                }
                            });
                        navigate("/login");
                    })
                    .catch((error) => {
                        console.log(error.message);
                    });

                logOut()
                    .then((result) => {})
                    .catch((error) => {});
            })
            .catch((error) => {
                console.log(error.message);
            });
    };
    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                const loggedUser = result.user;
                Swal.fire({
                    icon: "success",
                    title: "Login User Successful",
                    showConfirmButton: false,
                    timer: 1500,
                });
                const savedUser = {
                    name: loggedUser.displayName,
                    email: loggedUser.email,
                };

                fetch(" http://localhost:5000/users", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(savedUser),
                })
                    .then((res) => res.json())
                    .then((data) => {});
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
            });
    };
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });

    return (
        <div
            style={{ backgroundImage: `url(${Banner})` }}
            className="w-full md:px-20 py-20 px-4 min-h-screen  bg-[url('../../assets/menu/menu-bg.png')] flex flex-col justify-center items-center"
        >
            <Helmet>
                <title>Bistro / Login</title>
            </Helmet>
            <div className="flex  flex-col-reverse  md:flex-row-reverse  shadow-2xl  w-full h-full pb-12 md:py-12 items-center justify-center  gap-10">
                <div className="md:w-1/2  ">
                    <img className="w-full" src={loginPoster} alt="" />
                </div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="md:w-1/2 p-4 md:pl-20 "
                >
                    <div className=" max-w-md min-w-[320px] ">
                        <h1 className="text-center font-semibold text-2xl md:text-4xl py-7">
                            Sign Up
                        </h1>
                        <div className="">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    {...register("name", { required: true })}
                                    name="name"
                                    placeholder="name"
                                    className="input input-bordered"
                                />
                                {errors.name && (
                                    <span className="text-xs text-red-600 mt-3">
                                        Name is required
                                    </span>
                                )}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    {...register("email", { required: true })}
                                    placeholder="email"
                                    className="input input-bordered"
                                />
                                {errors.email && (
                                    <span className="text-xs text-red-600 mt-3">
                                        Email is required
                                    </span>
                                )}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    {...register("password", {
                                        pattern:
                                            /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{6,}/,
                                        minLength: 6,
                                        required: true,
                                    })}
                                    placeholder="password"
                                    className="input input-bordered"
                                />
                                {(errors.password?.type === "pattern" ||
                                    errors.password?.type === "minLength") && (
                                    <span className="text-xs text-red-600 mt-3">
                                        Password should have 1 uppercase, 1
                                        lowercase, 1 digit, and 1 symbol &
                                        minimum 6 characters.
                                    </span>
                                )}
                            </div>

                            <div className="form-control mt-6">
                                <button
                                    type="submit"
                                    className="btn btn-primary w-full bg-[#DBB984] hover:bg-[#eab560] border-none"
                                >
                                    Sign Up
                                </button>
                            </div>
                            <div className="w-full flex justify-center my-3 text-[#D1A054] font-semibold">
                                <Link to={"/login"}>
                                    <small className="hover:underline">
                                        Already registered? Go to log in
                                    </small>
                                </Link>
                            </div>
                            <div className="flex flex-col items-center">
                                <small className="text-center">
                                    Or sign in with
                                </small>
                                <div className="my-3 flex gap-4">
                                    <FaFacebook className="p-2 cursor-pointer text-4xl border-2 border-black rounded-full hover:text-blue-600 hover:border-blue-600"></FaFacebook>
                                    <FaGoogle
                                        onClick={handleGoogleLogin}
                                        className="p-2 cursor-pointer text-4xl border-2 border-black rounded-full hover:text-blue-600 hover:border-blue-600"
                                    ></FaGoogle>
                                    <FaGithub className="p-2 cursor-pointer text-4xl border-2 border-black rounded-full hover:text-blue-600 hover:border-blue-600"></FaGithub>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
