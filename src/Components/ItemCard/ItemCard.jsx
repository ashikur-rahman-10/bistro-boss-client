import React, { useContext } from "react";
import { ToastBar, Toaster, toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import UseCart from "../../Hooks/UseCart";

const ItemCard = ({ item }) => {
    const { name, image, rating, recipe, price, _id } = item;
    const { user } = useContext(AuthContext);
    const [cart, refetch] = UseCart();
    const navigate = useNavigate();
    const location = useLocation();
    const truncatedRecipe =
        recipe.length > 70 ? recipe.slice(0, 60) + "..." : recipe;
    const navigateToLogin = () => {
        navigate("/login", { state: location });
    };
    const handleAddToCart = (item) => {
        if (user) {
            const cartItem = {
                foodId: _id,
                name,
                image,
                price,
                email: user.email,
            };
            fetch("https://bistro-boss-server-iota.vercel.app/carts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(cartItem),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.acknowledged) {
                        toast.success("Added to cart");
                        refetch();
                    }
                });
        } else {
            toast.custom(
                <div className="bg-base-100 w-60 h-40 flex flex-col border shadow-xl justify-center items-center rounded-xl">
                    <p className=" font-semibold text-red-500">
                        Please Login to add Cart
                    </p>
                    <button
                        className="mt-5 cursor-pointer hover:bg-slate-200 text-info outline outline-info px-4 py-1 rounded-lg "
                        onClick={navigateToLogin}
                    >
                        Login
                    </button>
                </div>
            );
        }
    };

    return (
        <div>
            <div className="card md:w-96 bg-base-100 shadow-xl">
                <figure>
                    <img src={image} alt={name} />
                    <span className="absolute top-3 right-6 bg-slate-800 px-2 py-1 text-white rounded-lg font-medium">
                        ${price}
                    </span>
                </figure>
                <div className="card-body  flex flex-col items-center justify-center">
                    <h2 className="card-title">{name}</h2>
                    <p className="">{truncatedRecipe}</p>
                    <div className="card-actions justify-end">
                        <button
                            onClick={() => {
                                handleAddToCart(item);
                            }}
                            className="cursor-pointer px-4 mt-2 py-2 text-lg font-medium rounded-lg hover:bg-[#111827] text-[#BB8506] bg-[#f3f3f3]  border-b-4 border-[#BB8506]  "
                        >
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default ItemCard;
