import RestaurantCard from "./ResturantCard";
import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filteredList } from "../utils/Helper";
import useResturantsList from "../utils/useResturantsList";
import "../index.css";

const Body = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [restaurantList, filtredRestaurantList, setFiltredRestaurantList] =
    useResturantsList();

  console.log(restaurantList);

  return (
    <>
      <input
        type="text"
        className="search-input"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value.toLowerCase());
        }}
      />
      <button
        onClick={() => {
          console.log(restaurantList);
          setFiltredRestaurantList(filteredList(searchTerm, restaurantList));
        }}
      >
        search
      </button>
      <div className="restaurantList">
        {filtredRestaurantList?.length === 0 ? (
          <Shimmer />
        ) : (
          filtredRestaurantList?.map((config) => {
            console.log(config.data.name);
            return (
              <Link
                to={"/resturant/" + config?.data?.id}
                key={config?.data?.id}
              >
                <RestaurantCard {...config?.data} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
