import React, { useState, useContext } from "react";
import Axios from "axios";
import { FormatCurrentWeather } from "./../modules/FormatWeather.js";
import { WeatherToday } from "./WeatherApp";
//import { WeatherForecast } from "./WeatherApp";

import "./../styles/Search.css";

const apiKey = "8dc58ec2fc7baf8f9b84e4019f768ba7";
const apiEndpoint = "https://api.openweathermap.org/data/2.5";
const units = "metric";

export default function Search() {
  const [init, setInit] = useState(true);
  const [city, setCity] = useState("tokyo");
  const [currentWeather, setCurrentWeather] = useContext(WeatherToday);
  // const [weatherForecast, setWeatherForecast] = useContext(WeatherForecast);

  if (init) {
    Axios.get(
      `${apiEndpoint}/weather?appid=${apiKey}&q=${city}&units=${units}`
    ).then(updateCurrentWeather);

    setInit(false);
  }

  function SearchWeather(event) {
    event.preventDefault();

    if (city) {
      Axios.get(
        `${apiEndpoint}/weather?appid=${apiKey}&q=${city}&units=${units}`
      ).then(updateCurrentWeather);
    }
  }

  function updateCurrentWeather(response) {
    setCurrentWeather(FormatCurrentWeather(response));
  }

  function updateCity(event) {
    let city = event.target.value;
    setCity(city.trim());
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
      <button className="btn btn-success CurrentButton" id="current-location">
        Current
      </button>
    </form>
  );
}
