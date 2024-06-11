//  [ T = 2\pi \sqrt{\frac{L}{g}} ]

// Scenario 1: Simple Data Manipulation with map
let pi =  Math.PI;
let g = 9.8;

function calculate_period_oscillation (L) {
  return  2 * pi * Math.sqrt(L/g);  
}

const titrationResults = [6.5, 7, 7, 8.2, 6.8, 7];

let T = titrationResults.map(len => calculate_period_oscillation(len));

console.log(T);



