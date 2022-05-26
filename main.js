(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._likes=e.likes,this._id=e._id,this._owner=e.owner,this._ownerId=e.owner._id,this._userId=n,this._user=r,this._cardSelector=o,this._handleZoomImage=i.zoom,this._handleTrashCard=i.trash,this._addLike=i.addLike,this._removeLike=i.removeLike}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(!0)}},{key:"generateCard",value:function(){var e=this;return this._element=this._getTemplate(),this._cardImage=this._element.querySelector("img"),this._setListeners(),this._likes.forEach((function(t){t._id===e._userId&&e._likeButton.classList.add("card__like_active")})),this._likeCounter.textContent=this._likes.length,this._element.querySelector(".card__title").textContent=this._name,this._cardImage.src=this._link,this._cardImage.alt=this._name,this.checkId(),this._element.id=this._id,this._element}},{key:"_setListeners",value:function(){var e=this;this._trashButton=this._element.querySelector(".card__trash"),this._likeButton=this._element.querySelector(".card__like"),this._likeCounter=this._element.querySelector(".card__like-counter"),this._trashButton.addEventListener("click",(function(){e._handleTrashCard(e)})),this._likeButton.addEventListener("click",(function(t){e._checkLikeButton(t)})),this._cardImage.addEventListener("click",(function(){e._handleZoomImage(e)}))}},{key:"checkId",value:function(){this._ownerId!==this._userId&&this._trashButton.remove()}},{key:"_checkLikeButton",value:function(e){e.target.classList.contains("card__like_active")?this._removeLike(this):this._addLike(this)}},{key:"changeLikesCounter",value:function(e){this._likeCounter.textContent=e}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}var t,r;return t=e,(r=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("чек респонс Ошибка ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._checkResponse)}},{key:"loadUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._checkResponse)}},{key:"postUserInfo",value:function(e,t){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then(this._checkResponse)}},{key:"postUserAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._checkResponse)}},{key:"postNewCard",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then(this._checkResponse)}},{key:"trashCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"addLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"removeLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupSelector=t,this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_visible"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_visible"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_visible")&&e.close(),t.target.classList.contains("popup__close-button")&&e.close()}))}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(){return u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=s(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},u.apply(this,arguments)}function s(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=p(e)););return e}function l(e,t){return l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},l(e,t)}function f(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=p(r);if(o){var n=p(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return f(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e)).popupPhotoImage=t.popup.querySelector(".popup__img"),t.popupPhotoTitle=t.popup.querySelector(".popup__photo-title"),t}return t=a,(n=[{key:"open",value:function(e,t){this.popupPhotoImage.src=t,this.popupPhotoImage.alt=e,this.popupPhotoTitle.textContent=e,u(p(a.prototype),"open",this).call(this)}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(i);function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(){return d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=m(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},d.apply(this,arguments)}function m(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}function v(e,t){return v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},v(e,t)}function b(e,t){if(t&&("object"===_(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return k(e)}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(r);if(o){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._submitForm=t,n._formSubmitHandler=n._formSubmitHandler.bind(k(n)),n._form=n._popup.querySelector(".form"),n._inputList=Array.from(n._form.querySelectorAll(".form__input")),n}return t=a,(n=[{key:"_formSubmitHandler",value:function(e){e.preventDefault(),this._submitForm(this._getInputValues())}},{key:"_getInputValues",value:function(){var e=this;return this._place={},this._inputList.forEach((function(t){e._place[t.name]=t.value})),this._place}},{key:"setEventListeners",value:function(){d(g(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",this._formSubmitHandler)}},{key:"close",value:function(){this._form.reset(),d(g(a.prototype),"close",this).call(this)}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(i);function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function L(){return L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=O(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},L.apply(this,arguments)}function O(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=j(e)););return e}function I(e,t){return I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},I(e,t)}function C(e,t){if(t&&("object"===S(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return P(e)}function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}var q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&I(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(r);if(o){var n=j(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return C(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._submitForm=t,n._formSubmitHandler=n._formSubmitHandler.bind(P(n)),n._form=n._popup.querySelector(".form"),n}return t=a,(n=[{key:"open",value:function(e,t){this._cardId=e,this._cardElement=t,L(j(a.prototype),"open",this).call(this)}},{key:"_formSubmitHandler",value:function(e){e.preventDefault(),this._submitForm(this)}},{key:"_getInputValues",value:function(){var e=this;return this._place={},this._inputList.forEach((function(t){e._place[t.name]=t.value})),this._place}},{key:"setEventListeners",value:function(){var e=this;L(j(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){return e._formSubmitHandler(t)}))}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(i);function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var U=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=t,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"clear",value:function(){this._container.innerHTML=""}},{key:"renderItems",value:function(e){var t=this;this.clear(),e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.append(e)}},{key:"addItemBefore",value:function(e){this._container.prepend(e)}}])&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var T=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formSelector=n,this._formElement=document.querySelector(n),this._inputList=Array.from(this._formElement.querySelectorAll(t.inputSelector)),this._buttonElement=this._formElement.querySelector(t.submitButtonSelector)}var t,n;return t=e,(n=[{key:"enableValidation",value:function(){this._setListenerSabmit()}},{key:"resetValidation",value:function(){this._formElement.reset(),this._toggleButtonState()}},{key:"_setListenerSabmit",value:function(){this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setInputListeners()}},{key:"_setInputListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput(this._inputList)?this._hasInvalidInput()&&this._buttonElement.setAttribute("disabled",!0):this._buttonElement.removeAttribute("disabled",!0)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_showInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),t.textContent=e.validationMessage,t.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}}])&&B(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var x=function(){function e(t){var n=t.nameSelector,r=t.signSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(n),this._userSign=document.querySelector(r),this._userAvatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,about:this._userSign.textContent,avatar:this._userAvatar.link}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about,r=e.avatar;this._userName.textContent=t,this._userSign.textContent=n,this._userAvatar.style.backgroundImage="url(".concat(r,")")}},{key:"getUserAvatar",value:function(){return{avatar:this._userAvatar.style.backgroundImage}}},{key:"returnUserId",value:function(){return this._userId}}])&&A(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),D=document.querySelector(".profile__edit-button"),H=document.querySelector(".popup_type_edit-profile"),V=document.querySelector(".profile__avatar-edit"),N=H.querySelector(".form_type_edit-profile"),F=N.querySelector(".form__input_type_name"),z=N.querySelector(".form__input_type_sign"),J=document.querySelector(".form_type_edit-avatar"),M=(J.querySelector(".form__input_type_avatar"),document.querySelector(".profile__add-button")),Z=document.querySelector(".popup_type_new-place").querySelector(".form_type_new-place"),G=new x({nameSelector:".profile__name",signSelector:".profile__sign",avatarSelector:".profile__avatar-contein"}),K=new h(".popup_type_photo");K.setEventListeners();var Q=new w(".popup_type_new-place",(function(e){oe(".popup_type_new-place",!0),$.postNewCard(e.name,e.link).then((function(e){ee.addItemBefore(te(e)),oe(".popup_type_new-place",!1)})).catch((function(e){console.log("ошибка обращения к api.postNewCard ".concat(e))})),Q.close(),re[Z.getAttribute("name")].resetValidation()}));Q.setEventListeners();var W=new w(".popup_type_edit-profile",(function(e){oe(".popup_type_edit-profile",!0),$.postUserInfo(e.name,e.about).then((function(e){G.setUserInfo({name:e.name,about:e.about,avatar:e.avatar})})).catch((function(e){console.log("ошибка обращения к api.postUserInfo ".concat(e))})).finally((function(){oe(".popup_type_edit-profile",!1),W.close()})),re[N.getAttribute("name")].resetValidation()}));W.setEventListeners();var X=new w(".popup_type_edit-avatar",(function(e){oe(".popup_type_edit-avatar",!0),$.postUserAvatar(e.avatar).then((function(e){G.setUserInfo({name:e.name,about:e.about,avatar:e.avatar})})).catch((function(e){console.log("ошибка обращения к api.postUserAvatar ".concat(e))})).finally((function(){oe(".popup_type_edit-avatar",!1),X.close()})),re[J.getAttribute("name")].resetValidation()}));X.setEventListeners();var Y=new q(".popup_type_confirm-trash",(function(){$.trashCard(Y._cardId).then((function(){Y._cardElement.remove(),Y._cardElement=null})).then(Y.close()).catch((function(e){console.log("ошибка обращения к api.treshCard ".concat(e))}))}));Y.setEventListeners();var $=new r({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-41",headers:{authorization:"93691316-b2f3-4bce-8add-d8eb39969e4b","Content-Type":"application/json"}}),ee=new U((function(e){ee.addItem(te(e))}),".cards-list");function te(e){var n=new t(e,G.returnUserId(),G.getUserInfo(),".template",{zoom:function(){K.open(n._name,n._link)},addLike:function(){$.addLike(n._id).then((function(e){n.changeLikesCounter(e.likes.length),n._likeButton.classList.add("card__like_active")}))},removeLike:function(){$.removeLike(n._id).then((function(e){n.changeLikesCounter(e.likes.length),n._likeButton.classList.remove("card__like_active")}))},trash:function(){Y.open(n._id,n._element)}});return n.generateCard()}$.getInitialCards().then((function(e){ee.renderItems(e)})),$.setUserInfo().then((function(e){G.setUserInfo({name:e.name,about:e.about,avatar:e.avatar})})).catch((function(e){console.log("ошибка обращения к api.loadUserInfo ".concat(e))})),D.addEventListener("click",(function(){var e=G.getUserInfo();F.value=e.name,z.value=e.about,W.open()})),V.addEventListener("click",(function(){X.open()})),M.addEventListener("click",(function(){Q.open()}));var ne,re={};function oe(e,t){document.querySelector(e).querySelector(".form__button").textContent=t?"Сохранение...":".popup_type_new-place"===e?"Создать":"Сохранить"}ne={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__button",inactiveButtonClass:"form__button:disabled",inputErrorClass:"form__input_type_error",errorClass:"form__input-error_active"},Array.from(document.querySelectorAll(ne.formSelector)).forEach((function(e){var t=new T(ne,".".concat(e.getAttribute("name"))),n=e.getAttribute("name");re[n]=t,t.enableValidation()}))})();