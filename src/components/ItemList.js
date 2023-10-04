import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="m-2 p-4 border border-gray-300 rounded-lg flex flex-row items-center justify-between transition-all hover:shadow-md"
        >
          <div className="flex flex-col w-9/12">
            <span className="text-xl font-semibold">
              {item?.card?.info?.name}
            </span>
            <span className="text-lg">
              ₹{" "}
              {(
                item?.card?.info?.price / 100 ||
                item?.card?.info?.defaultPrice / 100
              ).toFixed(2)}
            </span>
            <p className="text-sm text-gray-600">
              {item?.card?.info?.description}
            </p>
          </div>

          <div className="w-3/12 h-40 relative">
            <img
              src={CDN_URL + item?.card?.info?.imageId}
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />

            <button
              className="absolute top-0 right-0 m-2 p-2 rounded-full bg-yellow-200 text-red-400 hover:bg-yellow-400 hover:text-red-500 transition-all"
              onClick={() => handleAddItem(item)}
            >
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
