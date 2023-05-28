import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import UseMenu from "../../../Hooks/UseMenu";

const PopularMenu = () => {
    const { items } = UseMenu();
    const popularItems = items.filter((item) => item.category == "popular");
    return (
        <div className="max-w-7xl mx-auto py-10 lg:py-16">
            <SectionTitle
                heading={"Check It Out"}
                subHeading={"From Our menu"}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10 px-4">
                {popularItems.map((item) => (
                    <MenuItem key={item._id} item={item}></MenuItem>
                ))}
            </div>
            <div className="flex justify-center mt-10">
                <button className=" uppercase border-b-2 font-semibold border-black px-4 rounded-2xl">
                    View full menu
                </button>
            </div>
            <div>
                <p className="bg-black text-white md:p-24 px-4 py-16 font-semibold text-2xl w-full mt-16 text-center md:text-5xl">
                    Call Us: +88 0192345678910
                </p>
            </div>
        </div>
    );
};

export default PopularMenu;
