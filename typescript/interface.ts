interface Movie {
    title: string,
    lengthMinutes: number
}

// type Movies = Movie[];

const Movies: Array<Movie> = [
    {
        title: 'American History X',
        lengthMinutes: 119,
        // production: 'USA'    // example of structural typing
      },
      {
        title: 'Sherlock Holmes',
        lengthMinutes: 128,
      },
      {
        title: 'Scent of a Woman',
        lengthMinutes: 157
      }
];


function compare_movie_lengths(x:Movie, y:Movie) {
    if (x.lengthMinutes > y.lengthMinutes) {
        return -1;
    } else if (y.lengthMinutes > x.lengthMinutes) {
        return 1;
    } else {
        return 0;
    }

}

console.log(compare_movie_lengths(Movies[1], Movies[0]));
//Movies.sort(); // it will give longest from array above given Movies[1], Movies[0]

// for sorting using .sort

Movies.sort(compare_movie_lengths); // it will give longest from entire array

const longestMovie = Movies[0];
console.log(`Longest movie is ${longestMovie.title}`);

