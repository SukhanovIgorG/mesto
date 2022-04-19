import { Card } from "./Card.js";
import { initialCards } from "./initial-cards.js";
import { openPopup } from "./utils.js";
import { closePopup } from "./utils.js";
import { FormValidator } from "./FormValidator.js";

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
const popupPhoto = document.querySelector(".popup_type_photo");
const popupPotoImage = popupPhoto.querySelector(".popup__img");
const popupPhotoTitle = popupPhoto.querySelector(".popup__photo-title");
const popups = Array.from(document.querySelectorAll(".popup"));
const cardContainer = document.querySelector(".cards-list");
const validationParams = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button:disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
};

function createCard(place) {
  const card = new Card(place, ".template", handleZoomImage);
  const cardElement = card.generateCard();
  return cardElement;
}

initialCards.forEach((place) => {
  const cardElement = createCard(place);
  cardContainer.append(cardElement);
});

function openProfilePopup() {
  formProfileNameInput.value = profileName.textContent;
  formProfileSignInput.value = profileSign.textContent;
  openPopup(popupProfile);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault(); //  отменяет стандартную отправку формы.
  const newName = formProfileNameInput.value; // Получите значение полей signInput и formProfileNameInput из свойства value
  const newSign = formProfileSignInput.value;
  profileName.textContent = newName; // Вставьте новые значения с помощью textContent
  profileSign.textContent = newSign;
  closePopup(popupProfile); // закрываем попап при нажатии на сохранить
  formValidators[ formProfile.getAttribute('name') ].resetValidation()
}

buttonEditProfile.addEventListener("click", openProfilePopup);
formProfile.addEventListener("submit", handleProfileFormSubmit); // он будет следить за событием “submit” - «отправка»
buttonAddPlace.addEventListener("click", () => {
  openPopup(popupNewPlace);
});

formPlace.addEventListener("submit", handleSubmitNewPlace);

//============ функция добавления карточки ============
function handleSubmitNewPlace(evt) {
  evt.preventDefault();
  const place = {};
  place["name"] = formPlaceNameInput.value;
  place["link"] = formPlacePhotoInput.value;
  const cardElement = createCard(place);
  cardContainer.prepend(cardElement);
  closePopup(popupNewPlace);
  formValidators[ formPlace.getAttribute('name') ].resetValidation()
  // validationNewPlace.resetValidation();
}

popups.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup_visible")) {
      closePopup(popup);
    }
    if (evt.target.classList.contains("popup__close-button")) {
      closePopup(popup);
    }
  });
});

// ======= создание новых классов валидации и вызов ========
// const validationNewPlace = new FormValidator(
//   validationParams,
//   ".form_type_new-place"
// );

// validationNewPlace.enableValidation();

// const validationEditProfile = new FormValidator(
//   validationParams,
//   ".form_type_edit-profile"
// );

// validationEditProfile.enableValidation();

function handleZoomImage(name, link) {
  popupPotoImage.src = link;
  popupPotoImage.alt = name;
  popupPhotoTitle.textContent = name;
  openPopup(popupPhoto);
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
