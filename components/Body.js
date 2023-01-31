import RestaurantCard from "./ResturantCard";
// import { config } from "../constants";
import React, { useEffect, useState } from "react";

import Shimmer from "./Shimmer";

const Body = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [resturantList, setResturantList] = useState([]);
  const [filtredResturantList, setFiltredResturantList] = useState([]);

  useEffect(() => {
    RestaurantList();
  }, []);

  const RestaurantList = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.4402499&lng=80.5361341&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    setResturantList(json?.data?.cards[2]?.data?.data?.cards);
    setFiltredResturantList(json?.data?.cards[2]?.data?.data?.cards);
  };

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
          setFiltredResturantList(
            resturantList.filter((config) => {
              return config.data.name.toLowerCase().includes(searchTerm);
            })
          );
        }}
      >
        search
      </button>
      <div className="restaurantList">
        {filtredResturantList.length === 0 ? (
          <Shimmer />
        ) : (
          filtredResturantList.map((config) => {
            console.log(config.data.name);
            return <RestaurantCard {...config.data} key={config.data.id} />;
          })
        )}
      </div>
    </>
  );
};

export default Body;
