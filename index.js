let apiKey = "a9cbe15c4bc17314f8d7985a3c6af64c";
let city = "Lisbon";
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
