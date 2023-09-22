// Asynchronously retrieves a temperature and displays it
// 1.We have fetched temputure from API server.
// 2.We have located where we can access it from.
// 3.We have tried to log that data to browswer console and not getting anything in return.
// 4. Figure out why we cant log to browswer

async function getAndDisplayNewWeather() {
  const degrees = await retrieveDegrees();
  displayWeather(degrees);
}
// Async function to retrieve current weather temperature
async function retrieveTemperature() {
  const response = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=51.5&longitude=0.119999886&current_weather=true"
  );
  const data = await response.json();
  const temperature = data.current_weather.temperature;

  const keyElement = document.getElementById("key");
  keyElement.textContent = temperature;
}

retrieveTemperature();


function Convert
