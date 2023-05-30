import React from "react";
import { Helmet } from "react-helmet-async";
import UseCart from "../../../Hooks/UseCart";
import ItemRow from "../../../Components/ItemRow/ItemRow";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Toaster, toast } from "react-hot-toast";
import Swal from "sweetalert2";

const MyCart = () => {
    const [cart, refetch] = UseCart();
    const total = cart.reduce((sum, item) => item.price + sum, 0);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(
                    `https://bistro-boss-server-iota.vercel.app/carts/${id}`,
                    {
                        method: "DELETE",
                    }
                )
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                "Deleted!",
                                "Your file has been deleted.",
                                "success"
                            );
                            // toast.success("Item Removed from Cart");
                        }
                    });
            }
        });
    };
    return (
        <div className="bg-[#F3F3F3] drawer-content">
            <Helmet>
                <title>My Cart</title>
            </Helmet>

            <SectionTitle
                heading={"My Cart"}
                subHeading={"Wanna add more?"}
            ></SectionTitle>

            <div className="md:my-20 px-1 md:px-10 md:pt-10 pt-2 pb-5 bg-base-100  mx-auto w-fit lg:w-full max-w-4xl">
                <div className="flex items-center justify-between px-2 my-10">
                    <h2 className="md:text-2xl text-base font-medium">
                        Total Item in cart: {cart.length}
                    </h2>
                    <h2 className="md:text-2xl text-base font-medium">
                        Total Price: ${total}
                    </h2>
                    <button className="bg-[#D1A054] px-3 py-1 rounded-lg text-white hover:bg-[#785726]">
                        Pay
                    </button>
                </div>
                <div>
                    <div className="overflow-x-auto w-full rounded-3xl">
                        <table className="table w-full  border ">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th className="bg-[#D1A054] text-xs w-fit">
                                        Item Image
                                    </th>
                                    <th className="bg-[#D1A054] text-xs w-fit">
                                        Item Name
                                    </th>
                                    <th className="bg-[#D1A054] text-xs w-fit">
                                        Item Price
                                    </th>
                                    <th className="bg-[#D1A054] text-xs w-fit">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((item) => (
                                    <ItemRow
                                        key={item._id}
                                        item={item}
                                        handleDelete={handleDelete}
                                    ></ItemRow>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default MyCart;
