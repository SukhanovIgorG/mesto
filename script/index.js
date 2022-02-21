let editButton = document.querySelector(".profile__edit-button"); // нажатие на редактирование профиля

let popup = document.querySelector(".popup");
function popupVisible() {
  popup.classList.add("popup_visible");
}
editButton.addEventListener("click", popupVisible);

let closButton = document.querySelector(".popup__close-button"); // нажатие на закрытие формы редактирования
function popupInvisible() {
  popup.classList.remove("popup_visible");
}
closButton.addEventListener("click", popupInvisible);

let formElement = document.querySelector(".popup__form"); // Находим форму в DOM

let nameInput = formElement.querySelector("#name"); // Находим поля формы в DOM
let jobInput = formElement.querySelector("#sign"); // Воспользуйтесь инструментом .querySelector()

function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  let newName = popup.querySelector("#name").value;   // Получите значение полей jobInput и nameInput из свойства value
  let newSign = popup.querySelector("#sign").value;

  let profile = document.querySelector(".profile");
  let profileName = profile.querySelector(".profile__name");   // Выберите элементы, куда должны быть вставлены значения полей
  let profileSign = profile.querySelector(".profile__sign");

  profileName.textContent = newName;   // Вставьте новые значения с помощью textContent
  profileSign.textContent = newSign;
}

formElement.addEventListener("submit", formSubmitHandler); // он будет следить за событием “submit” - «отправка»
