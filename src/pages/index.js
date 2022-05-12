import './index.css';

import { validationParams } from "../script/constants.js";
import { Card } from "../script/components/Card.js";
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
const buttonAddPlace = document.querySelector(".profile__add-button");
const popupNewPlace = document.querySelector(".popup_type_new-place");
const formPlace = popupNewPlace.querySelector(".form_type_new-place");
const classUserInfo = new UserInfo ( {nameSelector:'.profile__name', signSelector:'.profile__sign'} );
const classPopupWithImage = new PopupWithImage(".popup_type_photo");
  classPopupWithImage.setEventListeners();
const classPopupWithFormPlace = new PopupWithForm(".popup_type_new-place", handleSubmitNewPlace);
  classPopupWithFormPlace.setEventListeners();
const classPopupWithFormUser = new PopupWithForm('.popup_type_edit-profile', handleProfileFormSubmit);
  classPopupWithFormUser.setEventListeners();


function generateCard(item) {
  const card = new Card(item, ".template", handleZoomImage);
  const cardElement = card.generateCard();
    return cardElement;
}

const cardList = new Section({ items: initialCards, renderer: (item) => {
  cardList.addItem(generateCard(item));
} }, ".cards-list" );

cardList.renderItems();

function openProfilePopup() {
  const userInfo = classUserInfo.getUserInfo();
  formProfileNameInput.value = userInfo.name;
  formProfileSignInput.value = userInfo.sign;
  classPopupWithFormUser.open();
}


function handleProfileFormSubmit(data) {
  classUserInfo.setUserInfo({name: data.name, sign: data.sign});
  this.close(); // закрываем попап при нажатии на сохранить
  formValidators[ formProfile.getAttribute('name') ].resetValidation()
}

buttonEditProfile.addEventListener("click", openProfilePopup);
buttonAddPlace.addEventListener("click", () => {
classPopupWithFormPlace.open();
});


//============ функция добавления карточки ============
function handleSubmitNewPlace(place) {
  cardList.addItemBefore(generateCard(place));
  this.close();
  formValidators[ formPlace.getAttribute('name') ].resetValidation()
}

function handleZoomImage(name, link) {
  classPopupWithImage.open(name, link);

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
