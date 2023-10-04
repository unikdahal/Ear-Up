import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (!resInfo) return <Shimmer />;

  const resDetails = resInfo?.cards?.[0]?.card?.card?.info;
  const { name, cuisines, costForTwo } = resDetails || {};

  const itemCards =
    resInfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card
      ?.card?.itemCards || [];

  const categories =
    resInfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <h3 className="font-bold text-lg">
        {cuisines && cuisines.length > 1 ? cuisines.join(", ") : cuisines} Rs{" "}
        {costForTwo / 100} for two
      </h3>

      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex}
          setShowIndex={() =>
            showIndex === index ? setShowIndex(null) : setShowIndex(index)
          }
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
