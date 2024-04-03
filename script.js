const url =
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "fc494de4f4msh81ecda5a09526e5p10f7a8jsn38272d68593e",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const cityName = document.getElementById('cityName');
const cloud_pct = document.getElementById('cloud_pct');
const temp = document.getElementById('temp');
const temp2 = document.getElementById('temp2');
const feels_like = document.getElementById('feels_like');
const humidity = document.getElementById('humidity');
const humidity2 = document.getElementById('humidity2');
const min_temp = document.getElementById('min_temp');
const max_temp = document.getElementById('max_temp');
const wind_speed = document.getElementById('wind_speed');
const wind_speed2 = document.getElementById('wind_speed2');
const sunrise = document.getElementById('sunrise');
const sunset = document.getElementById('sunset');
const city = document.getElementById('city');
const submit = document.getElementById('submit');
const del1 = document.getElementById('del1');
const ind1 = document.getElementById('ind1');
const ban1 = document.getElementById('ban1');

// Function to fetch weather data for a specific city and update the table
const fetchWeather = (city, prefix) => {
  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      document.getElementById(`${prefix}_cloud_pct`).innerHTML = response.cloud_pct;
      document.getElementById(`${prefix}_temp`).innerHTML = response.temp;
      document.getElementById(`${prefix}_feels_like`).innerHTML = response.feels_like;
      document.getElementById(`${prefix}_humidity`).innerHTML = response.humidity;
      document.getElementById(`${prefix}_min_temp`).innerHTML = response.min_temp;
      document.getElementById(`${prefix}_max_temp`).innerHTML = response.max_temp;
      document.getElementById(`${prefix}_wind_speed`).innerHTML = response.wind_speed;
      document.getElementById(`${prefix}_sunrise`).innerHTML = response.sunrise;
      document.getElementById(`${prefix}_sunset`).innerHTML = response.sunset;
    })
    .catch((err) => console.log(err));
};

// Function to fetch weather data for a specific city and update the table
const updateWeatherTable = (cityName, rowPrefix) => {
  fetchWeather(cityName, rowPrefix); // Fetch weather data for the city
};

// Update weather data for each city in the table
updateWeatherTable("Shanghai", "shanghai");
updateWeatherTable("Indore", "indore");
updateWeatherTable("Lucknow", "lucknow");
updateWeatherTable("Kolkata", "kolkata");

// Function to get weather data for the input city
const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;

      if(response.temp<15){
        document.getElementById('howisit').innerHTML = 'Cool' ;
      }
      if(response.temp>=15 && response.temp<20){
        document.getElementById('howisit').innerHTML = 'Warm' ;
      }
      if(response.temp>20 ){
        document.getElementById('howisit').innerHTML = 'Hot' ;
      }
      if(response.humidity>=30 && response.humidity<=50 ){
        document.getElementById('howIsHum').innerHTML = 'Comfortable' ;
      }
      if( response.humidity>60 ){
        document.getElementById('howIsHum').innerHTML = 'Uncomfortable' ;
      }
      if(response.humidity>50 && response.humidity<=60 ){
        document.getElementById('howIsHum').innerHTML = 'Moderate' ;
      }
      if (response.wind_speed < 10) {
        document.getElementById('wind_status').innerHTML = 'Calm';
      } else if (response.wind_speed >= 10 && response.wind_speed < 30) {
        document.getElementById('wind_status').innerHTML = 'Breezy';
      } else if (response.wind_speed >= 30 && response.wind_speed < 50) {
        document.getElementById('wind_status').innerHTML = 'Windy';
      } else {
        document.getElementById('wind_status').innerHTML = 'Very Windy';
      }

    })
    .catch((err) => console.log(err));

};

submit.addEventListener('click', (e) => {
  e.preventDefault();
  getWeather(city.value);

});

del1.addEventListener('click', () => getWeather("Delhi"));
ind1.addEventListener('click', () => getWeather("Indore"));
ban1.addEventListener('click', () => getWeather("Bangalore"));

getWeather("Delhi");
