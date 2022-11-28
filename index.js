function formatDate(timestamp) {
  let date = newDate(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

let dateElement = document.querySelector("#date");
dateElement.innerHTML = formatDate(response.data.dt * 1000);

let descriptionElement = document.querySelector("#description");
descriptionElement.innerHTML = response.data.weather[0].description;

let humidtyElement = document.querySelector("#humidity");
humidityElement.innerHTML = response.data.main.humidity;

let windElement = document.querySelector("#wind");
windElement.innerHTML = Math.round(response.data.wind.speed);

let iconElement = document.querySelector("#icon");
iconElement.setAttribute(
  "src",
  `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
);

let apiKey = "a9cbe15c4bc17314f8d7985a3c6af64c";
let city = "MLisbon";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(showTemperature);
function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = `${temperature} ºC`;
}
function onInit() {
  let searchForm = document.querySelector("#search-form");
  searchForm.addEventListener("submit", handleSubmit);
}

function searchCity(city) {
  let apiKey = "a9cbe15c4bc17314f8d7985a3c6af64c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  city = document.querySelector("#city-input").value;
  searchCity(city);
  let h2 = document.querySelector("#city");
  h2.innerHTML = `${city}`;
}

onInit();
searchCity();
handleSubmit();
formatDate();
