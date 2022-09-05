const startAddMovieButton = document.querySelector('header button');
const showMovie = document.getElementById('add-modal');
const modal = document.querySelector('.modal');
const backdropElement = document.getElementById('backdrop');
const cancelButton = document.querySelector('.btn--passive');

const backdropHandler = () => {
  backdropElement.classList.toggle('visible');
};

const removeBackdropHandler = () => {
  modal.classList.remove('visible');
  backdropElement.classList.remove('visible');
};

const showMovieHandler = () => {
  showMovie.classList.toggle('visible');
  backdropHandler();
};

backdropElement.addEventListener('click', removeBackdropHandler);
cancelButton.addEventListener('click', removeBackdropHandler);
startAddMovieButton.addEventListener('click', showMovieHandler);
