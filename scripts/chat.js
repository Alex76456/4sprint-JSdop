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


const message = chat.querySelector('.chat__popup-messages');

const messageInput = chat.querySelector('.chat__popup-input');

const chatForm = chat.querySelector('.chat__popup-form');

let string = '\n \n'

function submitForm(event) {
  event.preventDefault();
  message.textContent = message.textContent + string + messageInput.value;
  messageInput.value = '';
};


openButton.addEventListener('click', showPopup);
chatForm.addEventListener('submit', submitForm);