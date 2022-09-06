const startAddMovieButton = document.querySelector('header button');
const popupMovieModal = document.getElementById('add-modal');
const backdropElement = document.getElementById('backdrop');
const cancelButton = popupMovieModal.querySelector('.btn--passive');
//const addButton = cancelButton.nextElementSibling; //DOM traversal technique
const addButton = document.querySelector('.btn--success');

const backdropHandler = () => {
  backdropElement.classList.toggle('visible');
};

const removeBackdropHandler = () => {
  popupMovieModal.classList.remove('visible');
  backdropElement.classList.remove('visible');
};

const cancelMovieModalHandler = () => {
  popupMovieModal.classList.toggle('visible');
  backdropHandler();
};

const addMovieHandler = () => {
  console.log('Movie added!');
};

backdropElement.addEventListener('click', removeBackdropHandler);
cancelButton.addEventListener('click', removeBackdropHandler);
addButton.addEventListener('click', addMovieHandler);
startAddMovieButton.addEventListener('click', cancelMovieModalHandler);
