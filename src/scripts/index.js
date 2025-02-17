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
const cardTemplate = document.querySelector("#card-template-horizontal").content;

const renderCard = (cardData, cardContainer) => {
  const cardElement = horizontalCardElement(cardData);
  cardContainer.prepend(cardElement);
};
const horizontalCardElement = (data) => {
  // console.log(data);
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  cardImage.src = data.link;
  cardImage.alt = data.title;
  const cardTitle = cardElement.querySelector(".card__title");
  cardTitle.textContent = data.title;
  const cardDescription = cardElement.querySelector(".card__description");
  cardDescription.textContent = data.description;
    const cardButton = cardElement.querySelector(".card__button");
  return cardElement;
};
galleryData.gallery.forEach((cardObj) => {
  renderCard(cardObj, cardList);
});
