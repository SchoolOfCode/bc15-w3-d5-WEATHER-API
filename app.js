const response = fetch("https://api.open-meteo.com/v1/forecast?current_weather=true", {
    headers: {
      Accept: "application/json",
    }})

   console.log(response);

   