import "./index.css";

import { validationParams } from "../script/constants.js";
import { Card } from "../script/components/Card.js";
import { Api } from "../script/components/Api.js";
import { PopupWithImage } from "../script/components/PopupWithImage.js";
import { PopupWithForm } from "../script/components/PopupWithForm.js";
import { PopupWithConfirmTrash } from "../script/components/PopupWithConfirmTrash.js";
import { Section } from "../script/components/Section.js";
import { FormValidator } from "../script/components/FormValidator.js";
import { UserInfo } from "../script/components/UserInfo.js";

const buttonEditProfile = document.querySelector(".profile__edit-button"); // нажатие на редактирование профиля
const popupProfile = document.querySelector(".popup_type_edit-profile");
const profileAvatarButton = document.querySelector(".profile__avatar-edit"); // Обновить аватар
const formProfile = popupProfile.querySelector(".form_type_edit-profile");
const formProfileNameInput = formProfile.querySelector(
  ".form__input_type_name"
);
const formProfileSignInput = formProfile.querySelector(
  ".form__input_type_sign"
);
const formAvatar = document.querySelector(".form_type_edit-avatar");
const formAvatarLinkInput = formAvatar.querySelector(
  ".form__input_type_avatar"
);
const buttonAddPlace = document.querySelector(".profile__add-button");
const popupNewPlace = document.querySelector(".popup_type_new-place");
const formPlace = popupNewPlace.querySelector(".form_type_new-place");
const classUserInfo = new UserInfo({
  nameSelector: ".profile__name",
  signSelector: ".profile__sign",
  avatarSelector: ".profile__avatar-contein",
});
const classPopupWithImage = new PopupWithImage(".popup_type_photo");
classPopupWithImage.setEventListeners();
const classPopupWithFormPlace = new PopupWithForm(
  ".popup_type_new-place",
  handleSubmitNewPlace
);
classPopupWithFormPlace.setEventListeners();
const classPopupWithFormUser = new PopupWithForm(
  ".popup_type_edit-profile",
  handleProfileFormSubmit
);
classPopupWithFormUser.setEventListeners();
const classPopupWithFormAvatar = new PopupWithForm(
  ".popup_type_edit-avatar",
  handleProfileAvatarSubmit
);
classPopupWithFormAvatar.setEventListeners();
const classPopupWithConfirmTrash = new PopupWithConfirmTrash(
  ".popup_type_confirm-trash",
  hendleTrashCard
);

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-41",
  headers: {
    authorization: "93691316-b2f3-4bce-8add-d8eb39969e4b",
    "Content-Type": "application/json",
  },
});

const cardList = new Section((item) => {
  cardList.addItem(generateCard(item));
}, ".cards-list");

api.getInitialCards().then((result) => {
  cardList.renderItems(result);
});

function generateCard(item) {
  const card = new Card(
    item,
    classUserInfo.returnUserId(),
    classUserInfo.getUserInfo(),
    ".template",
    {
      zoom: handleZoomImage,
      addLike: (id) => {
        api
          .addLike(id)
          .then((res) => card.changeLikesCounter(res.likes.length));
      },
      removeLike: (id) => {
        api
          .removeLike(id)
          .then((res) => card.changeLikesCounter(res.likes.length));
      },
      trash: (id, element) => {
        classPopupWithConfirmTrash.open(id, element);
      },
    }
  );

  const cardElement = card.generateCard();
  return cardElement;
}

function hendleTrashCard(id, element) {
  console.log(`Удалил карточку вот с этим айдишником ${id}`);
  api
    .trashCard(id)
    .then(() => {
      element.remove();
      element = null;
    })
    .catch((err) => {
      console.log(`ошибка обращения к api.treshCard ${err}`);
    });
}

api
  .loadUserInfo()
  .then((result) => {
    classUserInfo.loadUserInfo({
      name: result.name,
      sign: result.about,
      avatar: result.avatar,
    });
    classUserInfo.setUserId(result._id);
  })
  .catch((err) => {
    console.log(`ошибка обращения к api.loadUserInfo ${err}`);
  });

function handleProfileFormSubmit(data) {
  renderLoading(".popup_type_edit-profile", true);
  api
    .postUserInfo(data.name, data.sign)
    .then((result) => {
      classUserInfo.setUserInfo({ name: result.name, sign: result.about });
      renderLoading(".popup_type_edit-profile", false);
    })
    .catch((err) => {
      console.log(`ошибка обращения к api.postUserInfo ${err}`);
    });
  this.close(); // закрываем попап при нажатии на сохранить
  formValidators[formProfile.getAttribute("name")].resetValidation();
}
// Обновление аватара
function handleProfileAvatarSubmit(data) {
  renderLoading(".popup_type_edit-avatar", true);
  api
    .postUserAvatar(data.avatar)
    .then((result) => {
      classUserInfo.setUserAvatar({ avatar: result.avatar });
      renderLoading(".popup_type_edit-avatar", false);
    })
    .catch((err) => {
      console.log(`ошибка обращения к api.postUserAvatar ${err}`);
    });

  this.close(); // закрываем попап при нажатии на сохранить
  formValidators[formAvatar.getAttribute("name")].resetValidation();
}

function openProfilePopup() {
  const userInfo = classUserInfo.getUserInfo();
  formProfileNameInput.value = userInfo.name;
  formProfileSignInput.value = userInfo.sign;
  classPopupWithFormUser.open();
}

function openAvatarPopup() {
  classPopupWithFormAvatar.open();
}

function openNewPlacePopup() {
  classPopupWithFormPlace.open();
}

buttonEditProfile.addEventListener("click", openProfilePopup);
profileAvatarButton.addEventListener("click", openAvatarPopup);
buttonAddPlace.addEventListener("click", openNewPlacePopup);

//============ функция добавления карточки ============
function handleSubmitNewPlace(place) {
  renderLoading(".popup_type_new-place", true);
  api
    .postNewCard(place.name, place.link)
    .then((res) => {
      cardList.addItemBefore(generateCard(res));
      renderLoading(".popup_type_new-place", false);
    })
    .catch((err) => {
      console.log(`ошибка обращения к api.postNewCard ${err}`);
    });
  this.close();
  formValidators[formPlace.getAttribute("name")].resetValidation();
}
// увеличить фото

function handleZoomImage(name, link) {
  classPopupWithImage.open(name, link);
}

// ======= создание новых классов валидации и вызов ========
const formValidators = {};

// Перебор всех форм и включение валидации
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(
      config,
      `.${formElement.getAttribute("name")}`
    );
    // получаем данные из атрибута `name` у формы
    const formName = formElement.getAttribute("name");

    // вот тут в объект записываем под именем формы
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

enableValidation(validationParams);

function renderLoading(popupSelector, isLoading) {
  const buttonElement = document
    .querySelector(popupSelector)
    .querySelector(".form__button");
  if (isLoading) {
    buttonElement.textContent = "Сохранение...";
  } else {
    if (popupSelector === ".popup_type_new-place") {
      buttonElement.textContent = "Создать";
    } else {
      buttonElement.textContent = "Сохранить";
    }
  }
}
