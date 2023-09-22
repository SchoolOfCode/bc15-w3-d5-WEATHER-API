
   // Asynchronously retrieves a joke and displays it
async function GetandDisplayWeather() {
    const degrees = await retrieveDegrees();
    displayWeather(degrees);
  }
  // Function to asynchronously retrieve a random joke from an API
  async function retrieveDegrees() {
    // Send a GET request to the dad joke API. Await the response.
    // Declare a variable to store the HTTP response
    const response = fetch("https://api.open-meteo.com/v1/forecast?current_weather=true", {
        headers: {
          Accept: "application/json",
        }})
       console.log(response);

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
    const weatherElement = document.getElementById("degrees");
    jokeElement.textContent = degrees.joke;
  }
  // Waits for the DOM to be fully loaded and then displays an initial joke.
  //document.addEventListener("DOMContentLoaded", getAndDisplayNewJoke);
  // Retrieves the "new joke" button
 // const newJokeButton = document.getElementById("newJokeBtn");
  // Sets up a click event listener to fetch and display a new joke upon clicking the newJokeButton.
  //newJokeButton.addEventListener("click", getAndDisplayNewJoke);