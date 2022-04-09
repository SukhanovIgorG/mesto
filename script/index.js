const buttonEditProfile = document.querySelector(".profile__edit-button"); // нажатие на редактирование профиля
const popupProfile = document.querySelector(".popup_type_edit-profile");
const formProfile = popupProfile.querySelector(".form_type_edit-profile"); // Находим форму в DOM
const buttonClosedPopupProfileProfile = popupProfile.querySelector(".popup__close-button"); // нажатие на закрытие формы редактирования
const nameInput = formProfile.querySelector(".form__input_type_name"); // Находим поля формы в DOM
const signInput = formProfile.querySelector(".form__input_type_sign"); // Воспользуйтесь инструментом .querySelector()

const cardTemplate = document.querySelector(".template").content;

const profile = document.querySelector(".profile");
const profileName = profile.querySelector(".profile__name"); // Выберите элементы, куда должны быть вставлены значения полей
const profileSign = profile.querySelector(".profile__sign");

const buttonAddPlace = document.querySelector(".profile__add-button");
const placeForAdd = document.querySelector(".popup_type_new-place");
const buttonClosedPlace = placeForAdd.querySelector(".popup__close-button");
const cardContainer = document.querySelector(".cards-list");
const formPlace = placeForAdd.querySelector(".form_type_new-place");
const placeForAddNameInput = formPlace.querySelector(".form__input_type_place");
const placeForAddPhotoInput = formPlace.querySelector(".form__input_type_photo");

const popupPhoto = document.querySelector(".popup_type_photo");
const popupPhotoImg = popupPhoto.querySelector(".popup__img");
const popupPhotoTitle = popupPhoto.querySelector(".popup__photo-title");
const popupPhotoCloseButton = popupPhoto.querySelector(
  ".popup__close-button_type_photo"
);
const popups = Array.from(document.querySelectorAll('.popup'));

function cloneCardTemplate(place) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);

  cardElement.querySelector(".card__title").textContent = place.name;
  cardElement.querySelector("img").src = place.link;
  cardElement.querySelector("img").alt = place.name;

  const trash = cardElement.querySelector(".card__trash");
  trash.addEventListener("click", function () {
    trash.closest('.card').remove();
  });
  const like = cardElement.querySelector(".card__like");
  like.addEventListener("click", function () {
      like.classList.toggle("card__like_active");
  });
  const image = cardElement.querySelector(".card__image");
  image.addEventListener("click", function () {
      popupPhotoImg.src = image.src;
      popupPhotoTitle.textContent = image.alt;
      visiblePopupPhoto();
  });
    return cardElement;
}

initialCards.forEach((place) => {
    newCard = cloneCardTemplate(place);
    cardContainer.append(newCard);
  });

// ============= открыть попап ============= 
  function openPopup(popupElement) {
    popupElement.classList.add("popup_visible");
    popupElement.addEventListener('keydown', closeByEsc);
  } 

// ============= закрыть попап ============= 
  function closedPopup(popupElement) {
    popupElement.classList.remove("popup_visible");
    popupElement.removeEventListener('keydown', closeByEsc);
  }

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
buttonClosedPopupProfileProfile.addEventListener("click", () => { closedPopup(popupProfile); });
formProfile.addEventListener("submit", formSubmitHandler); // он будет следить за событием “submit” - «отправка»

buttonAddPlace.addEventListener("click", () => {openPopup(placeForAdd)});
buttonClosedPlace.addEventListener("click", () => {closedPopup(placeForAdd)});

popupPhotoCloseButton.addEventListener("click", () => {closedPopup(popupPhoto); })

formPlace.addEventListener("submit", placeForAddSubmit);

//============ функция добавления карточки ============
function placeForAddSubmit(evt) {

  evt.preventDefault();

  const placeAdd = {};

  placeAdd['name'] = placeForAddNameInput.value;
  placeAdd['link'] = placeForAddPhotoInput.value;
  cardContainer.prepend(cloneCardTemplate(placeAdd));

//============ поля заполнения формы очищаются ============
  closedPopup(placeForAdd);
  placeForAddNameInput.value = "";
  placeForAddPhotoInput.value = "";

  const buttonElement = placeForAdd.querySelector('.form-place-button');
  const inputList = Array.from(placeForAdd.querySelectorAll('.form__input'));

  toggleButtonState(inputList, buttonElement);
} 

//============ обработчик увеличения фото ============
function visiblePopupPhoto() {

  openPopup(popupPhoto);
}

//============ установка слушателей нажатия Esc ============
// function setKeyDownListener(array) {
//   array.forEach((element) => {
//     element.addEventListener('keydown', (evt) => {
//       if (evt.key === 'Escape') {
//         closedPopup(element)
//       } 
//      });
//   })
// };

function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_visible');
    console.log(openedPopup);
    closedPopup(openedPopup); 
  }
}


////============ установка слушателей клика на оверлей ============
function setClickOverListener(array) {
  array.forEach((element) => {
    element.addEventListener('click', (evt) => {
      if (evt.target === evt.currentTarget) {
        closedPopup(element)
      }
     });
  })
};

setClickOverListener(popups);
