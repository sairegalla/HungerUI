import { useState, useEffect } from "react";

const useResturantsList = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFiltredRestaurantList] = useState([]);

  useEffect(() => {
    getResturantList();
  }, []);

  async function getResturantList() {
    const list = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.450491&lng=78.366288&page_type=DESKTOP_WEB_LISTING"
    );
    const resturantListObject = await list.json();

    console.log(resturantListObject);

    setRestaurantList(resturantListObject?.data?.cards[2]?.data?.data?.cards);
    setFiltredRestaurantList(
      resturantListObject?.data?.cards[2]?.data?.data?.cards
    );
  }

  console.log(restaurantList);

  return [restaurantList, filteredRestaurantList, setFiltredRestaurantList];
};

export default useResturantsList;
