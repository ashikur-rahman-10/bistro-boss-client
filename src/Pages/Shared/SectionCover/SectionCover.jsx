import React from "react";
import { Parallax } from "react-parallax";

const SectionCover = ({ img, title, subText }) => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={img}
            bgImageAlt={title}
            strength={-200}
        >
            <div className="hero md:h-[600px] h-fit py-12 px-4 md:px-56 md:py-40 ">
                <div className="hero-overlay bg-opacity-20"></div>
                <div className="hero-content  bg-black bg-opacity-40 h-full  w-full text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 md:text-5xl text-3xl font-bold uppercase">
                            {title}
                        </h1>
                        <p className="mb-5">{subText}</p>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default SectionCover;
