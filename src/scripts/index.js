import "../pages/index.css";
import getSortedArrayByGeoDistance from "../utils/getSortedArrayByGeoDistance.js";
import restaurantsData from "../utils/restaurants.json";
import galleryData from "../utils/gallery.json";

navigator.geolocation.getCurrentPosition((position) => {
  const restaurants = getSortedArrayByGeoDistance(
    restaurantsData.restaurants,
    position.coords
  );
});

const cardList = document.querySelector(".card__list");
const cardTemplate = document.querySelector("#card__template").content;

const renderCard = (cardData, cardContainer) => {
  const cardElement = getCardElement(cardData);
  cardContainer.prepend(cardElement);
};
const getCardElement = (data) => {
  // console.log(data);
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  cardImage.src = data.link;
  cardImage.alt = data.title;
  const cardTitle = cardElement.querySelector(".card__title");
  cardTitle.textContent = data.title;
  const cardSubtitle = cardElement.querySelector(".card__subtitle");
  cardSubtitle.textContent = data.subtitle;
  //   const cardButton = cardElement.querySelector(".card__button");
  return cardElement;
};
galleryData.gallery.forEach((cardObj) => {
  renderCard(cardObj, cardList);
});
