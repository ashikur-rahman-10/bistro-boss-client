import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="flex w-full text-xs lg:text-lg justify-center items-center flex-col my-12">
            <p className="text-[#D99904] text-center">--- {heading} ---</p>
            <h2 className="text-center text-2xl lg:text-4xl border-y-2 py-2 mt-2 w-fit">
                {subHeading}
            </h2>
        </div>
    );
};

export default SectionTitle;
