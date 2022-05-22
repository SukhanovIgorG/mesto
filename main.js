(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=e.baseUrl,this._headers=e.headers,console.log("option ".concat(e)),console.log(this._baseUrl),console.log(this._headers)}var n,r;return n=t,(r=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._checkResponse)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._checkResponse)}},{key:"postNewCard",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then(this._checkResponse)}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupSelector=t,this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,r;return t=e,(r=[{key:"open",value:function(){this._popup.classList.add("popup_visible"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_visible"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_visible")&&e.close(),t.target.classList.contains("popup__close-button")&&e.close()}))}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(){return a="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=u(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},a.apply(this,arguments)}function u(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=l(e)););return e}function s(e,t){return s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},s(e,t)}function c(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}var f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)}(f,e);var t,n,r,o,u=(r=f,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=l(r);if(o){var n=l(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return c(this,e)});function f(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),(t=u.call(this,e)).popup=document.querySelector(e),t.popupPhotoImage=t.popup.querySelector(".popup__img"),t.popupPhotoTitle=t.popup.querySelector(".popup__photo-title"),t}return t=f,(n=[{key:"open",value:function(e,t){this.popupPhotoImage.src=t,this.popupPhotoImage.alt=e,this.popupPhotoTitle.textContent=e,a(l(f.prototype),"open",this).call(this)}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),f}(r);function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(){return y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=_(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},y.apply(this,arguments)}function _(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=b(e)););return e}function v(e,t){return v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},v(e,t)}function d(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return m(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=b(r);if(o){var n=b(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return d(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._popup=document.querySelector(e),n._submitForm=t,n._formSubmitHandler=n._formSubmitHandler.bind(m(n)),n._form=n._popup.querySelector(".form"),n._inputList=Array.from(n._form.querySelectorAll(".form__input")),console.log("class PPPWF ".concat(e)),n}return t=a,(n=[{key:"_formSubmitHandler",value:function(e){e.preventDefault(),this._submitForm(this._getInputValues())}},{key:"_getInputValues",value:function(){var e=this;return this._place={},this._inputList.forEach((function(t){e._place[t.name]=t.value})),this._place}},{key:"setEventListeners",value:function(){y(b(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",this._formSubmitHandler)}},{key:"close",value:function(){this._form.reset(),y(b(a.prototype),"close",this).call(this)}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(r);function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var w=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"clear",value:function(){this._container.innerHTML=""}},{key:"renderItems",value:function(){var e=this;this.clear(),this._items.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.append(e)}},{key:"addItemBefore",value:function(e){this._container.prepend(e)}}])&&S(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var k=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formSelector=n,this._formElement=document.querySelector(n),this._inputList=Array.from(this._formElement.querySelectorAll(t.inputSelector)),this._buttonElement=this._formElement.querySelector(t.submitButtonSelector)}var t,n;return t=e,(n=[{key:"enableValidation",value:function(){this._setListenerSabmit()}},{key:"resetValidation",value:function(){this._formElement.reset(),this._buttonElement.setAttribute("disabled",!0)}},{key:"_setListenerSabmit",value:function(){this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setInputListeners()}},{key:"_setInputListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput(this._inputList)?this._hasInvalidInput()&&this._buttonElement.setAttribute("disabled",!0):this._buttonElement.removeAttribute("disabled",!0)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_showInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),t.textContent=e.validationMessage,t.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var C=function(){function e(t){var n=t.nameSelector,r=t.signSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(n),this._userSign=document.querySelector(r),this._userAvatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"loadUserInfo",value:function(e){var t=e.name,n=e.sign,r=e.avatar;this._userName.textContent=t,this._userSign.textContent=n,this._userAvatar.style.backgroundImage="url(".concat(r,")")}},{key:"getUserInfo",value:function(){return{name:this._userName.textContent,sign:this._userSign.textContent,avatar:this._userAvatar.link}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.sign;this._userName.textContent=t,this._userSign.textContent=n}},{key:"getUserAvatar",value:function(){return{avatar:this._userAvatar.style.backgroundImage}}},{key:"setUserAvatar",value:function(e){var t=e.avatar;console.log(t),this._userAvatar.style.backgroundImage="url(".concat(t,")")}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),P=document.querySelector(".profile__edit-button"),j=document.querySelector(".popup_type_edit-profile"),I=document.querySelector(".profile__avatar-edit"),L=j.querySelector(".form_type_edit-profile"),q=L.querySelector(".form__input_type_name"),A=L.querySelector(".form__input_type_sign"),R=document.querySelector(".form_type_edit-avatar"),U=R.querySelector(".form__input_type_avatar"),B=document.querySelector(".profile__add-button"),T=document.querySelector(".popup_type_new-place").querySelector(".form_type_new-place"),x=new C({nameSelector:".profile__name",signSelector:".profile__sign",avatarSelector:".profile__avatar-contein"});new f(".popup_type_photo").setEventListeners();var V=new g(".popup_type_new-place",(function(e){H.postNewCard(e.name,e.link).then((function(e){return cardList.addItemBefore(generateCard(e))})),this.close(),M[T.getAttribute("name")].resetValidation()}));V.setEventListeners();var N=new g(".popup_type_edit-profile",(function(e){x.setUserInfo({name:e.name,sign:e.sign}),this.close(),M[L.getAttribute("name")].resetValidation()}));N.setEventListeners();var D=new g(".popup_type_edit-avatar",(function(e){x.setUserAvatar({avatar:e.avatar}),this.close(),M[R.getAttribute("name")].resetValidation(),console.log("handleProfileAvatarSubmit in index")}));D.setEventListeners();var H=new t({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-41",headers:{authorization:"93691316-b2f3-4bce-8add-d8eb39969e4b","Content-Type":"application/json"}});H.getInitialCards().then((function(e){var t=new w({items:e,renderer:function(e){t.addItem(generateCard(e))}},".cards-list");t.renderItems()})),H.getUserInfo().then((function(e){return e.json()})).then((function(e){x.loadUserInfo({name:e.name,sign:e.about,avatar:e.avatar})})).catch((function(e){return console.log("ошибка ".concat(e))})),P.addEventListener("click",(function(){var e=x.getUserInfo();q.value=e.name,A.value=e.sign,N.open()})),I.addEventListener("click",(function(){var e=x.getUserAvatar();U.value=e.avatar,D.open()})),B.addEventListener("click",(function(){V.open()}));var F,M={};F={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__button",inactiveButtonClass:"form__button:disabled",inputErrorClass:"form__input_type_error",errorClass:"form__input-error_active"},Array.from(document.querySelectorAll(F.formSelector)).forEach((function(e){var t=new k(F,".".concat(e.getAttribute("name"))),n=e.getAttribute("name");M[n]=t,t.enableValidation()}))})();