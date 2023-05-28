import React from "react";
import serviceImg from "../../../assets/home/chef-service.jpg";

const ChefService = () => {
    return (
        <div className="max-w-7xl mt-20 bg-fixed bg-[url('https://github.com/ashikur-rahman-10/bistro-boss-client/blob/main/src/assets/home/chef-service.jpg?raw=true')] px-4 py-16 md:px-28 md:py-28 mx-auto">
            <div className="bg-white bg-opacity-90 p-4 md:p-16 ">
                <h1 className="md:text-5xl text-3xl text-center">
                    Bistro Boss
                </h1>
                <p className="text-center text-xs md:text-base pt-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus, libero accusamus laborum deserunt ratione
                    dolor officiis praesentium! Deserunt magni aperiam dolor
                    eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.
                </p>
            </div>
        </div>
    );
};

export default ChefService;
