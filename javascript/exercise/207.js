const experiments = [
    { id: 1, results: [2, 3, 3, 4] },
    { id: 2, results: [5, 6, 5, 6] },
    { id: 3, results: [9, 1, 5, 6] },
    { id: 4, results: [2, 8, 3, 5] },
    { id: 5, results: [7, 6, 9, 1] },
  ];


  function categories_experiments(averages) {
    return averages.map((value) => {
        if(value.average > 4) {
            console.log(`Experiment for id: ${value.id} is High`);
        }
        else if (value.average < 4) {
            console.log(`Experiment for id: ${value.id} is Low`);
            
        } else {
            console.log(`Experiment for id: ${value.id} is Medium`);
        }
    })
  }
  function exclude_experiments_below_threshold(results) {
    // return results.filter((result) => {
    //    if (result.average >= 4) return result;
    //  
    // })
    // optimize
    return results.filter(result => result.average >= 4)
  }

  function calculate_average(experiments) {
    return experiments.map((experiment) => {
       
        const { id , results } = experiment; 
       
        const average = results.reduce((acc, val) => acc + val, 0) / results.length;

        return {id , average}
    });
  }

  // arrow function 

//   const calculate_average = (experiments) => {
//     return experiments.map((experiment) => {
       
//         const { id , results } = experiment; 
       
//         const average = results.reduce((acc, val) => acc + val, 0) / results.length;

//         return {id , average}
//     });
//   }


categories_experiments(calculate_average(experiments));

console.log("Values greater or equal to the threshold " , exclude_experiments_below_threshold(calculate_average(experiments)));

console.log("Average of the experiments ",calculate_average(experiments));

