export class Card {
  constructor(place, cardSelector, handleZoomImage) {
    this._name = place.name;
    this._link = place.link;
    this._cardSelector = cardSelector;
    this._handleZoomImage = handleZoomImage;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector("img")
    this._setListeners();

    this._element.querySelector(".card__title").textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    return this._element;
  }

  _setListeners() {
    this._trashButton = this._element.querySelector(".card__trash");
    this._likeButton = this._element.querySelector(".card__like");

    this._trashButton.addEventListener("click", () => {
      this._handleDeliteCard();
    });
    this._likeButton.addEventListener("click", () => {
      this._handleLikeCard();
    });
    this._cardImage.addEventListener("click", () => {
      this._handleZoomImage(this._name, this._link);
    });
  }

  _handleDeliteCard() {
    this._element.closest(".card").remove();
  }

  _handleLikeCard() {
      this._likeButton
      .classList.toggle("card__like_active");
  }

}
