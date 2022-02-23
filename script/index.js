let editButton = document.querySelector(".profile__edit-button"); // нажатие на редактирование профиля
let popup = document.querySelector(".popup");
let form = popup.querySelector(".form"); // Находим форму в DOM
let closButton = document.querySelector(".popup__close-button"); // нажатие на закрытие формы редактирования
let nameInput = form.querySelector("#name"); // Находим поля формы в DOM
let jobInput = form.querySelector("#sign"); // Воспользуйтесь инструментом .querySelector()

let profile = document.querySelector(".profile");
let profileName = profile.querySelector(".profile__name"); // Выберите элементы, куда должны быть вставлены значения полей
let profileSign = profile.querySelector(".profile__sign");

function popupVisible() {
  popup.classList.add("popup_visible");

  nameInput.value = profileName.textContent;
  jobInput.value = profileSign.textContent;
}

function popupInvisible() {
  popup.classList.remove("popup_visible");
}

function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  let newName = popup.querySelector("#name").value; // Получите значение полей jobInput и nameInput из свойства value
  let newSign = popup.querySelector("#sign").value;

  profileName.textContent = newName; // Вставьте новые значения с помощью textContent
  profileSign.textContent = newSign;

  popupInvisible()  // закрываем попап при нажатии на сохранить
}

editButton.addEventListener("click", popupVisible);
closButton.addEventListener("click", popupInvisible);
form.addEventListener("submit", formSubmitHandler); // он будет следить за событием “submit” - «отправка»
