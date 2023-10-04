import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, cuisines, avgRating, sla } = resData.info;
  const { deliveryTime } = sla;

  return (
    <div className="relative bg-white rounded-lg overflow-hidden m-4 w-[300px] h-[500px] hover:shadow-lg hover:scale-105 transition-transform duration-300">
      <img
        src={CDN_URL + resData.info.cloudinaryImageId}
        alt=""
        className="rounded-t-lg h-[250px] w-full object-cover"
      />
      <div className="p-4">
        
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <div className="flex justify-between items-center mb-2">
          <p className="text-sm text-gray-600">{cuisines.slice(0, 3).join(", ")}</p>
          <div className="flex items-center">
            <span className="text-yellow-500 text-xl" role="img" aria-label="Star">
              ⭐️
            </span>
            <span className="text-gray-700">{avgRating}</span>
          </div>
        </div>
        <p className="text-sm text-gray-600 flex items-center">
          <span className="mr-1" role="img" aria-label="Clock">
            ⏰
          </span> 
          Delivery Time: {deliveryTime} min
        </p>
      </div>
    </div>
  );
};

export const withPromotedTag = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
