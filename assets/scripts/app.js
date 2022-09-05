const startAddMovieButton = document.querySelector('header button');
const showMovie = document.getElementById('add-modal');
const modal = document.querySelector('.modal');

startAddMovieButton.addEventListener('click', () => {
  showMovie.classList.toggle('visible');
});
