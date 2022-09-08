const startAddMovieButton = document.querySelector('header button');
const popupMovieModal = document.getElementById('add-modal');
const backdropElement = document.getElementById('backdrop');
const cancelButton = popupMovieModal.querySelector('.btn--passive');
//const addButton = cancelButton.nextElementSibling; //DOM traversal technique
const addButton = document.querySelector('.btn--success');
// const movieTitle = document.getElementById('title');
// const movieUrl = document.getElementById('image-url');
// const movieRating = document.getElementById('rating');
const userInputs = popupMovieModal.querySelectorAll('input');
const movieListEl = document.getElementById('movie-list');

const movies = [];

const backdropToggle = () => {
  backdropElement.classList.toggle('visible');
};

const removeBackdropHandler = () => {
  popupMovieModal.classList.remove('visible');
  backdropElement.classList.remove('visible');
};

// const clearEnteredValues = () => {
//   movieTitle.value = '';
//   movieUrl.value = '';
//   movieRating.value = '';
// };

const clearEnteredValues = () => {
  for (let input of userInputs) {
    input.value = '';
  }
  // userInputs[0].value = '';
  // userInputs[1].value = '';
  // userInputs[2].value = '';
};

const cancelMovieModalHandler = () => {
  popupMovieModal.classList.toggle('visible');
  backdropToggle();
  clearEnteredValues();
};

// const movieList = (title, url, rating) => {
//   if (title && url && rating) {
//     movieListEl.insertAdjacentHTML(
//       'beforeend',
//       `<li>${title}</li> <li>${url}</li> <li>${+rating}</li>`
//     );
//     removeBackdropHandler();
//     clearEnteredValues();
//   } else if (!title || !url || !+rating) {
//     alert(`Enter valid title or url or rating`);
//   }
// };

const addMovieHandler = () => {
  // movieList(movieTitle.value, movieUrl.value, movieRating.value);
  const movieTitle = userInputs[0].value;
  // .split(' ')
  // .map((letter) => letter.charAt(0).toUpperCase() + letter.slice(1))
  // .join(' ');
  const movieUrl = userInputs[1].value;
  const movieRating = +userInputs[2].value;

  if (
    movieTitle.trim() &&
    movieUrl.trim() &&
    +movieRating >= 1 &&
    +movieRating <= 5
  ) {
    movieListEl.insertAdjacentHTML(
      'beforeend',
      `<li>${movieTitle}</li> <li>${movieUrl}</li> <li>${+movieRating}</li>`
    );
    removeBackdropHandler();
    clearEnteredValues(movieTitle, movieUrl, movieRating);

    const newMovies = {
      title: movieTitle,
      url: movieUrl,
      rating: movieRating,
    };

    movies.push(newMovies);
    console.log(movies);
  } else if (
    !movieTitle.trim() ||
    !movieUrl.trim() ||
    !+movieRating ||
    +movieRating < 1 ||
    +movieRating > 5
  ) {
    alert(`Enter either valid title, url or rating between 1 and 5`);
  }
};

backdropElement.addEventListener('click', removeBackdropHandler);
cancelButton.addEventListener('click', removeBackdropHandler);
addButton.addEventListener('click', addMovieHandler);
startAddMovieButton.addEventListener('click', cancelMovieModalHandler);
