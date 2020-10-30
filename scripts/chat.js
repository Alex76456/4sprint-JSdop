const chat = document.querySelector('.chat');

const popup = chat.querySelector('.chat__popup');

const openButton = chat.querySelector('.chat__button');



function showPopup() {
  if (popup.classList.contains('chat__popup_opened')) {
    popup.classList.remove('chat__popup_opened');
  } else {
    popup.classList.add('chat__popup_opened');
  }
}


openButton.addEventListener('click', showPopup);