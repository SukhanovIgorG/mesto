import '../../page/index.css';

import { Card } from "./Card.js";
import { Popup } from "./Popup.js";
import { PopupWithImage } from './PopupWithImage.js';
import { PopupWithForm } from './PopupWithForm.js';
import { Section } from "./Section.js";
import { initialCards } from "./initial-cards.js";
import { FormValidator } from "./FormValidator.js";
import { UserInfo } from "./UserInfo.js";

const buttonEditProfile = document.querySelector(".profile__edit-button"); // нажатие на редактирование профиля
const popupProfile = document.querySelector(".popup_type_edit-profile");
const formProfile = popupProfile.querySelector(".form_type_edit-profile"); // Находим форму в DOM
const formProfileNameInput = formProfile.querySelector(".form__input_type_name"); // Находим поля формы в DOM
const formProfileSignInput = formProfile.querySelector(".form__input_type_sign"); // Воспользуйтесь инструментом .querySelector()
const profile = document.querySelector(".profile");
const profileName = profile.querySelector(".profile__name"); // Выберите элементы, куда должны быть вставлены значения полей
const profileSign = profile.querySelector(".profile__sign");
const buttonAddPlace = document.querySelector(".profile__add-button");
const popupNewPlace = document.querySelector(".popup_type_new-place");
const formPlace = popupNewPlace.querySelector(".form_type_new-place");
const formPlaceNameInput = formPlace.querySelector(".form__input_type_place");
const formPlacePhotoInput = formPlace.querySelector(".form__input_type_photo");
const cardContainer = document.querySelector(".cards-list");
const validationParams = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button:disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
};

const cardList = new Section({ items: initialCards, renderer: (item) => {
  const card = new Card(item, ".template", handleZoomImage);
  const cardElement = card.generateCard();
  cardList.addItem(cardElement);
} }, cardContainer);

cardList._renderItem();

function openProfilePopup() {
  const user = new UserInfo ( {name:profileName.textContent, sign:profileSign.textContent} )
  const userInfo = user.getUserInfo();
  formProfileNameInput.value = userInfo[0];
  formProfileSignInput.value = userInfo[1];
  const popup = new Popup('.popup_type_edit-profile');
  popup.open();
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault(); //  отменяет стандартную отправку формы.
  const newName = formProfileNameInput.value; // Получите значение полей signInput и formProfileNameInput из свойства value
  const newSign = formProfileSignInput.value;
  const newUserInfo = new UserInfo ( {userName: newName, userSign: newSign} );
  newUserInfo.setUserInfo();
  const popup = new Popup(".popup_type_edit-profile");
  popup.close(); // закрываем попап при нажатии на сохранить
  formValidators[ formProfile.getAttribute('name') ].resetValidation()
}

buttonEditProfile.addEventListener("click", openProfilePopup);
formProfile.addEventListener("submit", handleProfileFormSubmit); // он будет следить за событием “submit” - «отправка»
buttonAddPlace.addEventListener("click", () => {
  const popup = new PopupWithForm(".popup_type_new-place", handleSubmitNewPlace);
  popup.open();
  // popup.setEventListeners();
});

// formPlace.addEventListener("submit", handleSubmitNewPlace);

//============ функция добавления карточки ============
function handleSubmitNewPlace(evt) {
  console.log('событие обработчик отправки нового места');
  evt.preventDefault();
  const place = {};
  place["name"] = formPlaceNameInput.value;
  place["link"] = formPlacePhotoInput.value;
  console.log(place);
  // const cardElement = createCard(place);
  const card = new Card(place, ".template", handleZoomImage);
  const cardElement = card.generateCard();
  cardList.addItemBefore(cardElement);
  const popup = new PopupWithForm(".popup_type_new-place");
  popup.close();
  formValidators[ formPlace.getAttribute('name') ].resetValidation()
  // validationNewPlace.resetValidation();
}

function handleZoomImage(name, link) {
  const place = {name, link};
  const popup = new PopupWithImage(place, ".popup_type_photo");
  popup.open();
}

// ======= создание новых классов валидации и вызов ========
const formValidators = {}

// Включение валидации
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, `.${formElement.getAttribute('name')}`)
// получаем данные из атрибута `name` у формы
    const formName = formElement.getAttribute('name')

   // вот тут в объект записываем под именем формы
    formValidators[formName] = validator;
   validator.enableValidation();
  });
};

enableValidation(validationParams);
