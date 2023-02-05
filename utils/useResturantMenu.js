import { useEffect, useState } from "react";

const useResturantMenu = (resturantId) => {
  // Make an API call
  const [resturant, setResturant] = useState(null);

  useEffect(() => {
    GetResturantMenu();
  }, []);

  const GetResturantMenu = async () => {
    const menu = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=17.450491&lng=78.366288&menuId=" +
        resturantId
    );
    const menuData = await menu.json();
    console.log(menuData);
    setResturant(menuData.data);
  };

  return resturant;
  // return the resturant menu
};

export default useResturantMenu;
