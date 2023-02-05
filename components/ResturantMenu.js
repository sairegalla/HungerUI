import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cloudinary_URL } from "../constants";
import useResturantMenu from "../utils/useResturantMenu";

function RestaurantMenu() {
  const { id } = useParams();

  const resturant = useResturantMenu(id);

  return (
    resturant && (
      <div className="resturantMenu">
        <div>
          <h1>Name:{resturant?.name}</h1>
          <img src={cloudinary_URL + resturant?.cloudinaryImageId} />
        </div>
        <div>
          <ul>
            {Object.values(resturant?.menu?.items).map((item) => (
              <li key={item?.id}>{item?.name}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  );
}

export default RestaurantMenu;
