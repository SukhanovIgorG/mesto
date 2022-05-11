import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this.popup = document.querySelector(popupSelector);
    this.popupPhotoImage = this.popup.querySelector(".popup__img");
    this.popupPhotoTitle = this.popup.querySelector(".popup__photo-title");

  }
  open(name, link) {
    this.popupPhotoImage.src = link
    this.popupPhotoImage.alt = name;
    this.popupPhotoTitle.textContent = name;
    super.open();
  }
};
