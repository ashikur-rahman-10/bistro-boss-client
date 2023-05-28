import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import FeaturedItem from "../FeaturedItem/FeaturedItem";
import Testomonials from "../Testomonials/Testomonials";
import ChefService from "../ChefService/ChefService";
import { Helmet } from "react-helmet-async";

const Home = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
    return (
        <div>
            <Helmet>
                <title>Bistro / Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <ChefService></ChefService>
            <PopularMenu></PopularMenu>
            <FeaturedItem></FeaturedItem>
            <Testomonials></Testomonials>
        </div>
    );
};

export default Home;
