var monroeWeather = {
  latitude: 32.493713,
  longitude: -92.12634,
  generationtime_ms: 0.08606910705566406,
  utc_offset_seconds: 0,
  timezone: "GMT",
  timezone_abbreviation: "GMT",
  elevation: 26.0,
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
    time: "2025-09-10T04:45",
    interval: 900,
    temperature: 70.4,
    windspeed: 6.6,
    winddirection: 331,
    is_day: 0,
    weathercode: 0,
  },
};
setText("temp", monroeWeather.current_weather.temperature);
setText("wind", monroeWeather.current_weather.windspeed);
setText("code", monroeWeather.current_weather.weathercode);
