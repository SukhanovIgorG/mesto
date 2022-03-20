const buttonEditProfile = document.querySelector(".profile__edit-button"); // нажатие на редактирование профиля
const popupProfile = document.querySelector(".popup_type_edit-profile");
const form = popupProfile.querySelector(".form"); // Находим форму в DOM
const buttonClosedPopup = popupProfile.querySelector(".popup__close-button"); // нажатие на закрытие формы редактирования
const nameInput = form.querySelector(".form__input_type_name"); // Находим поля формы в DOM
const jobInput = form.querySelector(".form__input_type_sign"); // Воспользуйтесь инструментом .querySelector()

const cardTemplate = document.querySelector(".template").content;

const profile = document.querySelector(".profile");
const profileName = profile.querySelector(".profile__name"); // Выберите элементы, куда должны быть вставлены значения полей
const profileSign = profile.querySelector(".profile__sign");

const buttonAddPlace = document.querySelector(".profile__add-button");
const placeForAdd = document.querySelector(".popup_type_new-place");
const buttonClosedPlace = placeForAdd.querySelector(".popup__close-button");
const cardsList = document.querySelector(".cards-list");
const formPlace = placeForAdd.querySelector(".form_type_new-place");
const placeForAddNameInput = formPlace.querySelector(".form__input_type_place");
const placeForAddPhotoInput = formPlace.querySelector(".form__input_type_photo");

const popupPhoto = document.querySelector(".popup_type_photo");
const popupPhotoImg = popupPhoto.querySelector(".popup__img");
const popupPhotoTitle = popupPhoto.querySelector(".popup__photo-title");
const popupPhotoCloseButton = popupPhoto.querySelector(
  ".popup__close-button_type_photo"
);

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
    cardsList.append(newCard);
  });

// открыть закрыть попап
  function openPopup(popupElement) {
    popupElement.classList.add("popup_visible")
    
  } 
  function closedPopup(popupElement) {
    popupElement.classList.remove("popup_visible")
  }

function popupEditProfile() {

  nameInput.value = profileName.textContent;
  jobInput.value = profileSign.textContent;
  openPopup(popupProfile);
}

function formSubmitHandler(evt) {
  evt.preventDefault(); //  отменяет стандартную отправку формы.

  const newName = nameInput.value; // Получите значение полей jobInput и nameInput из свойства value
  const newSign = jobInput.value;

  profileName.textContent = newName; // Вставьте новые значения с помощью textContent
  profileSign.textContent = newSign;

  closedPopup(popupProfile); // закрываем попап при нажатии на сохранить
}

buttonEditProfile.addEventListener("click", popupEditProfile);
buttonClosedPopup.addEventListener("click", () => { closedPopup(popupProfile); });
form.addEventListener("submit", formSubmitHandler); // он будет следить за событием “submit” - «отправка»

buttonAddPlace.addEventListener("click", () => {openPopup(placeForAdd)});
buttonClosedPlace.addEventListener("click", () => {closedPopup(placeForAdd)});

popupPhotoCloseButton.addEventListener("click", () => { closedPopup(popupPhoto); })

formPlace.addEventListener("submit", placeForAddSubmit);

function placeForAddSubmit(evt) {
  // функция добавления карточки
  evt.preventDefault();

  const placeAdd = {};

  placeAdd['name'] = placeForAddNameInput.value;
  placeAdd['link'] = placeForAddPhotoInput.value;
  cardsList.prepend(cloneCardTemplate(placeAdd));

  // поля заполнения формы очищаются
  closedPopup(placeForAdd);
  placeForAddNameInput.value = "";
  placeForAddPhotoInput.value = "";
} 

function visiblePopupPhoto() {
  // обработчик увеличения фото
  openPopup(popupPhoto);
}
