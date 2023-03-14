const numberOfFilms = +prompt('How many movies did you watch?', '');

const personalMovieDB = { 
    count: numberOfFilms,
    movies: {

    },
    actors: {},
    genres: [],
    privat: false,
}


const a = prompt('What is the last movie did you watch?', ''),
      b = prompt('what is your rating?', ''),
      c = prompt('What is the last movie did you watch?', ''),
      d = prompt('what is your rating?', '');


personalMovieDB.movies[a]=b;
personalMovieDB.movies[c]=d;

console.log(personalMovieDB);