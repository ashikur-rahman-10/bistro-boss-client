import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Pagination, FreeMode } from "swiper";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Category = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <SectionTitle
                heading={"From 11:00am to 10:00pm"}
                subHeading={"ORDER ONLINE"}
            ></SectionTitle>
            <Swiper
                // slidesPerView={1}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    "@0.00": {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    "@0.75": {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    "@1.00": {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    "@1.50": {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <p className="text-3xl text-white font-medium absolute z-10 bottom-5 left-20 uppercase text-center">
                        Salad
                    </p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <p className="text-3xl text-white font-medium absolute z-10 bottom-5 left-20 uppercase text-center">
                        pizzas
                    </p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <p className="text-3xl text-white font-medium absolute z-10 bottom-5 left-20 uppercase text-center">
                        Soups{" "}
                    </p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <p className="text-3xl text-white font-medium absolute z-10 bottom-5 left-16 uppercase text-center">
                        Deserts
                    </p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <p className="text-3xl text-white font-medium absolute z-10 bottom-5 left-20 uppercase text-center">
                        Salad
                    </p>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;
