export class Card {
  constructor(place, userId, user, cardSelector, handlers) {
      (this.name = place.name),
      (this.link = place.link),
      (this._likes = place.likes),
      (this.id = place._id),
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
    this.element = this._getTemplate();
    this._cardImage = this.element.querySelector("img");
    this._setListeners();
    this._likes.forEach((item) => {
      if (item._id === this._userId) {
        this._likeButton.classList.add("card__like_active");
      }
    });
    this._likeCounter.textContent =
      this._likes.length;
    this.element.querySelector(".card__title").textContent = this.name;
    this._cardImage.src = this.link;
    this._cardImage.alt = this.name;
    this.checkId();
    this.element.id = this.id;
    return this.element;
  }

  _setListeners() {
    this._trashButton = this.element.querySelector(".card__trash");
    this._likeButton = this.element.querySelector(".card__like");
    this._likeCounter = this.element.querySelector(".card__like-counter");

    this._trashButton.addEventListener("click", () => {
      this._handleTrashCard(this);
    });
    this._likeButton.addEventListener("click", (evt) => {
      this._checkLikeButton(evt);
    });
    this._cardImage.addEventListener("click", () => {
      this._handleZoomImage(this);
    });
  }

  checkId() {
    if (this._ownerId !== this._userId) {
      this._trashButton.remove();
    }
  }

  _checkLikeButton(evt) {
    if (!evt.target.classList.contains("card__like_active")) {
      this._addLike(this);
    } else {
      this._removeLike(this);
    }
  }

  changeLikesCounter(counter) {
    this._likeCounter.textContent = counter;
  }

  addLikeActive() {
    this._likeButton.classList.add("card__like_active");
  }

  removeLikeActive() {
    this._likeButton.classList.remove("card__like_active");
  }
}
