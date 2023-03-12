const place = document.getElementById("inputData");
let city = document.querySelector(".city");
let state = document.querySelector(".state");
let country = document.querySelector(".country");
let last_upadated = document.querySelector(".last_upadated");
let temp = document.querySelector(".temp");
let faren = document.querySelector(".faren");
let wind = document.querySelector(".wind");
let pressure = document.querySelector(".pressure");
let precipitate = document.querySelector(".precipitate");
let humidity = document.querySelector(".humidity");
let image = document.getElementById("image");
let text = document.querySelector(".text");

async function fetchData() {
  if (place.value === "") {
    alert("Input can't be empty");
    return;
  }
  document.getElementById("error").style.display = "none";
  document.getElementById("hidden").style.display = "block";
  document.getElementById("initial").style.display = "none";
  setTimeout(async () => {
    document.getElementById("hidden").style.display = "none";
    try {
      const url = `https://api.weatherapi.com/v1/current.json?key=53e35489bace4ae591b180749231003&q=${place.value}`;
      const data = await fetch(url);
      const parseData = await data.json();
      console.log(parseData.location.name);
      city.innerHTML = `${parseData.location.name}, `;
      state.innerHTML = `${parseData.location.region}, `;
      country.innerHTML = `${parseData.location.country} `;
      last_upadated.innerHTML = `Last updated : ${parseData.current.last_updated} `;
      temp.innerHTML = `Temperature : ${parseData.current.temp_c} <sup>o</sup>C `;
      faren.innerHTML = `Fahrenheit : ${parseData.current.temp_f} <sup>o</sup>F`;
      image.src = `${parseData.current.condition.icon}`;
      text.innerHTML = `${parseData.current.condition.text}`;
      wind.innerHTML = `Wind (km/h) : ${parseData.current.wind_kph} `;
      pressure.innerHTML = ` Pressure(mb): ${parseData.current.pressure_mb} `;
      precipitate.innerHTML = `Precipitate : ${parseData.current.precip_mm} `;
      humidity.innerHTML = `Humidity : ${parseData.current.humidity}% `;
      document.getElementById("initial").style.display = "block";
    } catch (error) {
      document.getElementById("error").style.display = "block";
    }
  }, 1000);
}
