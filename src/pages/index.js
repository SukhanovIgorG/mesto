import './index.css';

import { validationParams } from "../script/constants.js";
import { Card } from "../script/components/Card.js";
import { Popup } from "../script/components/Popup.js";
import { PopupWithImage } from '../script/components/PopupWithImage.js';
import { PopupWithForm } from '../script/components/PopupWithForm.js';
import { Section } from "../script/components/Section.js";
import { initialCards } from "../script/initial-cards.js";
import { FormValidator } from "../script/components/FormValidator.js";
import { UserInfo } from "../script/components/UserInfo.js";

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

function generateCard(item) {
  const card = new Card(item, ".template", handleZoomImage);
  const cardElement = card.generateCard();
    return cardElement;
}

const cardList = new Section({ items: initialCards, renderer: (item) => {
  cardList.addItem(generateCard(item));
} }, cardContainer);

cardList._renderItem();

function openProfilePopup() {
  const user = new UserInfo ( {name:profileName.textContent, sign:profileSign.textContent} )
  const userInfo = user.getUserInfo();
  formProfileNameInput.value = userInfo.name;
  formProfileSignInput.value = userInfo.sign;
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
});


//============ функция добавления карточки ============
function handleSubmitNewPlace(place) {
  cardList.addItemBefore(generateCard(place));
  this.close();
  formValidators[ formPlace.getAttribute('name') ].resetValidation()
}

function handleZoomImage(name, link) {
  // const place = {name, link};
  const popup = new PopupWithImage(".popup_type_photo");
  popup.open(name, link);
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
