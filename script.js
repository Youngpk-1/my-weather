// Weather data POJO
var newOrleansWeather = {
  latitude: 29.95653,
  longitude: -90.07374,
  generationtime_ms: 0.07164478302001953,
  utc_offset_seconds: 0,
  timezone: "GMT",
  timezone_abbreviation: "GMT",
  elevation: 21.0,
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
    time: "2025-09-10T04:15",
    interval: 900,
    temperature: 75.5,
    windspeed: 3.8,
    winddirection: 73,
    is_day: 0,
    weathercode: 0,
  },
};
onEvent("weather", "click", function () {
  setText("temp", newOrleansWeather.current_weather.temperature);
  setText("wind", newOrleansWeather.current_weather.windspeed);
  setText("code", newOrleansWeather.current_weather.weathercode);
});

const requestOptions = {
  method: "GET",
  redirect: "follow",
};

fetch(
  "https://api.open-meteo.com/v1/forecast?latitude=29.95&longitude=-90.07&currentweather=true\n",
  requestOptions
)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
