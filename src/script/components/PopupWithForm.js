import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, submitForm) {
    super(popupSelector),
    this._popup = document.querySelector(popupSelector)
    this._submitForm = submitForm;
    this._form = document.forms[1];
  };
  _getInputValues() {
    this._formElemOne = this._form.elements[0];
    this._formElemTwo = this._form.elements[1];
    console.log(this._formElemOne.value);
    console.log(this._formElemTwo.value);
  }

  _setEventListeners() {
    console.log('событие установка слушателя в ПопапВизФорм')
    this._form.addEventListener('submit', (evt) => { console.log('событие submit в ПопапВизФорм'); this._submitForm(evt) });
    super._setEventListeners();
  }

  close() {
    this._form.reset();
    super.close();
  }
}
