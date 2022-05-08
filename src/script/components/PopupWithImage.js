import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(place, popupSelector) {
    super(popupSelector);
    this.popup = document.querySelector(popupSelector);
    // this.popupPhotoImage = this.popup.querySelector(".popup__img");
    this.popupPhotoTitle = this.popup.querySelector(".popup__photo-title");
    this.link = place.link;
    this.name = place.name;
    console.log(this.link);
    console.log(this.name);

  }
  open() {
    // this.popupPotoImage.src = this.link; // конструкция не срабатывает
    // this.popupPotoImage.alt = this.name; // конструкция не срабатывает
    this.popup.querySelector(".popup__img").src = this.link
    this.popup.querySelector(".popup__img").alt = this.name;
    this.popupPhotoTitle.textContent = this.name;
    super.open();
  }
};
