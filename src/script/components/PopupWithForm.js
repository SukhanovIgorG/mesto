import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, submitForm) {
    super(popupSelector), (this._popup = document.querySelector(popupSelector));
    this._submitForm = submitForm;
    this._formSubmitHandler = this._formSubmitHandler.bind(this);
    this._form = this._popup.querySelector('.form');
    this._inputList = Array.from(this._form.querySelectorAll('.form__input'));
  }

  _formSubmitHandler(evt) {
    evt.preventDefault();
    this._submitForm(this._getInputValues());
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
    this._form.addEventListener( "submit", this._formSubmitHandler );
  }

  close() {
    this._form.reset();
    this._form.removeEventListener( "submit", this._formSubmitHandler );
    super.close();
  }
}
