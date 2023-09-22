
  // Async function to retrieve current weather temperature, using the await function to wait until promises are resolved
  async function retrieveTemperature() {
    //logging the response as a variable
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=51.5&longitude=0.119999886&current_weather=true"
    );
    const data = await response.json();
    const temperature = data.current_weather.temperature;
  
    const keyElement = document.getElementById("key");
    keyElement.textContent = temperature;
  }
  
  retrieveTemperature();
  

  