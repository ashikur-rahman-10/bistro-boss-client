import React from "react";
import { Parallax } from "react-parallax";

const PageCover = ({ img, title, subText }) => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={img}
            bgImageAlt={title}
            strength={-200}
        >
            <div className="hero md:h-[710px] h-fit pt-28 pb-12 md:px-72 md:pt-52 md:pb-28 ">
                <div className="hero-overlay bg-opacity-10"></div>
                <div className="hero-content  bg-black bg-opacity-40 h-full  w-full text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 md:text-7xl text-3xl font-bold uppercase">
                            {title}
                        </h1>
                        <p className="mb-5 md:text-2xl text-lg uppercase font-semibold">
                            {subText}
                        </p>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default PageCover;
