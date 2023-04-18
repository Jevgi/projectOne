const numberOfFilms = +prompt('How many movies did you watch?', '');

const personalMovieDB = { 
    count: numberOfFilms,
    movies: {

    },
    actors: {},
    genres: [],
    privat: false,
};


// const a = prompt('What is the last movie did you watch?', ''),
//       b = prompt('what is your rating?', ''),
//       c = prompt('What is the last movie did you watch?', ''),
//       d = prompt('what is your rating?', '');


// personalMovieDB.movies[a]=b;
// personalMovieDB.movies[c]=d;

// console.log(personalMovieDB);

for (let i = 0; i < 2; i++) {
    const a = prompt('What is the last movie did you watch?', ''),
          b = prompt('what is your rating?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log ('done');
    }      
    else {
        console.log ('error');
        i--;
    }

          
}
  
if (personalMovieDB.count < 10) {
    console.log ("Watched quite a bit of films");
}
else if (personalMovieDB >= 10 && personalMovieDB <= 30) {
    console.log ("You are a classic spectator");

}
else {
    console.log ("An error has occurred");
}

console.log(personalMovieDB);