const rectangle = document.querySelector('.scroll__element')

let topPos = rectangle.offsetTop;

function scrollHandler() {
  //let scrollTop = window.pageYOffset;
  //let scrollTop = document.documentElement.scrollTop || window.pageYOffset;
  let scrollTop = document.documentElement.scrollTop;

  if (scrollTop > topPos) {
    rectangle.classList.add('scroll__element_position_top');
  } else if (scrollTop < topPos) {
    rectangle.classList.remove('scroll__element_position_top');
  }
}

window.addEventListener('scroll', scrollHandler);
//document.addEventListener('scroll', scrollHandler);