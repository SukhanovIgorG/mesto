import { Popup } from "./Popup.js";

export class PopupWithConfirmTrash extends Popup {
  constructor(popupSelector, submitForm) {
    super(popupSelector),(this._popup = document.querySelector(popupSelector));
    this._submitForm = submitForm;
    this._formSubmitHandler = this._formSubmitHandler.bind(this);
    this._form = this._popup.querySelector('.form');
    this._inputList = Array.from(this._form.querySelectorAll('.form__input'));
  }

  open(id, element) {
    this._cardId = id;
    this._cardElement = element;
    console.log(this._cardId, this._cardElement);
    this.setEventListeners();
    this._popup.classList.add("popup_visible");
    document.addEventListener('keydown', this._handleEscClose); 
  };

  _formSubmitHandler(evt) {
    evt.preventDefault();
    this._submitForm(this._cardId, this._cardElement);
    this.close();
  };

  _getInputValues() {
    this._place = {};
    this._inputList.forEach(input => {
        this._place[input.name] = input.value;
    });
    return this._place;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener( "submit", (evt) => this._formSubmitHandler(evt) );
    document.addEventListener("keydown", (evt) => {
      if (evt.key === 'Enter') {
        this._formSubmitHandler(evt);
        }})
  }

  close() {
    this._form.reset();
    super.close();
  }
}
