import { RES_URL } from "../utilities/constants";

const RestaurantCards = ({ resdata }) => {
  return (
    <div className="restaurant-card" id={`res-${resdata.id}`}>
      <img
        alt="restaurant logo"
        src={RES_URL + resdata.cloudinaryImageId}
        className="restaurant-image"
      />
      <h3 className="restaurant-name">{resdata.name}</h3>
      <h5 className="restaurant-cuisines">{resdata.cuisines?.join(", ")}</h5>
      <h5 className="restaurant-rating">★ {resdata.avgRating}</h5>
      <h6 className="restaurant-area">{resdata.areaName}</h6>
       <h6 className="restaurant-area">{resdata.costForTwo}</h6>
    </div>
  );
};

export default RestaurantCards;
