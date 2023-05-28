import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImages from "../../../assets/home/featured.jpg";
import "./FeaturedItem.css";
const FeaturedItem = () => {
    return (
        <div className="featured text-white bg-fixed  my-12">
            <div className="bg-black  pt-10  bg-opacity-40">
                {" "}
                <SectionTitle
                    subHeading={"Featured Items"}
                    heading={"Cheak It Out"}
                >
                    {" "}
                </SectionTitle>
                <div className="md:flex justify-center items-center md:pb-20 pt-8 md:px-36 px-4 pb-20">
                    <div>
                        <img
                            className="rounded-2xl"
                            src={featuredImages}
                            alt=""
                        />
                    </div>
                    <div className="text-white md:pl-20 space-y-4">
                        <p className="text-lg">March 20, 2023</p>
                        <p className="text-lg">WHERE CAN I GET SOME?</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Error voluptate facere, deserunt dolores
                            maiores quod nobis quas quasi. Eaque repellat
                            recusandae ad laudantium tempore consequatur
                            consequuntur omnis ullam maxime tenetur.
                        </p>
                        <div className="">
                            <button className=" uppercase border-b-2 font-semibold border-white hover:bg-black py-2 hover:border-2  text-white px-4 rounded-2xl">
                                Read More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedItem;
