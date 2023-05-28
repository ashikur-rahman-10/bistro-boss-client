import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import UseMenu from "../../../Hooks/UseMenu";
import MenuCategrorySection from "../MenuCategorySection/MenuCategrorySection";

import dessrtsCover from "../../../assets/menu/dessert-bg.jpeg";
import pizzasCover from "../../../assets/menu/pizza-bg.jpg";
import SaladCover from "../../../assets/menu/salad-bg.jpg";
import sopusCover from "../../../assets/menu/soup-bg.jpg";
import { TailSpin } from "react-loader-spinner";

const CategoriesFoods = () => {
    const { items } = UseMenu();

    const offeredItems = items.filter((item) => item.category == "offered");
    const dessertItems = items.filter((item) => item.category == "dessert");
    const pizzaItems = items.filter((item) => item.category == "pizza");
    const saladItems = items.filter((item) => item.category == "salad");
    const soupsItems = items.filter((item) => item.category == "soup");

    return (
        <div className="max-w-7xl px-4 mx-auto">
            {/* Offered Section */}
            <SectionTitle
                heading={"Dont Miss"}
                subHeading={"TODAY'S OFFER"}
            ></SectionTitle>
            <MenuCategrorySection items={offeredItems}></MenuCategrorySection>

            {/* Desserts Items */}
            <MenuCategrorySection
                items={dessertItems}
                banner={dessrtsCover}
                title={"desserts"}
                subText={
                    "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                }
            ></MenuCategrorySection>

            {/* Salad Items */}
            <MenuCategrorySection
                items={saladItems}
                banner={SaladCover}
                title={"salad"}
                subText={
                    "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                }
            ></MenuCategrorySection>

            {/* Pizza Items */}
            <MenuCategrorySection
                items={pizzaItems}
                banner={pizzasCover}
                title={"pizza"}
                subText={
                    "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                }
            ></MenuCategrorySection>

            {/* Soups Items */}
            <MenuCategrorySection
                items={soupsItems}
                banner={sopusCover}
                title={"soupes"}
                subText={
                    "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                }
            ></MenuCategrorySection>
        </div>
    );
};

export default CategoriesFoods;
