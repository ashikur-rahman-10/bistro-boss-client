import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";

const AddAnItem = () => {
    const imageHostingUrl = `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_IMAGE_HOSTING_KEY
    }`;
    const { register, handleSubmit, reset } = useForm();
    const [axiosSecure] = useAxiosSecure();
    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append("image", data.image[0]);
        fetch(imageHostingUrl, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((imgResponse) => {
                if (imgResponse.success) {
                    const imgUrl = imgResponse.data.display_url;
                    const { price, name, category, recipe } = data;
                    const menuItem = {
                        name,
                        price: parseFloat(price),
                        category,
                        image: imgUrl,
                        recipe,
                    };
                    console.log(menuItem);
                    axiosSecure.post("/menu", menuItem).then((data) => {
                        console.log(data.data);
                        if (data.data.acknowledged) {
                            Swal.fire({
                                icon: "success",
                                title: "Item Added Successfully",
                                showConfirmButton: false,
                                timer: 1500,
                            });
                            reset();
                        }
                    });
                }
            });
        console.log(formData);
    };

    return (
        <div className="drawer-content px-2 pb-20">
            <div>
                <SectionTitle
                    heading={"Whats New"}
                    subHeading={"Add an item"}
                ></SectionTitle>
            </div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-[#E8E8E8] md:p-10 p-6 max-w-4xl md:mx-auto  rounded-lg md:rounded-none shadow-xl  space-y-6"
            >
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold">
                            Recipe name*
                        </span>
                    </label>
                    <input
                        required
                        type="text"
                        name="name"
                        placeholder="Recipe name"
                        {...register("name", { required: true })}
                        className="input input-bordered w-full "
                    />
                </div>
                <div className="md:flex gap-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">
                                Category*
                            </span>
                        </label>
                        <select
                            required
                            {...register("category", { required: true })}
                            className="select select-bordered"
                        >
                            <option value={""}>Pick one Category</option>
                            <option value={"salad"}>Salad</option>
                            <option value={"pizza"}>Pizza</option>
                            <option value={"soups"}>Soups</option>
                            <option value={"desserts"}>Dessetrs</option>
                            <option value={"drinks"}>Drinks</option>
                        </select>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">
                                Price
                            </span>
                        </label>
                        <input
                            required
                            type="text"
                            name="name"
                            placeholder="Price"
                            {...register("price", { required: true })}
                            className="input input-bordered w-full "
                        />
                    </div>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold">
                            Recipe Details*
                        </span>
                    </label>
                    <textarea
                        className="textarea textarea-bordered h-24"
                        placeholder="Recipe Details"
                        {...register("recipe", { required: true })}
                    ></textarea>
                </div>
                <div className="form-control w-full">
                    <input
                        required
                        type="file"
                        {...register("image", { required: true })}
                        className="file-input file-input-bordered w-full max-w-xs"
                    />
                </div>

                <button
                    type="submit"
                    className="flex gap-1 items-center bg-[#835D23] text-white font-semibold px-4 rounded-lg py-2 hover:bg-[#835d23b9]"
                >
                    Add Item
                    <span>
                        <FaUtensils></FaUtensils>
                    </span>
                </button>
            </form>
        </div>
    );
};

export default AddAnItem;
