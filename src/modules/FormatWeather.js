export function FormatCurrentWeather(response) {
  let result = response.data;

  console.log(result);

  let currentWeather = {
    name: result.name,
    temp: Math.round(result.main.temp),
    maxTemp: Math.round(result.main.temp_max),
    minTemp: Math.round(result.main.temp_min),
    icon: "fas fa-cloud WeatherIconCurrent",
    description: "Broken Clouds",
    wind: result.wind.speed,
    precipitation: 70,
  };

  return currentWeather;
}
