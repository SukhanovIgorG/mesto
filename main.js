(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._cardSelector=n,this._handleZoomImage=r}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._cardImage=this._element.querySelector("img"),this._setListeners(),this._element.querySelector(".card__title").textContent=this._name,this._cardImage.src=this._link,this._cardImage.alt=this._name,this._element}},{key:"_setListeners",value:function(){var e=this;this._trashButton=this._element.querySelector(".card__trash"),this._likeButton=this._element.querySelector(".card__like"),this._trashButton.addEventListener("click",(function(){e._handleDeliteCard()})),this._likeButton.addEventListener("click",(function(){e._handleLikeCard()})),this._cardImage.addEventListener("click",(function(){e._handleZoomImage(e._name,e._link)}))}},{key:"_handleDeliteCard",value:function(){this._element.remove(),this._element=null}},{key:"_handleLikeCard",value:function(){this._likeButton.classList.toggle("card__like_active")}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupSelector=t,this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,r;return t=e,(r=[{key:"open",value:function(){this._popup.classList.add("popup_visible"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_visible"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_visible")&&e.close(),t.target.classList.contains("popup__close-button")&&e.close()}))}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(){return a="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=u(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},a.apply(this,arguments)}function u(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=l(e)););return e}function c(e,t){return c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},c(e,t)}function s(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}var f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&c(e,t)}(f,e);var t,n,r,o,u=(r=f,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=l(r);if(o){var n=l(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return s(this,e)});function f(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),(t=u.call(this,e)).popup=document.querySelector(e),t.popupPhotoImage=t.popup.querySelector(".popup__img"),t.popupPhotoTitle=t.popup.querySelector(".popup__photo-title"),t}return t=f,(n=[{key:"open",value:function(e,t){this.popupPhotoImage.src=t,this.popupPhotoImage.alt=e,this.popupPhotoTitle.textContent=e,a(l(f.prototype),"open",this).call(this)}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),f}(r);function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(){return _="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=y(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},_.apply(this,arguments)}function y(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=b(e)););return e}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function m(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return v(e)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=b(r);if(o){var n=b(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return m(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._popup=document.querySelector(e),n._submitForm=t,n._formSubmitHandler=n._formSubmitHandler.bind(v(n)),n._form=n._popup.querySelector(".form"),n._inputList=Array.from(n._form.querySelectorAll(".form__input")),console.log("class PPPWF ".concat(e)),n}return t=a,(n=[{key:"_formSubmitHandler",value:function(e){e.preventDefault(),this._submitForm(this._getInputValues())}},{key:"_getInputValues",value:function(){var e=this;return this._place={},this._inputList.forEach((function(t){e._place[t.name]=t.value})),this._place}},{key:"setEventListeners",value:function(){_(b(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",this._formSubmitHandler)}},{key:"close",value:function(){this._form.reset(),_(b(a.prototype),"close",this).call(this)}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(r);function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var w=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"clear",value:function(){this._container.innerHTML=""}},{key:"renderItems",value:function(){var e=this;this.clear(),this._items.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.append(e)}},{key:"addItemBefore",value:function(e){this._container.prepend(e)}}])&&S(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var k=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formSelector=n,this._formElement=document.querySelector(n),this._inputList=Array.from(this._formElement.querySelectorAll(t.inputSelector)),this._buttonElement=this._formElement.querySelector(t.submitButtonSelector)}var t,n;return t=e,(n=[{key:"enableValidation",value:function(){this._setListenerSabmit()}},{key:"resetValidation",value:function(){this._formElement.reset(),this._buttonElement.setAttribute("disabled",!0)}},{key:"_setListenerSabmit",value:function(){this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setInputListeners()}},{key:"_setInputListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput(this._inputList)?this._hasInvalidInput()&&this._buttonElement.setAttribute("disabled",!0):this._buttonElement.removeAttribute("disabled",!0)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_showInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),t.textContent=e.validationMessage,t.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var O=function(){function e(t){var n=t.nameSelector,r=t.signSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(n),this._userSign=document.querySelector(r),this._userAvatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,sign:this._userSign.textContent,avatar:this._userAvatar.link}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.sign,r=e.avatar;this._userName.textContent=t,this._userSign.textContent=n,this._userAvatar.style.backgroundImage="url(".concat(r,")")}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),P=document.querySelector(".profile__edit-button"),C=document.querySelector(".popup_type_edit-profile"),I=(document.querySelector("profile__avatar-edit"),C.querySelector(".form_type_edit-profile")),j=I.querySelector(".form__input_type_name"),q=I.querySelector(".form__input_type_sign"),B=document.querySelector(".profile__add-button"),A=document.querySelector(".profile__avatar-edit"),R=document.querySelector(".popup_type_new-place").querySelector(".form_type_new-place"),T=new O({nameSelector:".profile__name",signSelector:".profile__sign",avatarSelector:".profile__avatar-contein"}),x=new f(".popup_type_photo");x.setEventListeners();var V=new g(".popup_type_new-place",(function(e){cardList.addItemBefore(H(e)),this.close(),M[R.getAttribute("name")].resetValidation()}));V.setEventListeners();var D=new g(".popup_type_edit-profile",(function(e){T.setUserInfo({name:e.name,sign:e.sign}),this.close(),M[I.getAttribute("name")].resetValidation()}));D.setEventListeners();var U=new g(".popup_type_edit-avatar",(function(e){T.setUserInfo({avatar:e.avatar}),this.close(),M[I.getAttribute("name")].resetValidation(),console.log("handleProfileAvatarSubmit in index")}));function H(e){return new t(e,".template",F).generateCard()}function N(){var e=T.getUserInfo();j.value=e.name,q.value=e.sign,D.open()}function F(e,t){x.open(e,t)}U.setEventListeners(),fetch("https://mesto.nomoreparties.co/v1/cohort-41/cards",{headers:{authorization:"93691316-b2f3-4bce-8add-d8eb39969e4b"}}).then((function(e){return e.json()})).then((function(e){var t=new w({items:e,renderer:function(e){t.addItem(H(e))}},".cards-list");t.renderItems()})).catch((function(e){return console.log("ошибка ".concat(e.status))})),fetch("https://nomoreparties.co/v1/cohort-41/users/me",{headers:{authorization:"93691316-b2f3-4bce-8add-d8eb39969e4b"}}).then((function(e){return e.json()})).then((function(e){T.setUserInfo({name:e.name,sign:e.about,avatar:e.avatar})})).catch((function(e){return console.log("ошибка ".concat(e))})),P.addEventListener("click",N),B.addEventListener("click",(function(){V.open()})),A.addEventListener("click",(function(){var e=T.getUserInfo();q.value=e.avatr,U.open(),console.log("func openAvatarPopup")})),P.addEventListener("click",N),B.addEventListener("click",(function(){V.open()}));var z,M={};z={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__button",inactiveButtonClass:"form__button:disabled",inputErrorClass:"form__input_type_error",errorClass:"form__input-error_active"},Array.from(document.querySelectorAll(z.formSelector)).forEach((function(e){var t=new k(z,".".concat(e.getAttribute("name"))),n=e.getAttribute("name");M[n]=t,t.enableValidation()}))})();