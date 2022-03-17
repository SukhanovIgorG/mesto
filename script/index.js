const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

let editButton = document.querySelector(".profile__edit-button"); // нажатие на редактирование профиля
let popup = document.querySelector("#edit-profile");
let form = popup.querySelector(".form"); // Находим форму в DOM
let closButton = popup.querySelector(".popup__close-button"); // нажатие на закрытие формы редактирования
let nameInput = form.querySelector("#name"); // Находим поля формы в DOM
let jobInput = form.querySelector("#sign"); // Воспользуйтесь инструментом .querySelector()

let cardTemplate = document.querySelector("#card-template").content;

let profile = document.querySelector(".profile");
let profileName = profile.querySelector(".profile__name"); // Выберите элементы, куда должны быть вставлены значения полей
let profileSign = profile.querySelector(".profile__sign");

let addPlaceButton = document.querySelector(".profile__add-button");
let newPlace = document.querySelector("#new-place");
let closePlaceButton = newPlace.querySelector(".popup__close-button");
let cardsList = document.querySelector(".cards-list");
let formPlace = newPlace.querySelector("#form-place");
let newPlaceNameInput = formPlace.querySelector("#new-place");
let newPlacePhotoInput = formPlace.querySelector("#new-photo");

let popupPhoto = document.querySelector(".popup-photo");
let popupPhotoImg = document.querySelector(".popup-photo__img");
let popupPhotoCloseButton = popupPhoto.querySelector(".popup-photo__close-button");

initialCards.forEach(function (place) {
  let cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  cardsList.append(cardElement);

  cardElement.querySelector(".card__title").textContent = place.name;
  cardElement.querySelector("img").src = place.link;
  cardElement.querySelector("img").alt = place.name;
});
let cards = document.querySelectorAll(".card");

function popupVisible() {
  popup.classList.add("popup_visible");

  nameInput.value = profileName.textContent;
  jobInput.value = profileSign.textContent;
}


function popupInvisible() {
  popup.classList.remove("popup_visible");
}

function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  let newName = nameInput.value; // Получите значение полей jobInput и nameInput из свойства value
  let newSign = jobInput.value;

  profileName.textContent = newName; // Вставьте новые значения с помощью textContent
  profileSign.textContent = newSign;

  popupInvisible(); // закрываем попап при нажатии на сохранить
}


function newPlaceVisible() {
  newPlace.classList.toggle("popup_visible");
}

function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  let newName = nameInput.value; // Получите значение полей jobInput и nameInput из свойства value
  let newSign = jobInput.value;

  profileName.textContent = newName; // Вставьте новые значения с помощью textContent
  profileSign.textContent = newSign;

  popupInvisible(); // закрываем попап при нажатии на сохранить
}

editButton.addEventListener("click", popupVisible);
closButton.addEventListener("click", popupInvisible);
form.addEventListener("submit", formSubmitHandler); // он будет следить за событием “submit” - «отправка»


addPlaceButton.addEventListener("click", newPlaceVisible);
closePlaceButton.addEventListener("click", newPlaceVisible);

formPlace.addEventListener("submit", newPlaceSubmit);

function newPlaceSubmit(evt) {
  evt.preventDefault();

  let cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  cardsList.prepend(cardElement);

  let newPlaceName = newPlaceNameInput.value;
  let newPlacePhoto = newPlacePhotoInput.value;

  cardElement.querySelector(".card__title").textContent = newPlaceName;
  cardElement.querySelector("img").src = newPlacePhoto;
  cardElement.querySelector("img").alt = newPlaceName;

  let trash = cardElement.querySelector(".card__trash");
  trash.addEventListener("click", function () {
    trash.parentElement.remove();
  });
  let like = cardElement.querySelector(".card__like");
  like.addEventListener("click", function () {
    like.classList.toggle("card__like_active")
  });
  let image = cardElement.querySelector(".card__image");
  image.addEventListener("click", clickOnImage(image));

  newPlaceVisible();
  newPlaceNameInput.value = "";
  newPlacePhotoInput.value = "";
}

function trashOneCard(trash) {
  trash.addEventListener("click", function () {
    trash.parentElement.remove();
  });
}
function likeOneCard(like) {
  like.addEventListener("click", function () {
    like.classList.toggle("card__like_active")
  });
}

function visiblePopupPhoto() {
  popupPhoto.classList.toggle("popup-photo_visible");

  popupPhotoCloseButton.addEventListener('click', visiblePopupPhoto);
}

function clickOnImage(image) {
  image.addEventListener('click', () => {
    popupPhotoImg.src = image.src;
    visiblePopupPhoto();
  })
}

Array.from(cards).forEach(function (cardForClick) {
  let trash = cardForClick.querySelector(".card__trash");
  trashOneCard(trash);
  let like = cardForClick.querySelector(".card__like");
  likeOneCard(like);
  let image = cardForClick.querySelector(".card__image");
  clickOnImage(image);
});
