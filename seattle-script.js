// var seattleWeather = {
//   latitude: 47.595562,
//   longitude: -122.32443,
//   generationtime_ms: 0.09644031524658203,
//   utc_offset_seconds: 0,
//   timezone: "GMT",
//   timezone_abbreviation: "GMT",
//   elevation: 40.0,
//   current_weather_units: {
//     time: "iso8601",
//     interval: "seconds",
//     temperature: "°F",
//     windspeed: "km/h",
//     winddirection: "°",
//     is_day: "",
//     weathercode: "wmo code",
//   },
//   current_weather: {
//     time: "2025-09-10T05:15",
//     interval: 900,
//     temperature: 60.4,
//     windspeed: 1.8,
//     winddirection: 37,
//     is_day: 0,
//     weathercode: 0,
//   },
// };
onEvent("weather", "click", function () {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=47.6038321&longitude=-122.330062&current_weather=true&temperature_unit=fahrenheit",
    requestOptions
  )
    .then((response) => response.json())
    .then(function (result) {
      console.log(result);

      setText("temp", result.current_weather.temperature);
      setText("wind", result.current_weather.windspeed);
      setText("code", result.current_weather.weathercode);
    })
    .catch((error) => console.error(error));
});
