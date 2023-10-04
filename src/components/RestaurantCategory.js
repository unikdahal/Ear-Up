import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="w-6/12 bg-gray-50 shadow-lg mx-auto my-8 p-4 rounded-lg transition-all hover:shadow-xl">
      {/* Header */}
      <div className="flex justify-between">
        <span
          className="font-semibold text-lg cursor-pointer"
          onClick={handleClick}
        >
          {data?.title} [{data?.itemCards?.length}]
        </span>
        <span>⬇️</span>
      </div>
      {showItems && <ItemList items={data?.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
