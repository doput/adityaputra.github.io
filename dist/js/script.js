//navbar Fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  }
};

//Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');
hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

/*modal
const modalShow = document.getElementById('modal-show');
const modalContainer = document.getElementById('modal-container');
const modalHide = document.getElementById('modal-hide');

modalShow.addEventListener('click', () => {
  modalContainer.classList.remove('hidden');
});

modalHide.addEventListener('click', () => {
  modalContainer.classList.toggle('hidden');
});
*/
