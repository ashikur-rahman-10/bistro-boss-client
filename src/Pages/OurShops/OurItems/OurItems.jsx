import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ItemCard from "../../../Components/ItemCard/ItemCard";
import { useParams } from "react-router-dom";
import UseMenu from "../../../Hooks/UseMenu";

const OurItems = () => {
    const categories = ["salad", "pizza", "soup", "desserts", "drinks"];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);

    const { items } = UseMenu();

    const offeredItems = items.filter((item) => item.category == "offered");
    const dessertItems = items.filter((item) => item.category == "dessert");
    const pizzaItems = items.filter((item) => item.category == "pizza");
    const saladItems = items.filter((item) => item.category == "salad");
    const soupsItems = items.filter((item) => item.category == "soup");
    const drinksItems = items.filter((item) => item.category == "drinks");

    return (
        <div className="max-w-7xl mx-auto md:px-4 px-4 py-10 md:py-20">
            <Tabs
                selectedIndex={tabIndex}
                onSelect={(index) => setTabIndex(index)}
            >
                <TabList>
                    <Tab>SALAD</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>SOUP</Tab>
                    <Tab>DESSERTS</Tab>
                    <Tab>DRINKS</Tab>
                </TabList>

                <TabPanel>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {saladItems.map((item) => (
                            <ItemCard key={item._id} item={item}></ItemCard>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {pizzaItems.map((item) => (
                            <ItemCard key={item._id} item={item}></ItemCard>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {soupsItems.map((item) => (
                            <ItemCard key={item._id} item={item}></ItemCard>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {dessertItems.map((item) => (
                            <ItemCard key={item._id} item={item}></ItemCard>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {drinksItems.map((item) => (
                            <ItemCard key={item._id} item={item}></ItemCard>
                        ))}
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default OurItems;
