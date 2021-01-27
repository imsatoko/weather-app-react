import { formatDay } from "./Date";

export function FormatCurrentWeather(response) {
  let result = response.data;

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

export function FormatHourlyForecast(response) {
  let result = response.data.list;

  let hourlyForecastList = [];
  result.forEach((forecast) => {
    let hourlyForecast = {
      dt: forecast.dt,
      hour: formatHour(forecast.dt),
      maxTemp: Math.round(forecast.main.temp_max),
      minTemp: Math.round(forecast.main.temp_min),
      icon: `${formatIcon(forecast)} WeatherIconHour`,
    };

    hourlyForecastList.push(hourlyForecast);
  });

  return hourlyForecastList;
}

export function FormatDailyForecast(response) {
  let result = response.data.daily;

  let dailyForecastList = [];
  result.forEach(function (forecast, index) {
    if (index === 0 || index > 5) {
      return;
    }

    let dailyForecast = {
      dt: forecast.dt,
      day: formatDay(new Date(forecast.dt * 1000).getDay()),
      maxTemp: Math.round(forecast.temp.max),
      minTemp: Math.round(forecast.temp.min),
      icon: `${formatIcon(forecast)} WeatherIconDay`,
    };

    dailyForecastList.push(dailyForecast);
  });

  return dailyForecastList;
}

function formatHour(unixTimestamp) {
  let dt = new Date(unixTimestamp * 1000);

  let hour = dt.getHours();
  let min = `0${dt.getMinutes()}`;

  if (hour < 10) {
    hour = `0${hour}`;
  }

  return `${hour}:${min}`;
}

function formatIcon(forecast) {
  let dt = new Date(forecast.dt * 1000);
  let hour = dt.getHours();

  let main = forecast.weather[0].main;
  let description = forecast.weather[0].description;
  if (hour >= 6 && hour < 18) {
    return formatDayWeatherIcon(main, description);
  }
  return formatNightWeatherIcon(main, description);
}

// format weather icon for daytime (6am - 5pm)
function formatDayWeatherIcon(main, description) {
  let icons = {
    "clear sky": "fas fa-sun",
    "few clouds": "fas fa-cloud-sun",
    "scattered clouds": "fas fa-cloud-sun",
    "broken clouds": "fas fa-cloud",
    "overcast clouds": "fas fa-cloud",
    "freezing rain": "fas fa-snowflake",
  };

  let icon = icons[description];

  if (!icon) {
    icon = formatDayWeatherIconMain(main);
  }

  return icon;
}

function formatDayWeatherIconMain(main) {
  let icons = {
    Rain: "fas fa-cloud-sun-rain",
    Snow: "fas fa-snowflake",
    Drizzle: "fas fa-cloud-sun-rain",
    Thunderstorm: "fas fa-bolt",
    Mist: "fas fa-cloud",
    Smoke: "fas fa-cloud",
    Haze: "fas fa-cloud",
    Dust: "fas fa-cloud",
    Fog: "fas fa-cloud",
    Sand: "fas fa-cloud",
    Ash: "fas fa-cloud",
    Squall: "fas fa-cloud",
    Tornado: "fas fa-cloud",
  };

  return icons[main];
}

// format weather icon for nighttime (6pm - 5am)
function formatNightWeatherIcon(main, description) {
  let icons = {
    "clear sky": "fas fa-moon",
    "few clouds": "fas fa-cloud-moon",
    "scattered clouds": "fas fa-cloud-moon",
    "broken clouds": "fas fa-cloud",
    "overcast clouds": "fas fa-cloud",
    "freezing rain": "fas fa-snowflake",
  };

  let icon = icons[description];

  if (!icon) {
    icon = formatNightWeatherIconMain(main);
  }

  return icon;
}

function formatNightWeatherIconMain(main) {
  let icons = {
    Rain: "fas fa-cloud-moon-rain",
    Snow: "fas fa-snowflake",
    Drizzle: "fas fa-cloud-moon-rain",
    Thunderstorm: "fas fa-bolt",
    Mist: "fas fa-cloud",
    Smoke: "fas fa-cloud",
    Haze: "fas fa-cloud",
    Dust: "fas fa-cloud",
    Fog: "fas fa-cloud",
    Sand: "fas fa-cloud",
    Ash: "fas fa-cloud",
    Squall: "fas fa-cloud",
    Tornado: "fas fa-cloud",
  };

  return icons[main];
}
