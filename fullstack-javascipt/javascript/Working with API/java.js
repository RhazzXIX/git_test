const body = document.querySelector("body");
const cityInput = document.querySelector("input#city");
const city = document.querySelector("p#city");
const weather = document.querySelector("p#weather");
const wind = document.querySelector("p#wind");
const temp = document.querySelector("p#temp");
const error = document.querySelector("p#error");
const button = document.querySelector("button");

function disPlayWeather(json) {
  city.textContent = `City: ${json.name}`;
  weather.textContent = `Weather: ${json.weather[0].description}`;
  wind.textContent = `Wind direction: ${json.wind.deg} degrees, \n Wind Speed: ${json.wind.speed} m/s`;
  const celcius = (json.main.temp - 273.15).toFixed(2);
  temp.textContent = `Temperature: ${celcius}deg C`;
}

function fetchWeather(cityName) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=20f7632ffc2c022654e4093c6947b4f4`,
    { mode: "cors" }
  )
    .then(function (response) {
      console.log(response);
      if (!response.ok) {
        throw new Error("Network response not Ok");
      }
      return Promise.resolve(response.json());
    })
    .then(function (json) {
      console.log(json);
      disPlayWeather(json);
      let weather = json.weather[0].description;
      fetch(
        `https://api.giphy.com/v1/gifs/translate?api_key=bb2006d9d3454578be1a99cfad65913d&s=${weather}`,
        { mode: "cors" }
      )
        .then(function (response) {
          console.log(response);
          return response.json();
        })
        .then(function (json) {
          console.log(json.data.images.original.url);
          img.src = json.data.images.original.url;
        })
        .catch(function (err) {
          console.log(err);
        })
        .catch((err) => (error.textContent = err));
    });
}

function getCityEntry(e) {
  e.stopPropagation();
  fetchWeather(cityInput.value);
}

button.addEventListener("click", getCityEntry);

const img = body.querySelector("img");

fetch(
  `https://api.giphy.com/v1/gifs/translate?api_key=2Tc7z89oXBCbc6PouRvic2Sry7xFfhpS&s=weather`,
  { mode: "cors" }
)
  .then(function (response) {
    console.log(response);
    return response.json();
  })
  .then(function (json) {
    console.log(json.data.images.original.url);
    img.src = json.data.images.original.url;
  })
  .catch(function (err) {
    console.log(err);
  })
  .catch((err) => (error.textContent = err));
