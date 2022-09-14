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
const movieDatabaseText = document.getElementById('entry-text');
const deleteMovie = document.getElementById('delete-modal');
let deleteYesButton = deleteMovie.querySelector('.btn--danger');
const confirmCancelButton = deleteMovie.querySelector('.btn--passive');

const movies = [];

const backdropAdd = () => {
  backdropElement.classList.add('visible');
};

const removeBackdropHandler = () => {
  popupMovieModal.classList.remove('visible');
  backdropElement.classList.remove('visible');
  deleteMovie.classList.remove('visible');
};

const clearDBText = () => {
  if (movies.length === 0) {
    movieDatabaseText.style.display = 'block';
  } else {
    movieDatabaseText.style.display = 'none';
  }
};

const popupMovieWindowHandler = () => {
  deleteMovie.classList.add('visible');
  backdropAdd();
};

const deleteMovieHandler = (movieId) => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  movieListEl.children[movieIndex].remove();
  // movieListEl.removeChild(movieListEl.children[movieIndex]);
  removeBackdropHandler();
  clearDBText();
};

const deleteViaYesButton = (movieId) => {
  movieListEl.classList.remove('visible');

  deleteYesButton.replaceWith(deleteYesButton.cloneNode(true));
  deleteYesButton = deleteMovie.querySelector('.btn--danger');

  deleteYesButton.addEventListener(
    'click',
    deleteMovieHandler.bind(null, movieId)
  );
};

const createListItem = (id, title, imgUrl, rating) => {
  const list = document.createElement('li');
  list.className = 'movie-element';
  list.innerHTML = `
  <div class="movie-element__image">
  <img src=${imgUrl} alt=${title}>
  </div>
  <div class="movie-element__info">
  <h2>${title}</h2>
  <p>Rating: ${rating}/5 stars</p>
  </div>
  `;
  list.addEventListener('click', deleteViaYesButton.bind(null, id));

  // list.addEventListener('click', () => {
  //   deleteViaYesButton(id);
  // });

  movieListEl.append(list);
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
  popupMovieModal.classList.add('visible');
  backdropAdd();
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
  const movieTitle = userInputs[0].value
    // implementing first letter to uppercase
    .split(' ')
    .map((letter) => letter.charAt(0).toUpperCase() + letter.slice(1))
    .join(' ');
  const movieUrl = userInputs[1].value;
  const movieRating = +userInputs[2].value;

  if (
    movieTitle.trim() &&
    movieUrl.trim() &&
    +movieRating >= 1 &&
    +movieRating <= 5
  ) {
    // movieListEl.insertAdjacentHTML(
    //   'beforeend',
    //   `<li>${movieTitle}</li> <li>${movieUrl}</li> <li>${+movieRating}</li>`
    // );

    const newMovie = {
      id: Math.random().toString(),
      title: movieTitle,
      url: movieUrl,
      rating: movieRating,
    };

    movies.push(newMovie);
    console.log(movies);

    removeBackdropHandler();
    clearDBText();
    clearEnteredValues(movieTitle, movieUrl, movieRating);
    createListItem(newMovie.id, newMovie.title, newMovie.url, newMovie.rating);
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
movieListEl.addEventListener('click', popupMovieWindowHandler);
confirmCancelButton.addEventListener('click', removeBackdropHandler);
