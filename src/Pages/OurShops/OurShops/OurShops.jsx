import React from "react";
import { Helmet } from "react-helmet-async";
import PageCover from "../../Shared/PageCover/PageCover";
import shopsCover from "../../../assets/shop/banner2.jpg";
import OurItems from "../OurItems/OurItems";
import UseMenu from "../../../Hooks/UseMenu";
import { TailSpin } from "react-loader-spinner";

const OurShops = () => {
    const { items, loading } = UseMenu();

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
                <title>Bisto / Shops</title>
            </Helmet>
            <PageCover
                img={shopsCover}
                title={"Our Shops"}
                subText={"Would you like to order a dish?"}
            ></PageCover>
            <OurItems></OurItems>
        </div>
    );
};

export default OurShops;
