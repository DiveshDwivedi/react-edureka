function find_Focal(params) {
    let temp = (params.n - 1) * (1 / params.R1 - 1 / params.R2);

    return 1/temp;
}

const lenses = [
    { id: 1, R1: 10, R2: -10, n: 1.5 },
    { id: 2, R1: 15, R2: 15, n: 1.6 },
    { id: 3, R1: -10, R2: 5, n: 1.5 },
    { id: 4, R1: -8, R2: 12, n: 1.6 },
    { id: 4, R1: -15, R2: 20, n: 1.7 },
  ];

let focal_length = lenses.map(data => find_Focal(data));

console.log(focal_length);

let negatve_focal = focal_length.filter(values => values < 0);

console.log(negatve_focal);