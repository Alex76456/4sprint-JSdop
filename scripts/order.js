const choise = document.querySelector('.order__choice');
const choseList = document.querySelector('.order__list');
const choiseButton = choseList.querySelector('.order__list-button');







function makeChoise(event) {

  if (event.target.classList.contains('order__list-button')) {


    let nameCoffe = event.target.parentElement.querySelector('.order__list-title');

    choise.textContent = nameCoffe.textContent;
  }

}


choseList.addEventListener('click', makeChoise);