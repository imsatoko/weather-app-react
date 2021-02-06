import { formatDay } from "./Date";

export function FormatCurrentWeather(response, precipitation) {
  let result = response.data;

  let currentWeather = {
    name: result.name,
    temp: Math.round(result.main.temp),
    maxTemp: Math.round(result.main.temp_max),
    minTemp: Math.round(result.main.temp_min),
    icon: formatIcon(result),
    main: result.weather[0].main,
    description: result.weather[0].description,
    wind: result.wind.speed,
    precipitation: Math.round(precipitation * 10) * 10,
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
      icon: formatIcon(forecast),
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
      icon: formatIcon(forecast),
    };

    dailyForecastList.push(dailyForecast);
  });

  return dailyForecastList;
}

export function ConverCurrentWeather(currentWeather, isFahrenheit) {
  let convertCurrentWeather = {
    name: currentWeather.name,
    temp: Math.round(convertUnit(currentWeather.temp, isFahrenheit)),
    maxTemp: Math.round(convertUnit(currentWeather.maxTemp, isFahrenheit)),
    minTemp: Math.round(convertUnit(currentWeather.minTemp, isFahrenheit)),
    icon: currentWeather.icon,
    description: currentWeather.description,
    wind: currentWeather.wind,
    precipitation: currentWeather.precipitation,
  };

  return convertCurrentWeather;
}

export function ConvertHourlyForecast(hourlyForecast, isFahrenheit) {
  let convertHourlyForecastList = [];

  hourlyForecast.forEach((forecast) => {
    let convertHourlyForecast = {
      dt: forecast.dt,
      hour: forecast.hour,
      maxTemp: Math.round(convertUnit(forecast.maxTemp, isFahrenheit)),
      minTemp: Math.round(convertUnit(forecast.minTemp, isFahrenheit)),
      icon: forecast.icon,
    };

    convertHourlyForecastList.push(convertHourlyForecast);
  });

  return convertHourlyForecastList;
}

export function ConvertDailyForecast(dailyForecast, isFahrenheit) {
  let convertDailyForecastList = [];

  dailyForecast.forEach((forecast) => {
    let convertDailyForecast = {
      dt: forecast.dt,
      day: forecast.day,
      maxTemp: Math.round(convertUnit(forecast.maxTemp, isFahrenheit)),
      minTemp: Math.round(convertUnit(forecast.minTemp, isFahrenheit)),
      icon: forecast.icon,
    };

    convertDailyForecastList.push(convertDailyForecast);
  });

  return convertDailyForecastList;
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
    "clear sky": "CLEAR_DAY",
    "few clouds": "PARTLY_CLOUDY_DAY",
    "scattered clouds": "PARTLY_CLOUDY_DAY",
    "broken clouds": "CLOUDY",
    "overcast clouds": "CLOUDY",
    "freezing rain": "SLEET",
  };

  let icon = icons[description];

  if (!icon) {
    icon = formatDayWeatherIconMain(main);
  }

  return icon;
}

function formatDayWeatherIconMain(main) {
  let icons = {
    Rain: "RAIN",
    Snow: "SNOW",
    Drizzle: "RAIN",
    Thunderstorm: "RAIN",
    Mist: "FOG",
    Smoke: "FOG",
    Haze: "FOG",
    Dust: "FOG",
    Fog: "FOG",
    Sand: "FOG",
    Ash: "FOG",
    Squall: "RAIN",
    Tornado: "WIND",
  };

  return icons[main];
}

// format weather icon for nighttime (6pm - 5am)
function formatNightWeatherIcon(main, description) {
  let icons = {
    "clear sky": "CLEAR_NIGHT",
    "few clouds": "PARTLY_CLOUDY_NIGHT",
    "scattered clouds": "PARTLY_CLOUDY_NIGHT",
    "broken clouds": "CLOUDY",
    "overcast clouds": "CLOUDY",
    "freezing rain": "SLEET",
  };

  let icon = icons[description];

  if (!icon) {
    icon = formatNightWeatherIconMain(main);
  }

  return icon;
}

function formatNightWeatherIconMain(main) {
  let icons = {
    Rain: "RAIN",
    Snow: "SNOW",
    Drizzle: "RAIN",
    Thunderstorm: "RAIN",
    Mist: "FOG",
    Smoke: "FOG",
    Haze: "FOG",
    Dust: "FOG",
    Fog: "FOG",
    Sand: "FOG",
    Ash: "FOG",
    Squall: "RAIN",
    Tornado: "WIND",
  };

  return icons[main];
}

function convertUnit(temp, isFahrenheit) {
  if (isFahrenheit) {
    return convertToFahrenheit(temp);
  }

  return convertToCelsius(temp);
}

function convertToCelsius(temp) {
  return (temp - 32) / 1.8;
}

function convertToFahrenheit(temp) {
  return temp * 1.8 + 32;
}
