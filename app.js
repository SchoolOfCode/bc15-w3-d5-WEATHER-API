// Async function to retrieve current weather temperature, using the await function to wait until promises are resolved
async function retrieveTemperature() {
  //logging the response as a variable
  const response = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=51.5&longitude=0.119999886&current_weather=true"
  );
  //return the parsed json from the response and going into the array to retrieve temperature value
  const data = await response.json();
  const temperature = data.current_weather.temperature;
  // Redefining the variable as our key it which it replaces.
  const keyElement = document.getElementById("key");
  keyElement.textContent = temperature;

  // 1. WE need to create a function that returns our variable temperture farehight.
  // 2. Implament it into us our weather app.

  function returnFarenheight() {
    return temperature * (9 / 5) + 32;
  }

  console.log(returnFarenheight());
}
retrieveTemperature();
