let editButton = document.querySelector(".profile__edit-button"); // нажатие на редактирование профиля
let popup = document.querySelector(".popup");
let formElement = popup.querySelector(".popup__form"); // Находим форму в DOM
let closButton = document.querySelector(".popup__close-button"); // нажатие на закрытие формы редактирования
let nameInput = formElement.querySelector("#name"); // Находим поля формы в DOM
let jobInput = formElement.querySelector("#sign"); // Воспользуйтесь инструментом .querySelector()

let profile = document.querySelector(".profile");
let profileName = profile.querySelector(".profile__name"); // Выберите элементы, куда должны быть вставлены значения полей
let profileSign = profile.querySelector(".profile__sign");

function popupVisible() {
  popup.classList.add("popup_visible");

  popup.querySelector("#name").value = profileName.textContent;
  popup.querySelector("#sign").value = profileSign.textContent;
}

function popupInvisible() {
  popup.classList.remove("popup_visible");
}

function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  console.log(popup.querySelector("#name").value);

  let newName = popup.querySelector("#name").value; // Получите значение полей jobInput и nameInput из свойства value
  let newSign = popup.querySelector("#sign").value;

  profileName.textContent = newName; // Вставьте новые значения с помощью textContent
  profileSign.textContent = newSign;
}

editButton.addEventListener("click", popupVisible);
closButton.addEventListener("click", popupInvisible);
formElement.addEventListener("submit", formSubmitHandler); // он будет следить за событием “submit” - «отправка»
