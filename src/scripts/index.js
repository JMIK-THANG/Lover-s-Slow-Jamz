import "../pages/index.css";
import getSortedArrayByGeoDistance from "../utils/getSortedArrayByGeoDistance.js";
import restaurantsData from "../utils/restaurants.json";

navigator.geolocation.getCurrentPosition((position) => {
  const restaurants = getSortedArrayByGeoDistance(
    restaurantsData.restaurants,
    position.coords
  );
});
