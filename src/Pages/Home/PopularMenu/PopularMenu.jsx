import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("menu.json")
            .then((res) => res.json())
            .then((data) => {
                const popularItems = data.filter(
                    (item) => item.category == "popular"
                );
                setItems(popularItems);
            });
    }, []);
    return (
        <div className="max-w-7xl mx-auto py-10 lg:py-16">
            <SectionTitle
                heading={"Check It Out"}
                subHeading={"From Our menu"}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10 px-4">
                {items.map((item) => (
                    <MenuItem key={item._id} item={item}></MenuItem>
                ))}
            </div>
            <div className="flex justify-center mt-10">
                <button className=" uppercase border-b-2 font-semibold border-black px-4 rounded-2xl">
                    View full menu
                </button>
            </div>
        </div>
    );
};

export default PopularMenu;
