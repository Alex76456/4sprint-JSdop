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

const messageInput = chat.querySelector('.chat__button');

const chatForm = chat.querySelector('.chat__popup-form');


function submitForm(event) {
  if (event.keyCode === 13) {
    message.insertAdjacentHTML('beforeend', messageInput.value);
    messageInput.value = '';
  }

};

openButton.addEventListener('click', showPopup);
chatForm.addEventListener('submit', submitForm);

/*

// Выполнение функции, когда пользователь отпускает клавишу на клавиатуре
input.addEventListener("keyup", function(event) {
  // Число 13 в "Enter" и клавиши на клавиатуре
  if (event.keyCode === 13) {
    // При необходимости отмените действие по умолчанию
    event.preventDefault();
    // Вызов элемента button одним щелчком мыши
    document.getElementById("myBtn").click();
  }
});


/*

function submitForm(event) {
  event.preventDefault();
  message.textContent = message.textContent + messageInput.value;
  messageInput.textContent = '';
};

*/