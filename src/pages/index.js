import './index.css';

import { validationParams } from "../script/constants.js";
import { Card } from "../script/components/Card.js";
import { PopupWithImage } from '../script/components/PopupWithImage.js';
import { PopupWithForm } from '../script/components/PopupWithForm.js';
import { PopupWithConfirmTrash } from '../script/components/PopupWithConfirmTrash.js';
import { Section } from "../script/components/Section.js";
// import { initialCards } from "../script/initial-cards.js";
import { FormValidator } from "../script/components/FormValidator.js";
import { UserInfo } from "../script/components/UserInfo.js";

const buttonEditProfile = document.querySelector(".profile__edit-button"); // нажатие на редактирование профиля
const popupProfile = document.querySelector(".popup_type_edit-profile");
const profileAvatarButton = document.querySelector(".profile__avatar-edit"); // Обновить аватар
const formProfile = popupProfile.querySelector(".form_type_edit-profile"); // Находим форму в DOM
const formProfileNameInput = formProfile.querySelector(".form__input_type_name"); // Находим поля формы в DOM
const formProfileSignInput = formProfile.querySelector(".form__input_type_sign");
const formAvatar = document.querySelector(".form_type_edit-avatar");
const formAvatarLinkInput = formAvatar.querySelector(".form__input_type_avatar"); // Воспользуйтесь инструментом .querySelector()
const buttonAddPlace = document.querySelector(".profile__add-button");
const popupNewPlace = document.querySelector(".popup_type_new-place");
const formPlace = popupNewPlace.querySelector(".form_type_new-place");
const classUserInfo = new UserInfo ( {nameSelector:'.profile__name', signSelector:'.profile__sign', avatarSelector:'.profile__avatar-contein'} );
const classPopupWithImage = new PopupWithImage(".popup_type_photo");
  classPopupWithImage.setEventListeners();
const classPopupWithFormPlace = new PopupWithForm(".popup_type_new-place", handleSubmitNewPlace);
  classPopupWithFormPlace.setEventListeners();
const classPopupWithFormUser = new PopupWithForm('.popup_type_edit-profile', handleProfileFormSubmit);
  classPopupWithFormUser.setEventListeners();
const classPopupWithFormAvatar = new PopupWithForm('.popup_type_edit-avatar', handleProfileAvatarSubmit);
  classPopupWithFormAvatar.setEventListeners();


  
fetch('https://mesto.nomoreparties.co/v1/cohort-41/cards', {
  headers: {
    authorization: '93691316-b2f3-4bce-8add-d8eb39969e4b'
  }
})
  .then(res => res.json())
  .then((result) => { 
    const cardList = new Section({ items: result, renderer: (item) => {
      cardList.addItem(generateCard(item));
    } }, ".cards-list" );
    
    cardList.renderItems() })
  .catch(err => console.log(`ошибка ${err.status}`))
  ;

function generateCard(item) {
  const card = new Card(item, ".template", handleZoomImage);
  const cardElement = card.generateCard();
    return cardElement;
}

// const cardList = new Section({ items: initialCardsServer, renderer: (item) => {
//   cardList.addItem(generateCard(item));
// } }, ".cards-list" );

// cardList.renderItems();

function openProfilePopup() {
  const userInfo = classUserInfo.getUserInfo();
  formProfileNameInput.value = userInfo.name;
  formProfileSignInput.value = userInfo.sign;
  classPopupWithFormUser.open();
}

function openAvatarPopup() {
  const userInfo = classUserInfo.getUserAvatar();
  formAvatarLinkInput.value = userInfo.avatar;
  classPopupWithFormAvatar.open();
  console.log('func openAvatarPopup');
};

// запрос информации о пользователе
fetch('https://nomoreparties.co/v1/cohort-41/users/me', {
  headers: {
    authorization: '93691316-b2f3-4bce-8add-d8eb39969e4b'
  }
})
  .then(res => res.json())
  .then((result) => { 
    classUserInfo.loadUserInfo({name: result.name, sign: result.about, avatar: result.avatar}) })
  .catch(err => console.log(`ошибка ${err}`))
  ;

// конец запроса

function handleProfileFormSubmit(data) {
  classUserInfo.setUserInfo({name: data.name, sign: data.sign});
  this.close(); // закрываем попап при нажатии на сохранить
  formValidators[ formProfile.getAttribute('name') ].resetValidation()
}
// Обновление аватара

function handleProfileAvatarSubmit(data) {
  classUserInfo.setUserAvatar({avatar: data.avatar});
  this.close(); // закрываем попап при нажатии на сохранить
  formValidators[ formAvatar.getAttribute('name') ].resetValidation()
  console.log('handleProfileAvatarSubmit in index');
}

buttonEditProfile.addEventListener("click", openProfilePopup);
profileAvatarButton.addEventListener("click", openAvatarPopup);
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
