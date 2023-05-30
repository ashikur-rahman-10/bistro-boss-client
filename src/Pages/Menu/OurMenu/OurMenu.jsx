import React from "react";
import PageCover from "../../Shared/PageCover/PageCover";
import coverBanner from "../../../assets/menu/banner3.jpg";

import CategoriesFoods from "../CategoriesFoods/CategoriesFoods";
import { Helmet } from "react-helmet-async";
import UseMenu from "../../../Hooks/UseMenu";
import { TailSpin } from "react-loader-spinner";

const OurMenu = () => {
    const { loading } = UseMenu();

    if (loading) {
        return (
            <div className="bg-white h-screen w-full flex justify-center items-center z-40">
                <TailSpin
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            </div>
        );
    }
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
    return (
        <div>
            <Helmet>
                <title>Bistro / Menu</title>{" "}
            </Helmet>
            <PageCover
                img={coverBanner}
                title={"Our menu"}
                subText={"Would you like to try a dish?"}
            ></PageCover>
            <CategoriesFoods></CategoriesFoods>
        </div>
    );
};

export default OurMenu;
