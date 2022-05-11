export class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }
  open() {
    this._popup.classList.add("popup_visible");
    document.addEventListener('keydown', this._handleEscClose); 
    this.setEventListeners();
  };

  close() {
    this._popup.classList.remove("popup_visible");
    document.removeEventListener('keydown', this.__handleEscClose);
  };

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close(); 
      }
  };

  setEventListeners() {
    this._popup.addEventListener("mousedown", (evt) => {
      if (evt.target.classList.contains("popup_visible")) {
        this.close();
      }
      if (evt.target.classList.contains("popup__close-button")) {
        this.close();
      }
    });
  }
} 
