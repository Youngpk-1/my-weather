var atlantaWeather = {
  latitude: 33.759865,
  longitude: -84.39587,
  generationtime_ms: 0.06520748138427734,
  utc_offset_seconds: 0,
  timezone: "GMT",
  timezone_abbreviation: "GMT",
  elevation: 317.0,
  current_weather_units: {
    time: "iso8601",
    interval: "seconds",
    temperature: "°F",
    windspeed: "km/h",
    winddirection: "°",
    is_day: "",
    weathercode: "wmo code",
  },
  current_weather: {
    time: "2025-09-10T05:30",
    interval: 900,
    temperature: 62.8,
    windspeed: 8.7,
    winddirection: 107,
    is_day: 0,
    weathercode: 0,
  },
};
onEvent("weather", "click", function () {
  setText("temp", atlantaWeather.current_weather.temperature);
  setText("wind", atlantaWeather.current_weather.windspeed);
  setText("code", atlantaWeather.current_weather.weathercode);
});

const requestOptions = {
  method: "GET",
  redirect: "follow",
};

fetch(
  "https://api.open-meteo.com/v1/forecast?latitude=33.7489924&longitude=-84.3902644&current_weather=true&temperature_unit=fahrenheit",
  requestOptions
)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
