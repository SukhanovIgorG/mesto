(()=>{"use strict";var e={};function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})})(e);var n=function(){function e(t,n,r,o,i,a){var u=t.name,c=t.link,s=t.likes,l=t.owner,f=t._id,p=t.userId;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=u,this._img=c,this._alt=u,this._template=n,this._handleCardClick=r,this._ownerId=l._id,this._imageId=f,this._likes=s,this._userId=p,this._deleteHandler=o,this._addLike=i,this._removeLike=a,this._likeButton=this._likeButton.bind(this)}var n,r;return n=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._template).content.querySelector(".gallery__card").cloneNode(!0)}},{key:"generateCard",value:function(){var e=this;return this._element=this._getTemplate(),this._element.querySelector(".gallery__button-counter").textContent=this._likes.length,this._likes.forEach((function(t){t._id===e._userId&&e._element.querySelector(".gallery__button").classList.add("gallery__button_like")})),this._removeButton=this._element.querySelector(".gallery__button-delete"),this.checkId(),this._cardImage=this._element.querySelector(".gallery__image"),this._setEventListeners(),this._element.querySelector(".gallery__name").textContent=this._name,this._cardImage.src=this._img,this._cardImage.alt=this._alt,this._element}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".gallery__button").addEventListener("click",this._likeButton),this._removeButton.addEventListener("click",this._deleteHandler),this._cardImage.addEventListener("click",(function(){e._handleCardClick(e._name,e._img,e._alt)}))}},{key:"_likeButton",value:function(e){e.target.classList.contains("gallery__button_like")?(this._element.querySelector(".gallery__button").classList.remove("gallery__button_like"),this._removeLike()):(this._element.querySelector(".gallery__button").classList.add("gallery__button_like"),this._addLike())}},{key:"checkId",value:function(e){this._ownerId!==this._userId&&this._removeButton.remove()}},{key:"removeCard",value:function(){this._element.remove()}},{key:"returnCardId",value:function(){return this._imageId}},{key:"changeLikesCounter",value:function(e){this._element.querySelector(".gallery__button-counter").textContent=e}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("чек респонс Ошибка ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._checkResponse)}},{key:"loadUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._checkResponse)}},{key:"postUserInfo",value:function(e,t){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then(this._checkResponse)}},{key:"postUserAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._checkResponse)}},{key:"postNewCard",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then(this._checkResponse)}},{key:"trashCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"addLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"removeLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(){return u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=c(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},u.apply(this,arguments)}function c(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=f(e)););return e}function s(e,t){return s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},s(e,t)}function l(e,t){if(t&&("object"===i(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(r);if(o){var n=f(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return l(this,e)});function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,e)).popup=document.querySelector(e),t.popupPhotoImage=t.popup.querySelector(".popup__img"),t.popupPhotoTitle=t.popup.querySelector(".popup__photo-title"),t}return t=c,(n=[{key:"open",value:function(e,t){this.popupPhotoImage.src=t,this.popupPhotoImage.alt=e,this.popupPhotoTitle.textContent=e,u(f(c.prototype),"open",this).call(this)}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(e.Popup);function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(){return y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=d(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},y.apply(this,arguments)}function d(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}function m(e,t){return m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},m(e,t)}function v(e,t){if(t&&("object"===h(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return b(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(r);if(o){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return v(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._submitForm=t,n._formSubmitHandler=n._formSubmitHandler.bind(b(n)),n._form=n._popup.querySelector(".form"),n._inputList=Array.from(n._form.querySelectorAll(".form__input")),n}return t=a,(n=[{key:"_formSubmitHandler",value:function(e){e.preventDefault(),this._submitForm(this._getInputValues())}},{key:"_getInputValues",value:function(){var e=this;return this._place={},this._inputList.forEach((function(t){e._place[t.name]=t.value})),this._place}},{key:"setEventListeners",value:function(){y(g(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",this._formSubmitHandler)}},{key:"close",value:function(){this._form.reset(),y(g(a.prototype),"close",this).call(this)}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(e.Popup);function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(){return E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=I(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},E.apply(this,arguments)}function I(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=P(e)););return e}function O(e,t){return O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},O(e,t)}function L(e,t){if(t&&("object"===S(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return C(e)}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e){return P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},P(e)}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&O(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=P(r);if(o){var n=P(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return L(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._popup=document.querySelector(e),n._submitForm=t,n._formSubmitHandler=n._formSubmitHandler.bind(C(n)),n._form=n._popup.querySelector(".form"),n._inputList=Array.from(n._form.querySelectorAll(".form__input")),n._handleEnterSubmit=n._handleEnterSubmit.bind(C(n)),n.close=n.close.bind(C(n)),n}return t=a,(n=[{key:"open",value:function(e,t){this._cardId=e,this._cardElement=t,console.log(this._cardId,this._cardElement),this._popup.classList.add("popup_visible"),this.setEventListeners(),document.addEventListener("keydown",this._handleEscClose),document.addEventListener("keydown",this._handleEnterSubmit)}},{key:"_handleEnterSubmit",value:function(e){"Enter"===e.key&&(console.log("ура сработало"),this._formSubmitHandler(e))}},{key:"_formSubmitHandler",value:function(e){e.preventDefault(),this._submitForm(this._cardId,this._cardElement),this.close()}},{key:"_getInputValues",value:function(){var e=this;return this._place={},this._inputList.forEach((function(t){e._place[t.name]=t.value})),this._place}},{key:"setEventListeners",value:function(){var e=this;E(P(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){return e._formSubmitHandler(t)}))}},{key:"close",value:function(){this._form.reset(),document.removeEventListener("keydown",this._handleEnterSubmit),E(P(a.prototype),"close",this).call(this)}}])&&w(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(e.Popup);function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var R=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=t,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"clear",value:function(){this._container.innerHTML=""}},{key:"renderItems",value:function(e){var t=this;this.clear(),e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.append(e)}},{key:"addItemBefore",value:function(e){this._container.prepend(e)}}])&&q(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var A=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formSelector=n,this._formElement=document.querySelector(n),this._inputList=Array.from(this._formElement.querySelectorAll(t.inputSelector)),this._buttonElement=this._formElement.querySelector(t.submitButtonSelector)}var t,n;return t=e,(n=[{key:"enableValidation",value:function(){this._setListenerSabmit()}},{key:"resetValidation",value:function(){this._formElement.reset(),this._toggleButtonState()}},{key:"_setListenerSabmit",value:function(){this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setInputListeners()}},{key:"_setInputListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput(this._inputList)?this._hasInvalidInput()&&this._buttonElement.setAttribute("disabled",!0):this._buttonElement.removeAttribute("disabled",!0)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_showInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),t.textContent=e.validationMessage,t.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}}])&&U(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var T=function(){function e(t){var n=t.nameSelector,r=t.signSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(n),this._userSign=document.querySelector(r),this._userAvatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"loadUserInfo",value:function(e){var t=e.name,n=e.sign,r=e.avatar;this._userName.textContent=t,this._userSign.textContent=n,this._userAvatar.style.backgroundImage="url(".concat(r,")")}},{key:"getUserInfo",value:function(){return{name:this._userName.textContent,sign:this._userSign.textContent,avatar:this._userAvatar.link}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.sign;this._userName.textContent=t,this._userSign.textContent=n}},{key:"setUserAvatar",value:function(e){var t=e.avatar;this._userAvatar.style.backgroundImage="url(".concat(t,")")}},{key:"getUserAvatar",value:function(){return{avatar:this._userAvatar.style.backgroundImage}}},{key:"setUserId",value:function(e){this._userId=e}},{key:"returnUserId",value:function(){return this._userId}}])&&B(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),x=document.querySelector(".profile__edit-button"),H=document.querySelector(".popup_type_edit-profile"),D=document.querySelector(".profile__avatar-edit"),N=H.querySelector(".form_type_edit-profile"),V=N.querySelector(".form__input_type_name"),F=N.querySelector(".form__input_type_sign"),M=document.querySelector(".form_type_edit-avatar"),J=(M.querySelector(".form__input_type_avatar"),document.querySelector(".profile__add-button")),z=document.querySelector(".popup_type_new-place").querySelector(".form_type_new-place"),G=new T({nameSelector:".profile__name",signSelector:".profile__sign",avatarSelector:".profile__avatar-contein"}),K=new p(".popup_type_photo");K.setEventListeners();var Q=new k(".popup_type_new-place",(function(e){oe(".popup_type_new-place",!0),Z.postNewCard(e.name,e.link).then((function(e){$.addItemBefore(ee(e)),oe(".popup_type_new-place",!1)})).catch((function(e){console.log("ошибка обращения к api.postNewCard ".concat(e))})),Q.close(),re[z.getAttribute("name")].resetValidation()}));Q.setEventListeners();var W=new k(".popup_type_edit-profile",(function(e){oe(".popup_type_edit-profile",!0),Z.postUserInfo(e.name,e.sign).then((function(e){G.setUserInfo({name:e.name,sign:e.about})})).catch((function(e){console.log("ошибка обращения к api.postUserInfo ".concat(e))})).finally((function(){oe(".popup_type_edit-profile",!1),W.close()})),re[N.getAttribute("name")].resetValidation()}));W.setEventListeners();var X=new k(".popup_type_edit-avatar",(function(e){oe(".popup_type_edit-avatar",!0),Z.postUserAvatar(e.avatar).then((function(e){G.setUserAvatar({avatar:e.avatar})})).catch((function(e){console.log("ошибка обращения к api.postUserAvatar ".concat(e))})).finally((function(){oe(".popup_type_edit-avatar",!1),X.close()})),re[M.getAttribute("name")].resetValidation()}));X.setEventListeners();var Y=new j(".popup_type_confirm-trash",(function(e,t){Z.trashCard(e).then((function(){t.remove(),t=null})).catch((function(e){console.log("ошибка обращения к api.treshCard ".concat(e))}))})),Z=new o({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-41",headers:{authorization:"93691316-b2f3-4bce-8add-d8eb39969e4b","Content-Type":"application/json"}}),$=new R((function(e){$.addItem(ee(e))}),".cards-list");function ee(e){var t=new n(e,G.returnUserId(),G.getUserInfo(),".template",{zoom:te,addLike:function(e){Z.addLike(e).then((function(e){t.changeLikesCounter(e.likes.length),t._likeButton.classList.add("card__like_active")}))},removeLike:function(e){Z.removeLike(e).then((function(e){t.changeLikesCounter(e.likes.length),t._likeButton.classList.remove("card__like_active")}))},trash:function(e,t){Y.open(e,t)}});return t.generateCard()}function te(e,t){K.open(e,t)}Z.getInitialCards().then((function(e){$.renderItems(e)})),Z.loadUserInfo().then((function(e){G.loadUserInfo({name:e.name,sign:e.about,avatar:e.avatar}),G.setUserId(e._id)})).catch((function(e){console.log("ошибка обращения к api.loadUserInfo ".concat(e))})),x.addEventListener("click",(function(){var e=G.getUserInfo();V.value=e.name,F.value=e.sign,W.open()})),D.addEventListener("click",(function(){X.open()})),J.addEventListener("click",(function(){Q.open()}));var ne,re={};function oe(e,t){document.querySelector(e).querySelector(".form__button").textContent=t?"Сохранение...":".popup_type_new-place"===e?"Создать":"Сохранить"}ne={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__button",inactiveButtonClass:"form__button:disabled",inputErrorClass:"form__input_type_error",errorClass:"form__input-error_active"},Array.from(document.querySelectorAll(ne.formSelector)).forEach((function(e){var t=new A(ne,".".concat(e.getAttribute("name"))),n=e.getAttribute("name");re[n]=t,t.enableValidation()}))})();