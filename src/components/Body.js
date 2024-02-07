import RestaurantCard, { withPromotedTag } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState();

  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedTag(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.3007589&lng=85.82942589999999"
    );
    const res = await data.json();
    setStateVariable(res);
  };

  const setStateVariable = (res) => {
    res.data.cards.map((item) => {
      if (item.card.card.id === "top_brands_for_you") {
        setListOfRestaurants(
          item.card.card.gridElements.infoWithStyle.restaurants
        );
        setFilteredRestaurant(
          item.card.card.gridElements.infoWithStyle.restaurants
        );
      }
    });
  };

  const onlineStatus = useOnlineStatus();

  return (
    <div className="body bg-slate-100">
      <div className="filter max-w-[1496px] mx-auto">
        <div className="search-container">
          <input
            placeholder="Type to Search...."
            type="text"
            className="search-box m-4 p-2.5 border border-solid rounded-lg border-black text-black hover:transition-all focus:outline-none focus:ring focus:border-green-300"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              const filteredRestaurants = listOfRestaurants.filter(
                (restaurant) =>
                  restaurant.info.name
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase())
              );
              e.target.value.length === ""
                ? setFilteredRestaurant(listOfRestaurants)
                : setFilteredRestaurant(filteredRestaurants);
            }}
          />
          <button
            className="filter-btn px-4 py-2 rounded-lg bg-green-200 hover:bg-green-400 m-4"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (restaurant) => restaurant.info.avgRating > 4.0
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      <div className="res-container max-w-[1496px] mx-auto flex flex-wrap gap-3">
        {filteredRestaurant === undefined || filteredRestaurant.length === 0 ? (
          <Shimmer />
        ) : (
          filteredRestaurant.map((restaurant) => (
            <Link
              to={"/restaurants/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              {restaurant?.data?.promoted ? (
                <RestaurantCardPromoted resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
