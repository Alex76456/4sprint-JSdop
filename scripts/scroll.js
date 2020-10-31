const rectangle = document.querySelector('.scroll__element')


function scrollHandler(e) {
  if (window.scrollY > 1400) {
    rectangle.classList.add('scroll__element_position_top');
  } else {
    rectangle.classList.remove('scroll__element_position_top');
  }
}


document.addEventListener('scroll', scrollHandler);