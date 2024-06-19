const flights = [
  {
    flightNumber: "BN2121",
    originCity: "Bangalore",
    destinationCity: "Varanasi",
    departureTime: "17:00",
    arrivalTime: "21:00",
    passengers: [
      {
        passengerID: "21",
        firstName: "Divesh",
        lastName: "Dwivedi",
        seatNumber: "7D",
      },
    ],
  },
  {
    flightNumber: "AI101",
    originCity: "New York",
    destinationCity: "Delhi",
    departureTime: "06:00",
    arrivalTime: "20:00",
    passengers: [
      {
        passengerID: "P1",
        firstName: "John",
        lastName: "Doe",
        seatNumber: "1A",
      },
      {
        passengerID: "P2",
        firstName: "Jane",
        lastName: "Doe",
        seatNumber: "1B",
      },
      {
        passengerID: "P3",
        firstName: "Jim",
        lastName: "Brown",
        seatNumber: "2A",
      },
    ],
  },
  {
    flightNumber: "BA205",
    originCity: "London",
    destinationCity: "New York",
    departureTime: "08:00",
    arrivalTime: "12:00",
    passengers: [
      {
        passengerID: "P4",
        firstName: "Jake",
        lastName: "Smith",
        seatNumber: "1A",
      },
      {
        passengerID: "P5",
        firstName: "Amy",
        lastName: "Johnson",
        seatNumber: "1B",
      },
    ],
  },
];

/**
 *
 * @param {*} flight_number
 * @returns array
 */
function findFlightByNumber(flight_number) {
  return flights.find((flight) => flight.flightNumber === flight_number);
}

function findPassengerById(passenger_id) {
  return flights
    .filter((flight) =>
      flight.passengers.some(
        (passenger) => passenger.passengerID === passenger_id
      )
    )
    .map((flight) => {
      const {
        flightNumber,
        originCity,
        destinationCity,
        departureTime,
        arrivalTime,
      } = flight;
      const passenger_details = flight.passengers.find(
        (passenger) => passenger.passengerID === passenger_id
      );

      if (passenger_details)
        return {
          passenger_details,
          flightNumber,
          originCity,
          destinationCity,
          departureTime,
          arrivalTime,
        };
    });
}

function filterFlightsByOriginCity(origin_city) {
  // return all details

  // return flights.filter(flight => flight.originCity === origin_city);

  // return only flights details, exclude passengers
  return flights
    .filter((flight) => flight.originCity === origin_city)
    .map((flight) => {
      const { passengers, ...flights_details } = flight;

      return flights_details;
    });
}

function filterFlightsByDestinationCity(destination_city) {
  return flights
    .filter(flight => flight.destinationCity === destination_city)
    .map(flight => {
      const { passengers, ...flights_details } = flight;
      return flights_details;
    });
}

function findAllPassengersOnFlight(flight_no) {
  return flights.
    find(flight => flight.flightNumber === flight_no)
   
}

const get_flight_details = findFlightByNumber("BN21211221");

get_flight_details ? console.log(get_flight_details) : console.log("flight not found with given data");

const get_passenger_flight_details = findPassengerById('P2');

(get_passenger_flight_details.length > 0) ? console.log(get_passenger_flight_details) : console.log('Passenger not found with given data');

console.log(filterFlightsByOriginCity("Bangalore"));
console.log(filterFlightsByDestinationCity("New York"));

const filght_passengers = findAllPassengersOnFlight('BA205');

(filght_passengers === undefined) ? console.log("Wrong Flight No.") : (filght_passengers.length > 0 ? console.log(filght_passengers.passengers) : console.log("Passenger not found"));


console.log(findAllPassengersOnFlight('BA205').passengers);
