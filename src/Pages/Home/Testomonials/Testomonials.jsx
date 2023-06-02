import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import "swiper/css/navigation";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaQuoteLeft } from "react-icons/fa";

import { Pagination, Navigation } from "swiper";

const Testomonials = () => {
    const [reviews, setRivews] = useState([]);
    useEffect(() => {
        fetch(" http://localhost:5000/reviews")
            .then((res) => res.json())
            .then((data) => setRivews(data));
    }, []);
    return (
        <div className="max-w-7xl px-4 md:px-0 mx-auto lg:mb-10">
            <SectionTitle
                heading={"What Our Clients Say"}
                subHeading={"testomonials"}
            ></SectionTitle>
            <Swiper
                pagination={{
                    type: "progressbar",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper my-20"
            >
                {reviews.map((review) => (
                    <SwiperSlide key={review._id}>
                        <div className="lg:pt-20 pt-10 px-10 md:px-44 text-center flex flex-col justify-center items-center w-full">
                            <FaQuoteLeft className="text-8xl mb-8"></FaQuoteLeft>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p className="text-[#444444] py-6">
                                {review.details}{" "}
                            </p>
                            <p className="text-2xl text-amber-600">
                                {review.name}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Testomonials;
