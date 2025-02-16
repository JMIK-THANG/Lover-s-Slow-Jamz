import "../pages/index.css";

const gallery = [
  {
    title: "Angel Oak Tree",
    subtitle:
      "The Angel Oak Tree is a majestic live oak tree that's estimated to be over 400 years old. It's a beautiful and peaceful spot that's perfect for a romantic picnic or a quiet stroll.",
    link: "https://charleston.com/images/2023/angel-oak-valentines-day-date-1.jpg",
  },
  {
    title: "Charleston Harbor",
    subtitle:
      "There's nothing quite like the romance of sailing on the harbor at sunset. Take in the sights and sounds of the city as you watch the sun go down, and enjoy the company of your loved one.",
    link: "https://charleston.com/images/2023/valentines-day-charleston-harbor-sunset-cruise.jpg",
  },
  {
    title: "Battery",
    subtitle:
      "The Battery is a beautiful and historic area of Charleston that's perfect for a romantic walk. Take in the sights and sounds of the harbor, and enjoy the stunning views of the city and the sea.",
    link: "https://charleston.com/images/2023/valentines-day-charleston-harbor-sunset-cruise.jpg",
  },
  {
    title: "Folly Beach",
    subtitle:
      "Since Charleston enjoys a warm climate all year long, you can easily head out to Folly Beach for a romantic picnic for lunch.",
    link: "https://tse4.mm.bing.net/th?id=OIP.W37hoj_wGH3W5eIfcOW9QQHaEK&pid=Api&P=0&h=180",
  },
];

const cardList = document.querySelector(".card__list");
const cardTemplate = document.querySelector("#card__template").content;

const renderCard = (cardData, cardContainer) => {
  const cardElement = getCardElement(cardData);
  cardContainer.prepend(cardElement);
};
const getCardElement = (data) => {
  console.log(data);
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
gallery.forEach((cardObj) => {
  renderCard(cardObj, cardList);
});
