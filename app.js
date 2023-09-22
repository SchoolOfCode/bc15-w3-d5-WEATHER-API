// Async function to retrieve current weather temperature asynchronously using the await function waiting for porblems to resolv.
async function retrieveTemperature() {
  // Using fetch function to make a GET request the API URL. Using await to pause execution until promise returned by fetch resolves.
    "https://api.open-meteo.com/v1/forecast?latitude=51.5&longitude=0.119999886&current_weather=true"
  );
  const data = await response.json();
  // Here we are storing the response in a variable.
  const temperature = data.current_weather.temperature;
 // Implmenting the variable int our web page.
  const keyElement = document.getElementById("key");
  keyElement.textContent = temperature;
}

retrieveTemperature();

    // Check if the response failed, and if so log an error and halt the app
    if (!response.ok) {
      console.error(`Status: ${response.status}`);
      console.error(`Text: ${await response.text()}`);
      return;
    }
   