import React, { useEffect, useRef, useState } from "react";
import Banner from "../../assets/others/authentication.png";
import loginPoster from "../../assets/others/authentication2.png";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

const Register = () => {
    // Handle Submit login
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    };

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
                <form onSubmit={handleSubmit} className="md:w-1/2 p-4 ">
                    <div className=" max-w-md ">
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
                                    name="name"
                                    placeholder="name"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="email"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                />
                                <label className="label">
                                    <a
                                        href="#"
                                        className="label-text-alt link link-hover"
                                    >
                                        Forgot password?
                                    </a>
                                </label>
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
                                    <FaGoogle className="p-2 cursor-pointer text-4xl border-2 border-black rounded-full hover:text-blue-600 hover:border-blue-600"></FaGoogle>
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
