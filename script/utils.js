export function openPopup(popupElement) {
    popupElement.classList.add("popup_visible");
    popupElement.addEventListener('keydown', closeByEsc);
  } 

export function closedPopup(popupElement) {
    popupElement.classList.remove("popup_visible");
    popupElement.removeEventListener('keydown', closeByEsc);
  }

  function closeByEsc(evt) {
    if (evt.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_visible');
      closedPopup(openedPopup); 
    }
  }
export  function setClickOverListener(array) {
    array.forEach((element) => {
      element.addEventListener('click', (evt) => {
        if (evt.target === evt.currentTarget) {
          closedPopup(element)
        }
       });
    })
  };
