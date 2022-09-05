const startAddMovieButton = document.querySelector('header button');
const popupMovieModal = document.getElementById('add-modal');
const modal = document.querySelector('.modal');
const backdropElement = document.getElementById('backdrop');
const cancelButton = popupMovieModal.querySelector('.btn--passive');

const backdropHandler = () => {
  backdropElement.classList.toggle('visible');
};

const removeBackdropHandler = () => {
  modal.classList.remove('visible');
  backdropElement.classList.remove('visible');
};

const popupMovieModalHandler = () => {
  popupMovieModal.classList.toggle('visible');
  backdropHandler();
};

backdropElement.addEventListener('click', removeBackdropHandler);
cancelButton.addEventListener('click', removeBackdropHandler);
startAddMovieButton.addEventListener('click', popupMovieModalHandler);
