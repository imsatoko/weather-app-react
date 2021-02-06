import React, { useState, useContext } from "react";
import Axios from "axios";
import { FormatCurrentWeather } from "./../modules/FormatWeather.js";
import { FormatHourlyForecast } from "./../modules/FormatWeather.js";
import { FormatDailyForecast } from "./../modules/FormatWeather.js";
import { WeatherToday } from "./WeatherApp";
import { ForecastHour } from "./WeatherApp";
import { ForecastDay } from "./WeatherApp";
import { Toggle } from "./WeatherApp";
import { ErrorMsg } from "./WeatherApp";
import { BackgroundImg } from "./WeatherApp";

import CloudImg from "./../img/cloud.jpg";
import ClearImg from "./../img/clear.jpg";
import FogImg from "./../img/fog.jpg";
import RainImg from "./../img/rain.jpg";
import SnowImg from "./../img/snow.jpg";

import "./../styles/Search.css";

const apiKey = "8dc58ec2fc7baf8f9b84e4019f768ba7";
const apiEndpoint = "https://api.openweathermap.org/data/2.5";
const units = "metric";

export default function Search() {
  const [city, setCity] = useState("tokyo");
  const [currentWeather, setCurrentWeather] = useContext(WeatherToday);
  const [hourlyForecast, setHourlyForecast] = useContext(ForecastHour);
  const [dailyForecast, setDailyForecast] = useContext(ForecastDay);
  const [unitToggle, setUnitToggle] = useContext(Toggle);
  const [error, setError] = useContext(ErrorMsg);
  const [weatherImg, setWeatherImg] = useContext(BackgroundImg);

  if (
    Object.keys(currentWeather).length === 1 &&
    !hourlyForecast.length &&
    !dailyForecast.length &&
    !weatherImg
  ) {
    updateWeather();
  }

  function SearchWeather(event) {
    event.preventDefault();

    if (error) {
      setError("");
    }

    updateWeather();

    // reset
    resetUnit();
  }

  async function updateWeather() {
    if (city) {
      // current weather
      let current = await Axios.get(
        `${apiEndpoint}/weather?appid=${apiKey}&q=${city}&units=${units}`
      ).catch(errorHandler);

      // 3 hour forecast
      let forecastHour = await Axios.get(
        `${apiEndpoint}/forecast?appid=${apiKey}&q=${city}&units=${units}&cnt=5`
      );

      updateCurrentWeather(current, forecastHour.data.list[0].pop);
      updateHourlyForecast(forecastHour);

      // daily forecast
      let lat = current.data.coord.lat;
      let lon = current.data.coord.lon;
      Axios.get(
        `${apiEndpoint}/onecall?appid=${apiKey}&units=${units}&lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts`
      ).then(updateDailyForecast);
    } else {
      setError("Please input city name.");
    }
  }

  function errorHandler() {
    setError("City is not found.");
  }

  function updateCurrentWeather(response, precipitation) {
    let currentWeather = FormatCurrentWeather(response, precipitation);
    setCurrentWeather(currentWeather);
    updateBackgroundImg(currentWeather.main);
  }

  function updateHourlyForecast(response) {
    setHourlyForecast(FormatHourlyForecast(response));
  }

  function updateDailyForecast(response) {
    setDailyForecast(FormatDailyForecast(response));
  }

  function updateBackgroundImg(main) {
    if (main === "Clear") {
      setWeatherImg(ClearImg);
    } else if (main === "Clouds") {
      setWeatherImg(CloudImg);
    } else if (main === "Snow") {
      setWeatherImg(SnowImg);
    } else if (main === "Fog" || main === "Mist" || main === "Haze") {
      setWeatherImg(FogImg);
    } else {
      setWeatherImg(RainImg);
    }
  }

  function updateCity(event) {
    let city = event.target.value;
    setCity(city.trim());
  }

  function resetUnit() {
    if (unitToggle) {
      setUnitToggle(false);
    }
  }

  return (
    <form
      className="form-inline"
      id="search-city-form"
      onSubmit={SearchWeather}
    >
      <div className="form-group mx-sm-3 mb-2">
        <input
          type="city"
          className="form-control"
          placeholder="Enter a city"
          autoFocus={true}
          onChange={updateCity}
        />
      </div>
      <input type="submit" className="btn btn-primary mb-2" value="Search" />
    </form>
  );
}
