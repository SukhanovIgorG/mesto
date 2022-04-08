//================ показать текст ошибки =====================
const showInputError = (formElement, inputElement, errorMessage, {inputErrorClass, errorClass}) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
  };

//================ скрыть текст ошибки =====================
  const hideInputError = (formElement, inputElement, {inputErrorClass, errorClass}) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
  };
//================ проверка формы на валидность =====================  
  const checkInputValidity = (formElement, inputElement, ...rest) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage, rest);
    } else {
      hideInputError(formElement, inputElement, rest);
    }
  };
//================ установить слушатели на инпуты =====================  
  const setEventListeners = (formElement, {inputSelector, submitButtonSelector, ...rest}) => {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector)
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement, rest);
        toggleButtonState(inputList, buttonElement);
      });
    });
  };

//================ установить слушатели отправки на формы =====================
  function enableValidation({ formSelector, ...rest }) {
    const formList = Array.from(document.querySelectorAll(formSelector));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
    setEventListeners(formElement, rest);
    });
  };

//================ вызов (включение валидации) =====================  
  enableValidation({
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button:disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active',
}); 

//================показать текст ошибки=====================
  function hasInvalidInput (inputList) {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    })
  };
//================ включение / отключеие кнопки отправки =====================
  function toggleButtonState (inputList, buttonElement) {
    if (!hasInvalidInput(inputList)) {
      buttonElement.removeAttribute('disabled', true);
    } else if (hasInvalidInput(inputList)) {
      buttonElement.setAttribute('disabled', true);
  };
};



//================ способ неуниверсальный =====================

// const forms = Array.from(document.querySelectorAll('.form'));


// forms.forEach((form) => {
//   const inputs = Array.from(form.querySelectorAll('.form__input'));
//   inputs.forEach((input) => {
//     const button = form.querySelector(`.${form.id}-button`);

//     input.addEventListener('input', (evt) => {
//       const error = form.querySelector(`.${input.id}-error`);
//       error.textContent = input.validationMessage;
//       if (!input.validity.valid) {
//         button.classList.add('form__button_inactive')
//       } else {
//         button.classList.remove('form__button_inactive')
//       }
//     })
//   })
// })
