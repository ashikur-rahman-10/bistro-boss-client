import React from "react";

const MenuItem = ({ item }) => {
    const { image, name, price, recipe } = item;

    return (
        <div className="flex gap-3 text-[#737373]">
            <img
                className="w-32 h-28"
                style={{ borderRadius: "0 200px 200px 200px" }}
                src={image}
                alt=""
            />
            <div>
                <p className="uppercase text-xl text-black">{name}</p>
                <p>{recipe}</p>
            </div>
            <p className="text-[#BB8506]">{price}</p>
        </div>
    );
};

export default MenuItem;
