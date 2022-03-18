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

const editButton = document.querySelector(".profile__edit-button"); // нажатие на редактирование профиля
const popup = document.querySelector("#edit-profile");
const form = popup.querySelector(".form"); // Находим форму в DOM
const closButton = popup.querySelector(".popup__close-button"); // нажатие на закрытие формы редактирования
const nameInput = form.querySelector("#name"); // Находим поля формы в DOM
const jobInput = form.querySelector("#sign"); // Воспользуйтесь инструментом .querySelector()

const cardTemplate = document.querySelector("#card-template").content;

const profile = document.querySelector(".profile");
const profileName = profile.querySelector(".profile__name"); // Выберите элементы, куда должны быть вставлены значения полей
const profileSign = profile.querySelector(".profile__sign");

const addPlaceButton = document.querySelector(".profile__add-button");
const newPlace = document.querySelector("#new-place");
const closePlaceButton = newPlace.querySelector(".popup__close-button");
const cardsList = document.querySelector(".cards-list");
const formPlace = newPlace.querySelector("#form-place");
const newPlaceNameInput = formPlace.querySelector("#new-title");
const newPlacePhotoInput = formPlace.querySelector("#new-photo");

const popupPhoto = document.querySelector(".popup-photo");
const popupPhotoImg = popupPhoto.querySelector(".popup-photo__img");
const popupPhotoTitle = popupPhoto.querySelector(".popup-photo__title");
const popupPhotoCloseButton = popupPhoto.querySelector(
  ".popup-photo__close-button"
);

initialCards.forEach(function (place) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  cardsList.append(cardElement);

  cardElement.querySelector(".card__title").textContent = place.name;
  cardElement.querySelector("img").src = place.link;
  cardElement.querySelector("img").alt = place.name;
});
const cards = document.querySelectorAll(".card"); // перемещение обьявления переменно выше перебора initialCards невозможо, тк карточки не созданы.

function popupVisible() {
  popup.classList.add("popup_visible");

  nameInput.value = profileName.textContent;
  jobInput.value = profileSign.textContent;
}

function popupInvisible() {
  popup.classList.remove("popup_visible");
}

function formSubmitHandler(evt) {
  evt.preventDefault(); //  отменяет стандартную отправку формы.

  const newName = nameInput.value; // Получите значение полей jobInput и nameInput из свойства value
  const newSign = jobInput.value;

  profileName.textContent = newName; // Вставьте новые значения с помощью textContent
  profileSign.textContent = newSign;

  popupInvisible(); // закрываем попап при нажатии на сохранить
}

function newPlaceVisible() {
  newPlace.classList.toggle("popup_visible");
}

function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  const newName = nameInput.value; // Получите значение полей jobInput и nameInput из свойства value
  const newSign = jobInput.value;

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
  // функция добавления карточки
  evt.preventDefault();

  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  cardsList.prepend(cardElement);

  const newPlaceName = newPlaceNameInput.value;
  const newPlacePhoto = newPlacePhotoInput.value;

  cardElement.querySelector(".card__title").textContent = newPlaceName;
  cardElement.querySelector("img").src = newPlacePhoto;
  cardElement.querySelector("img").alt = newPlaceName;

  // на элементы новой карточки навешиваются слушатели
  const trash = cardElement.querySelector(".card__trash");
  trash.addEventListener("click", function () {
    trash.parentElement.remove();
  });
  const like = cardElement.querySelector(".card__like");
  like.addEventListener("click", function () {
    like.classList.toggle("card__like_active");
  });
  const image = cardElement.querySelector(".card__image");
  image.addEventListener("click", clickOnImage(image));

  // поля заполнения формы очищаются
  newPlaceVisible();
  newPlaceNameInput.value = "";
  newPlacePhotoInput.value = "";
}

function trashOneCard(trash) {
  // обработчик удаления
  trash.addEventListener("click", function () {
    trash.parentElement.remove();
  });
}
function likeOneCard(like) {
  // обработчик лайка
  like.addEventListener("click", function () {
    like.classList.toggle("card__like_active");
  });
}

function visiblePopupPhoto() {
  // обработчик увеличения фото
  popupPhoto.classList.toggle("popup-photo_visible");

  popupPhotoCloseButton.addEventListener("click", visiblePopupPhoto);
}

function clickOnImage(image) {
  image.addEventListener("click", () => {
    popupPhotoImg.src = image.src;
    popupPhotoTitle.textContent = image.alt;
    visiblePopupPhoto();
  });
}

Array.from(cards).forEach(function (cardForClick) {
  // из псевдомассива карточек создаем массив и перебором из каждой картоки определем кнопки,
  const trash = cardForClick.querySelector(".card__trash"); // определяем кнопку
  trashOneCard(trash); // для кнопок вызываем функции, которые навесят слушателя события и обработчик события.
  const like = cardForClick.querySelector(".card__like");
  likeOneCard(like);
  const image = cardForClick.querySelector(".card__image");
  clickOnImage(image);
});
