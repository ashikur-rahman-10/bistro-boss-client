import React from "react";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import SectionCover from "../../Shared/SectionCover/SectionCover";
import { Link } from "react-router-dom";

const MenuCategrorySection = ({ items, banner, title, subText }) => {
    return (
        <div className="pb-11">
            {banner && (
                <SectionCover
                    img={banner}
                    title={title}
                    subText={subText}
                ></SectionCover>
            )}

            <div className="grid md:grid-cols-2 gap-10 mt-24">
                {items.map((item) => (
                    <MenuItem key={item._id} item={item}></MenuItem>
                ))}
            </div>

            <div className="w-full flex justify-center my-10">
                <Link to={`/shop/${title}`}>
                    <button className=" uppercase border-b-4 font-semibold border-black hover:bg-black py-2 hover:border-2 hover:text-white  text-black px-4 rounded-2xl">
                        ORDER YOUR FAVOURITE FOOD
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategrorySection;
