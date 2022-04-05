const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('form__input_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('form__input-error_active');
  };
  
  const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('form__input_type_error');
    errorElement.classList.remove('form__input-error_active');
    errorElement.textContent = '';
  };
  
  const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
    }
  };
  
  const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.form__input'));
    buttonElement = formElement.querySelector('.form__button')
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        buttonElement = formElement.querySelector('.form__button')
        checkInputValidity(formElement, inputElement);
        toggleButtonState(inputList, buttonElement);
      });
    });
  };
  
  function enableValidation() {
    const formList = Array.from(document.querySelectorAll('.form'));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
    setEventListeners(formElement);
    });
  };
  
  enableValidation();

  function hasInvalidInput (inputList) {
    return inputList.some((inputElement) => {
      console.log(!inputElement.validity.valid);
        return !inputElement.validity.valid;
    })
  };

  function toggleButtonState (inputList, buttonElement) {
    if (!hasInvalidInput(inputList)) {
      buttonElement.classList.remove('form__button_inactive');
    } else if (hasInvalidInput(inputList)) {
      buttonElement.classList.add('form__button_inactive');
  };
};



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
