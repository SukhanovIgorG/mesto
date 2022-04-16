import { Card } from "./card.js";

import { initialCards } from "./initial-cards.js";

import { openPopup } from "./utils.js";
import { closedPopup } from "./utils.js";
import { setClickOverListener } from "./utils.js";

import { FormValidator } from "./FormValidator.js";

const buttonEditProfile = document.querySelector(".profile__edit-button"); // нажатие на редактирование профиля
const popupProfile = document.querySelector(".popup_type_edit-profile");
const formProfile = popupProfile.querySelector(".form_type_edit-profile"); // Находим форму в DOM
const buttonClosedPopupProfileProfile = popupProfile.querySelector(
  ".popup__close-button"
); // нажатие на закрытие формы редактирования
const nameInput = formProfile.querySelector(".form__input_type_name"); // Находим поля формы в DOM
const signInput = formProfile.querySelector(".form__input_type_sign"); // Воспользуйтесь инструментом .querySelector()
const profile = document.querySelector(".profile");
const profileName = profile.querySelector(".profile__name"); // Выберите элементы, куда должны быть вставлены значения полей
const profileSign = profile.querySelector(".profile__sign");
const buttonAddPlace = document.querySelector(".profile__add-button");
const placeForAdd = document.querySelector(".popup_type_new-place");
const buttonClosedPlace = placeForAdd.querySelector(".popup__close-button");
const formPlace = placeForAdd.querySelector(".form_type_new-place");
const placeForAddNameInput = formPlace.querySelector(".form__input_type_place");
const placeForAddPhotoInput = formPlace.querySelector(
  ".form__input_type_photo"
);
const popupPhoto = document.querySelector(".popup_type_photo");
const popupPhotoCloseButton = popupPhoto.querySelector(
  ".popup__close-button_type_photo"
);
const popups = Array.from(document.querySelectorAll(".popup"));
// const cardContainer = document.querySelector(".cards-list");

initialCards.forEach((place) => {
  const card = new Card(place, ".template");
  const cardElement = card.generateCard();
  document.querySelector(".cards-list").append(cardElement);
});

function popupEditProfile() {
  nameInput.value = profileName.textContent;
  signInput.value = profileSign.textContent;
  openPopup(popupProfile);
}

function formSubmitHandler(evt) {
  evt.preventDefault(); //  отменяет стандартную отправку формы.

  const newName = nameInput.value; // Получите значение полей signInput и nameInput из свойства value
  const newSign = signInput.value;

  profileName.textContent = newName; // Вставьте новые значения с помощью textContent
  profileSign.textContent = newSign;

  closedPopup(popupProfile); // закрываем попап при нажатии на сохранить
}

buttonEditProfile.addEventListener("click", popupEditProfile);
buttonClosedPopupProfileProfile.addEventListener("click", () => {
  closedPopup(popupProfile);
});
formProfile.addEventListener("submit", formSubmitHandler); // он будет следить за событием “submit” - «отправка»

buttonAddPlace.addEventListener("click", () => {
  openPopup(placeForAdd);
});
buttonClosedPlace.addEventListener("click", () => {
  closedPopup(placeForAdd);
});

popupPhotoCloseButton.addEventListener("click", () => {
  closedPopup(popupPhoto);
});

formPlace.addEventListener("submit", placeForAddSubmit);

//============ функция добавления карточки ============
function placeForAddSubmit(evt) {
  evt.preventDefault();

  const place = {};

  place["name"] = placeForAddNameInput.value;
  place["link"] = placeForAddPhotoInput.value;
  const card = new Card(place, ".template");
  const cardElement = card.generateCard();
  document.querySelector(".cards-list").prepend(cardElement);

  closedPopup(placeForAdd);
  placeForAddNameInput.value = ""; //поля заполнения формы очищаются
  placeForAddPhotoInput.value = ""; //поля заполнения формы очищаются

  // const buttonElement = placeForAdd.querySelector(".form-place-button");
  // const inputList = Array.from(placeForAdd.querySelectorAll(".form__input"));

  validationNewPlace.enableValidation();
}

setClickOverListener(popups);

// ======= создание новых классов валидации и вызов ========

const validationNewPlace = new FormValidator(
  {
    formSelector: ".form",
    inputSelector: ".form__input",
    submitButtonSelector: ".form__button",
    inactiveButtonClass: "form__button:disabled",
    inputErrorClass: "form__input_type_error",
    errorClass: "form__input-error_active",
  },
  ".form_type_new-place"
);

validationNewPlace.enableValidation();

const validationEditProfile = new FormValidator(
  {
    formSelector: ".form",
    inputSelector: ".form__input",
    submitButtonSelector: ".form__button",
    inactiveButtonClass: "form__button:disabled",
    inputErrorClass: "form__input_type_error",
    errorClass: "form__input-error_active",
  },
  ".form_type_edit-profile"
);

validationEditProfile.enableValidation();
