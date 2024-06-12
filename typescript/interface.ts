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
      },
      {
        title: 'Civil War',
        lengthMinutes: 176
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

Movies.sort(compare_movie_lengths);

const longestMovie = Movies[0];
console.log(`Longest movie is ${longestMovie.title}`);

