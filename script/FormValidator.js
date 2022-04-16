export class FormValidator {
  constructor(obj, formSelector) {
    (this._inputSelector = obj.inputSelector),
      (this._submitButtonSelector = obj.submitButtonSelector),
      (this._inactiveButtonClass = obj.inactiveButtonClass),
      (this._inputErrorClass = obj.inputErrorClass),
      (this._errorClass = obj.errorClass),
      (this._formSelector = formSelector),
      (this._formElement = document.querySelector(formSelector));
    this._inputList = Array.from(
      this._formElement.querySelectorAll(obj.inputSelector)
    );
    this._buttonElement = this._formElement.querySelector(
      obj.submitButtonSelector
    );
  }

  enableValidation() {
    this._setListenerSabmit();
  }

  _setListenerSabmit() {
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setInputListeners();
  }

  _setInputListeners() {
    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  _toggleButtonState() {
    if (!this._hasInvalidInput(this._inputList)) {
      this._buttonElement.removeAttribute("disabled", true);
    } else if (this._hasInvalidInput()) {
      this._buttonElement.setAttribute("disabled", true);
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _showInputError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._errorClass);
  }

  //================ скрыть текст ошибки =====================
  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = "";
  }
}
