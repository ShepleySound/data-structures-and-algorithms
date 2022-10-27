'use strict';

function ascendingYearComparator(a, b) {
  return a.year - b.year;
}

function ascendingTitleComparator(a, b) {
  const movieA = a.title.replace('The ', '');
  const movieB = b.title.replace('The ', '');

  if (movieA < movieB) {
    return -1;
  }
  if (movieA > movieB) {
    return 1;
  }
  return 0;
}

// Complete for Code Challenge 28
function sortYear(movies) {
  const copyMovies = [...movies];
  copyMovies.sort(ascendingYearComparator);
  return copyMovies;
}

function sortTitle(movies) {
  const copyMovies = [...movies];
  copyMovies.sort(ascendingTitleComparator);
  return copyMovies;
}

function inGenre(movies, genre) {
  const filteredMovies = movies.filter(movie => movie.genres.includes(genre));
  console.log(filteredMovies);
  return filteredMovies;
}

module.exports = {
  sortYear,
  sortTitle,
  inGenre,
  ascendingYearComparator,
  ascendingTitleComparator,
};
