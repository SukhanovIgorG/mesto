import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this.popupPhotoImage = this._popup.querySelector(".popup__img");
    this.popupPhotoTitle = this._popup.querySelector(".popup__photo-title");

  }
  open(name, link) {
    this.popupPhotoImage.src = link
    this.popupPhotoImage.alt = name;
    this.popupPhotoTitle.textContent = name;
    super.open();
  }
};
