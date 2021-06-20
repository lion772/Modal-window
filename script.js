'use strict';

const showModal = document.querySelectorAll('.show-modal');
const openModal = document.querySelector('.openModal');
const closeModal = document.querySelector('.closeModal');
const overlay = document.querySelector('.overlay');

console.log(showModal);

const showModalFunction = () => {
  openModal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModalOverlayFunction = () => {
  openModal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let index = 0; index < showModal.length; index++) {
  console.log(showModal[index]);
  showModal[index].addEventListener('click', showModalFunction);
}

closeModal.addEventListener('click', closeModalOverlayFunction);
overlay.addEventListener('click', closeModalOverlayFunction);

//Handling key press events - global events / keyboard events

document.addEventListener('keydown', function (e) {
  //listening for events everywhere
  console.log(e);
  if (e.key === 'Escape' && !openModal.classList.contains('hidden')) {
    closeModalOverlayFunction();
  }
});
