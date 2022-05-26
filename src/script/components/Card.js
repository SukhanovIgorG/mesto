export class Card {
  constructor(place, userId, user, cardSelector, handlers) {
    (this._name = place.name),
      (this._link = place.link),
      (this._likes = place.likes),
      (this._id = place._id),
      (this._owner = place.owner),
      (this._ownerId = place.owner._id),
      (this._userId = userId),
      (this._user = user),
      (this._cardSelector = cardSelector),
      (this._handleZoomImage = handlers.zoom),
      (this._handleTrashCard = handlers.trash);
    (this._addLike = handlers.addLike),
      (this._removeLike = handlers.removeLike);
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
    this._cardImage = this._element.querySelector("img");
    this._setListeners();
    this._likes.forEach((item) => {
      if (item._id === this._userId) {
        this._likeButton.classList.add("card__like_active");
      }
    });
    this._likeCounter.textContent =
      this._likes.length;
    this._element.querySelector(".card__title").textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this.checkId();
    this._element.id = this._id;
    return this._element;
  }

  _setListeners() {
    this._trashButton = this._element.querySelector(".card__trash");
    this._likeButton = this._element.querySelector(".card__like");
    this._likeCounter = this._element.querySelector(".card__like-counter");

    this._trashButton.addEventListener("click", () => {
      this._handleTrashCard(this._id, this._element);
    });
    this._likeButton.addEventListener("click", (evt) => {
      this._checkLikeButton(evt);
    });
    this._cardImage.addEventListener("click", () => {
      this._handleZoomImage(this._name, this._link);
    });
  }

  checkId() {
    if (this._ownerId !== this._userId) {
      this._trashButton.remove();
    }
  }

  _checkLikeButton(evt) {
    if (!evt.target.classList.contains("card__like_active")) {
      this._addLike(this._id);
    } else {
      this._removeLike(this._id);
    }
  }

  changeLikesCounter(counter) {
    this._likeCounter.textContent = counter;
  }
}
