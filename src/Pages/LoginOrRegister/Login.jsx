import React, { useEffect, useRef, useState } from "react";
import Banner from "../../assets/others/authentication.png";
import loginPoster from "../../assets/others/authentication2.png";
import { Helmet } from "react-helmet-async";
import {
    loadCaptchaEnginge,
    LoadCanvasTemplate,
    validateCaptcha,
} from "react-simple-captcha";
import { Toaster, toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
    const [disabled, setDisabled] = useState(true);
    const capchaRef = useRef(null);

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const handleCapcha = () => {
        console.log(capchaRef.current.value);
        if (validateCaptcha(capchaRef.current.value) === true) {
            setDisabled(false);
        } else {
            toast.error("The Captcha is not matched try again!");
            setDisabled(true);
        }
    };

    // Handle Submit login
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
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
            <div className="flex  flex-col-reverse  md:flex-row  shadow-2xl  w-full h-full py-12 items-center justify-center  gap-10">
                <div className="md:w-1/2  ">
                    <img className="w-full" src={loginPoster} alt="" />
                </div>
                <form onSubmit={handleSubmit} className="md:w-1/2 p-4 ">
                    <div className=" max-w-md ">
                        <h1 className="text-center font-semibold text-2xl md:text-4xl py-7">
                            Login
                        </h1>
                        <div className="">
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
                            <div className="form-control ">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input
                                    onBlur={handleCapcha}
                                    type="text"
                                    ref={capchaRef}
                                    name="capcha"
                                    placeholder="type text avobe"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control mt-6">
                                <button
                                    type="submit"
                                    disabled={disabled}
                                    className="btn btn-primary w-full bg-[#DBB984] hover:bg-[#eab560] border-none"
                                >
                                    Login
                                </button>
                            </div>
                            <div className="w-full flex justify-center my-3 text-[#D1A054] font-semibold">
                                <Link to={"/register"}>
                                    <small className="hover:underline">
                                        New here? Create a New Account
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
            <Toaster></Toaster>
        </div>
    );
};

export default Login;
