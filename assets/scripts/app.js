const startAddMovieButton = document.querySelector('header button');
const popupMovieModal = document.getElementById('add-modal');
const backdropElement = document.getElementById('backdrop');
const cancelButton = popupMovieModal.querySelector('.btn--passive');
//const addButton = cancelButton.nextElementSibling; //DOM traversal technique
const addButton = document.querySelector('.btn--success');
const movieTitle = document.getElementById('title');
const movieUrl = document.getElementById('image-url');
const movieRating = document.getElementById('rating');
const movieListEl = document.getElementById('movie-list');

const backdropToggle = () => {
  backdropElement.classList.toggle('visible');
};

const removeBackdropHandler = () => {
  popupMovieModal.classList.remove('visible');
  backdropElement.classList.remove('visible');
};

const clearEnteredValues = () => {
  movieTitle.value = '';
  movieUrl.value = '';
  movieRating.value = '';
};

const cancelMovieModalHandler = () => {
  popupMovieModal.classList.toggle('visible');
  backdropToggle();
  clearEnteredValues();
};

const movieList = (title, url, rating) => {
  if (title && url && rating) {
    movieListEl.insertAdjacentHTML(
      'beforeend',
      `<li>${title}</li> <li>${url}</li> <li>${+rating}</li>`
    );
    removeBackdropHandler();
    clearEnteredValues();
  } else if (!title || !url || !+rating) {
    alert(`Enter valid title or url or rating`);
  }
};

const addMovieHandler = () => {
  movieList(movieTitle.value, movieUrl.value, movieRating.value);
};

backdropElement.addEventListener('click', removeBackdropHandler);
cancelButton.addEventListener('click', removeBackdropHandler);
addButton.addEventListener('click', addMovieHandler);
startAddMovieButton.addEventListener('click', cancelMovieModalHandler);
