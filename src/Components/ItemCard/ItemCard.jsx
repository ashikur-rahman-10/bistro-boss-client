import React from "react";
import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
    const { name, image, rating, recipe } = item;
    const truncatedRecipe =
        recipe.length > 70 ? recipe.slice(0, 60) + "..." : recipe;
    return (
        <div>
            <div className="card md:w-96 bg-base-100 shadow-xl">
                <figure>
                    <img src={image} alt={name} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className="">{truncatedRecipe}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;
