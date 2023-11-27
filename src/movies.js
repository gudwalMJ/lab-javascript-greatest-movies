// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    return directorsArray = moviesArray.map(movie => movie.director);

}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

const spielbergDramas = moviesArray.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'));

return spielbergDramas.length;

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
// I'm checking if the array is not empty //
    if (moviesArray.length === 0) {
        return 0;
    }
// calculating the sum of all scores //
const totalScore = moviesArray.reduce((accumulator, movie) => {
    if (movie.score !== undefined) {
        return accumulator + movie.score;
    } else {
        return accumulator;
    }
}, 0);

// calculating the average //
    const averageScore = totalScore / moviesArray.length;
// round the average to 2 decimal places //
const roundedAverage = Math.round(averageScore * 100) / 100;

return roundedAverage;

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    // filter to get only drama movies //
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));
// checking if there are drama movies in the array //
    if (dramaMovies.length === 0) {
        return 0; 
    }

    const totalDramaScore = dramaMovies.reduce(function (accumulator, movie) {
        const movieScore = movie.score || 0;
        return accumulator + movieScore;
    }, 0);    

    const averageDramaScore = totalDramaScore / dramaMovies.length;

    const roundedAverage = Math.round(averageDramaScore * 100) / 100;

    return roundedAverage;

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    const movieByYear = moviesArray.slice();

    movieByYear.sort((movie1, movie2) => {
        if (movie1.year !== movie2.year) {

            return movie1.year - movie2.year;

        } else {

        return movie1.title.localeCompare(movie2.title)
        }
    });

    return movieByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

const movieByAlphabeticall = moviesArray.slice();

movieByAlphabeticall.sort((movieA, movieB) => {
    return movieA.title.localeCompare(movieB.title);
});

const first20Titles = movieByAlphabeticall.slice(0, 20).map(movie => movie.title);


return first20Titles;

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
