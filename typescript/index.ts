
let  temperature: number = 32;

let response: number;

enum temperature_type {
    C = "F",
    F = "C",
    K = "K",
}

function convert_temprature(temperature:number, type:string) {
    switch (type) {
        case 'C':
            console.log('Fahrenheit to Celsius ' + (temperature - 32) * 5/9);
            break;
        case 'F':
            console.log('Celsius to Fahrenheit ' + (temperature * 9/5) + 32);
        case 'K':
            console.log('Celsius to Kelvin ' + (temperature + 273.15));
        default:
            break;
    }
}

convert_temprature(temperature, temperature_type.C)
convert_temprature(temperature, temperature_type.F)
convert_temprature(temperature, temperature_type.K)