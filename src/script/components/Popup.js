export class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._popup = document.querySelector(popupSelector);
  }
  open() {
    this._popup.classList.add("popup_visible");
    document.addEventListener('keydown', (evt) => {
      this._handleEscClose(evt.key)}); 
    this._setEventListeners();
  };

  close() {
    this._popup.classList.remove("popup_visible");
    document.removeEventListener('keydown', (evt) => {this.__handleEscClose(evt)});
  };

  _handleEscClose(key) {
    if (key === 'Escape') {
      this.close(); 
      }
  };

  _setEventListeners() {
    this._popup.addEventListener("mousedown", (evt) => {
      if (evt.target.classList.contains("popup_visible")) {
        console.log('жмакнули черное поле');
        // const currentPopup = new Popup(`.${popup.classList[1]}`);
        const currentPopup = new Popup(`.${this._popup.id}`);
        currentPopup.close();
      }
      if (evt.target.classList.contains("popup__close-button")) {
        console.log('жмакнули крестик');
        // const currentPopup = new Popup(`.${popup.classList[1]}`);
        const currentPopup = new Popup(`.${this._popup.id}`);
        currentPopup.close();
      }
    });
  }
} 
