import { Popup } from "./Popup.js";

export class PopupWithConfirmTrash extends Popup {
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._formSubmitHandler = this._formSubmitHandler.bind(this);
    this._form = this._popup.querySelector('.form');
  }

  open(id, element) {
    this._cardId = id;
    this._cardElement = element;
    super.open();
  };

  _formSubmitHandler(evt) {
    evt.preventDefault();
    this._submitForm(this._cardId, this._cardElement);
  };

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener( "submit", (evt) => this._formSubmitHandler(evt) );
  }

}
