let movies = require('./movies');
let {
  sortYear,
  sortTitle,
  inGenre,
  ascendingYearComparator,
  ascendingTitleComparator,
} = require('./sort');

describe("Sorting Functions", () => {

  test("sorts movies by year", () => {
    const sortedMovies = sortYear(movies);
    expect(sortedMovies.map((m) => m.title)).toEqual([
      "The Cotton Club",
      "Crocodile Dundee",
      "Beetlejuice",
      "The Shawshank Redemption",
      "Memento",
      "City of God",
      "Ratatouille",
      "Stardust",
      "Valkyrie",
      "The Intouchables",
    ])
  });

  test("sorts movies by title", () => {
    const sortedMovies = sortTitle(movies);
    expect(sortedMovies.map((m) => m.title)).toEqual([
      "Beetlejuice",
      "City of God",
      "The Cotton Club",
      "Crocodile Dundee",
      "The Intouchables",
      "Memento",
      "Ratatouille",
      "The Shawshank Redemption",
      "Stardust",
      "Valkyrie",
    ])
  });

  test("finds movies by genre", () => {
    const sortedMovies = sortYear(inGenre(movies, "Adventure"));
    expect(sortedMovies.map((m) => m.title)).toEqual([
      "Crocodile Dundee",
      "Stardust",
    ])
  });
});

describe("Comparator Functions", () => {

  test("Compares year properties of two objects", () => {
    expect(ascendingYearComparator({year: 2000}, {year: 1000})).toBeGreaterThan(0);
    expect(ascendingYearComparator({year: 2000}, {year: 2000})).toEqual(0);
    expect(ascendingYearComparator({year: 2000}, {year: 3000})).toBeLessThan(0);
    expect(ascendingYearComparator({name: 'Hello World', year: -4}, {year: 3000})).toBeLessThan(0);
  });

  test("Compares title properties of two objects", () => {
    expect(ascendingTitleComparator({title: 'Hello World'}, {title: 'Jello World'})).toEqual(-1);
    expect(ascendingTitleComparator({title: 'Jello World'}, {title: 'Hello World'})).toEqual(1);
    expect(ascendingTitleComparator({title: 'Hello World'}, {title: 'Hello World'})).toEqual(0);

  });

});
