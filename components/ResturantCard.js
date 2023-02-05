import { cloudinary_URL } from "../constants";
import "../index.css";

const RestaurantCard = ({ name, cloudinaryImageId, cuisines, avgRating }) => {
  return (
    <div className="resturantCard">
      <img src={cloudinary_URL + cloudinaryImageId} />
      <h4>Name: {name}</h4>
      <h5>{cuisines?.join(", ")}</h5>
      <h6>Rating : {avgRating}</h6>
    </div>
  );
};

export default RestaurantCard;
