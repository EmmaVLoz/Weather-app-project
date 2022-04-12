let now = new Date();
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
if (minutes < 9) {
  minutes = `0${minutes}`;
}
let milliseconds = now.getMilliseconds();
let year = now.getFullYear();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let currentDay = days[now.getDay()];
let h2 = document.querySelector("h2");
h2.innerHTML = `${currentDay} ${hours}:${minutes}`;

function enterCity(event) {
  event.preventDefault();
  let citySearch = document.querySelector("#city-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${citySearch.value}`;
  let apiKey = "bae65ac0bad15d50eb38f1156cab5544";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${citySearch.value}&units=imperial&appid=${apiKey}`;
  axios.get(apiUrl).then(showTemperature);
  axios.get(apiUrl).then(showCondition);
}
let form = document.querySelector("#search-engine");
form.addEventListener("submit", enterCity);

function showTemperature(response) {
  console.log(response.data.main.temp);
  let temperature = Math.round(response.data.main.temp);
  let tempElement = document.querySelector("#metric-change");
  tempElement.innerHTML = `${temperature}`;
}
function showCondition(result) {
  let condition = result.data.weather[0].description;
  let conditionElement = document.querySelector("#current-conditions");
  conditionElement.innerHTML = `${condition}`;
}
