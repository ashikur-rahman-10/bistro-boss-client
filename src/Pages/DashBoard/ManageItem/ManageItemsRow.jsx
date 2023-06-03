import React from "react";
import { Link } from "react-router-dom";
import { FaTrash, FaTrashAlt } from "react-icons/fa";

const ManageItemsRow = ({ item, index, handleDelete }) => {
    const { _id, name, price, image } = item;

    return (
        <>
            <tr className="">
                <td>
                    <p>{index}</p>
                </td>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={image} />
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <p className="font-bold text-xs w-[70px] lg:w-fit whitespace-pre-wrap">
                        {name}
                    </p>
                </td>
                <td>${price}</td>
                <th>
                    <Link
                        to={`/dashboard/edit/${_id}`}
                        className="cursor-pointer hover:bg-red-300 p-2 rounded-xl border border-red-700 bg-red-100 text-xl text-red-700 "
                    >
                        Edit
                    </Link>
                </th>
                <th>
                    <button
                        onClick={() => {
                            handleDelete(_id);
                        }}
                        className="cursor-pointer hover:bg-red-300 p-2 rounded-xl border border-red-700 bg-red-100 text-xl text-red-700 "
                    >
                        <FaTrashAlt></FaTrashAlt>
                    </button>
                </th>
            </tr>
        </>
    );
};

export default ManageItemsRow;
