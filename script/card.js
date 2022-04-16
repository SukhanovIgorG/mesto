import { openPopup } from "./utils.js";

export class Card {
  constructor(place, cardSelector) {
    this._name = place.name;
    this._link = place.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setListeners();

    this._element.querySelector(".card__title").textContent = this._name;
    this._element.querySelector("img").src = this._link;
    this._element.querySelector("img").alt = this._name;
    return this._element;
  }

  _setListeners() {
    const trash = this._element.querySelector(".card__trash");
    const like = this._element.querySelector(".card__like");
    const image = this._element.querySelector(".card__image");

    trash.addEventListener("click", () => {
      this._trashHandler();
    });
    like.addEventListener("click", () => {
      this._likeHandler();
    });
    image.addEventListener("click", () => {
      this._zoomHandler();
    });
  }

  _trashHandler() {
    this._element.closest(".card").remove();
  }

  _likeHandler() {
    this._element
      .querySelector(".card__like")
      .classList.toggle("card__like_active");
  }

  _zoomHandler() {
    const popupPhoto = document.querySelector(".popup_type_photo");

    popupPhoto.querySelector(".popup__img").src = this._link;
    popupPhoto.querySelector(".popup__photo-title").textContent = this._name;

    openPopup(popupPhoto);
  }
}
