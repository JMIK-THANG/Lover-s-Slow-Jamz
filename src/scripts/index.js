import "../pages/index.css";
import getSortedArrayByGeoDistance from "../utils/getSortedArrayByGeoDistance.js";
import restaurantsData from "../utils/restaurants.json";
import galleryData from "../utils/gallery.json";

navigator.geolocation.getCurrentPosition((position) => {
  const restaurants = getSortedArrayByGeoDistance(
    restaurantsData.restaurants,
    position.coords
  );
  console.log(restaurants);
});

const cardList = document.querySelector(".card__list");
const cardTemplate = document.querySelector(
  "#card-template-horizontal"
).content;
const verticleCardTemplate = document.querySelector(
  "#card-template-verticle"
).content;

const popupPreviewImage = document.querySelector(".popup");
const previewImage = document.querySelector(".popup__image");
const previewCaption = document.querySelector(".popup__caption");
const closeButton = document.querySelector(".popup__close");

let currentLayout = "horizontal";

const renderCard = (cardData, cardContainer) => {
  cardContainer.innerHTML = "";
  cardData.forEach((cardObj) => {
    let cardElement;
    if (currentLayout === "horizontal") {
      cardElement = horizontalCardElement(cardObj);
    } else {
      cardElement = verticleCardElement(cardObj);
    }
    cardContainer.prepend(cardElement);
  });
};

const openModal = (modal) => {
  modal.classList.add("popup_is-opened");
  modal.addEventListener("keyup", handleEscape);
};

const closeModal = (modal) => {
  modal.classList.remove("popup_is-opened");
  modal.removeEventListener("keyup", handleEscape);
};

function handleEscape(e) {
  if (e.key === "Escape") {
    const closeEscape = document.querySelector(".popup_is-opened");
    closeModal(closeEscape);
  }
}

const horizontalCardElement = (data) => {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  cardImage.src = data.link;
  cardImage.alt = data.title;
  
  const cardTitle = cardElement.querySelector(".card__title");
  cardTitle.textContent = data.title;
  
  const cardDescription = cardElement.querySelector(".card__description");
  cardDescription.textContent = data.description;
  cardImage.addEventListener("click", () => {
    handlePreviewImage(data);
  });

  return cardElement;
};

const verticleCardElement = (data) => {
  const cardElement = verticleCardTemplate.cloneNode(true);
  const verticleCardTitle = cardElement.querySelector(".card__verticle-title");
  const verticleCardDescription = cardElement.querySelector(
    ".card__verticle-description"
  );
  const verticleCardImage = cardElement.querySelector(".card__image");

  verticleCardDescription.textContent = data.description;
  verticleCardTitle.textContent = data.title;
  verticleCardImage.src = data.link;
  verticleCardImage.alt = data.title;

  verticleCardImage.addEventListener("click", () => {
    handlePreviewImage(data);
  });

  return cardElement;
};

const handlePreviewImage = (data) => {
  previewImage.src = data.link;
  previewImage.alt = data.title;
  previewCaption.textContent = data.description;
  openModal(popupPreviewImage);
};

closeButton.addEventListener("click", () => {
  closeModal(popupPreviewImage);
});

const horizontalButton = document.querySelector(
  ".place-to-visit__btn-type-horizontal"
);
const verticalButton = document.querySelector(
  ".place-to-visit__btn-type-verticle"
);

horizontalButton.addEventListener("click", () => {
  currentLayout = "horizontal";
  renderCard(galleryData.gallery, cardList);
});

verticalButton.addEventListener("click", () => {
  currentLayout = "vertical";
  renderCard(galleryData.gallery, cardList);
});

renderCard(galleryData.gallery, cardList);
