 import error_status  from '../utils/error-status.js';

const api_key = window.env.API_KEY;
const api_url = window.env.API_URL;

const search_input = document.querySelector(".search input");

const search_btn = document.querySelector(".search button");

const weather_icon = document.querySelector(".weather-icon");

async function get_weather(city) {
  try {
    const response = await fetch(api_url + api_key + `&q=${city}`);

    if (!response.ok) {
      error_status(response.status);
    } else {
      var data = await response.json();

      document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

      if (data["weather"][0]["main"] == "Clouds") {
        weather_icon.src = "../images/clouds.png";
      } else if (data["weather"][0]["main"] == "Clear") {
        weather_icon.src = "../images/clear.png";
      } else if (data["weather"][0]["main"] == "Rain") {
        weather_icon.src = "../images/rain.png";
      } else if (data["weather"][0]["main"] == "Drizzle") {
        weather_icon.src = "../images/drizzle.png";
      } else if (data["weather"][0]["main"] == "Mist") {
        weather_icon.src = "../images/mist.png";
      }
      document.querySelector(".weather").style.display = "block";
      document.querySelector(".error").style.display = "none";

    }
  } catch (error) {
    console.error("Error fetching weather data:", error.message);
  }
}
search_btn.addEventListener("click", () => {
  get_weather(search_input.value);
});
