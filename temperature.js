// Asynchronously retrieves a temperature and displays it
async function getAndDisplayNewWeather() {
    const degrees = await retrieveDegrees();
    displayWeather(degrees);
  }
  
  // Function to asynchronously retrieve temperature
  async function retrieveDegrees() {
    const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=51.5074&longitude=0.1272&current_weather=true", {
      headers: {
        Accept: "application/json",
      },
    });

    const C = response.current_weather.temperature(0)
    console.log(C); // Log out the response
    // ... Rest of the code
  }





/* Asynchronously retrieves a temperature and displays it
async function getAndDisplayNewWeather() {
    const degrees = await retrieveDegrees();
    displayWeather(degrees);
  }

  // Function to asynchronously retrieve temperature
  async function retrieveDegrees() {
    // Send a GET request to the dad joke API. Await the response.
    // Declare a variable to store the HTTP response
    const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=51.5074&longitude=0.1272&current_weather=true", {
      headers: {
        Accept: "application/json",
      },
    });

    // Check if the response failed, and if so log an error and halt the app
    if (!response.ok) {
      console.error(`Status: ${response.status}`);
      console.error(`Text: ${await response.text()}`);
      return;
    }

    // return the parsed JSON from the response (which contains the joke object)
    const data = await response.json();
    return data;
  }

  // Function to update the DOM with the provided joke
  function displayWeather(degrees) {
    const weatherElement = document.querySelector(".key");
    weatherElement.textContent = degrees.temperature;
  }

  // Waits for the DOM to be fully loaded and then displays an initial joke.
  //document.addEventListener("DOMContentLoaded", getAndDisplayNewJoke);

  // Retrieves the "new joke" button
  //const newJokeButton = document.getElementById("newJokeBtn");

  // Sets up a click event listener to fetch and display a new joke upon clicking the newJokeButton.
  //newJokeButton.addEventListener("click", getAndDisplayNewJoke);