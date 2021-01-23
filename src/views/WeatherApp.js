import React, { useState } from "react";
import Axios from "axios";
import Error from "./Error";
import Unit from "./Unit";
import CurrentWeather from "./CurrentWeather";
import HourlyForecast from "./HourlyForecast";
import DailyForecast from "./DailyForecast";
import { FormatCurrentWeather } from "./../modules/FormatWeather.js";

import "./../styles/WeatherApp.css";

const apiKey = "8dc58ec2fc7baf8f9b84e4019f768ba7";
const apiEndpoint = "https://api.openweathermap.org/data/2.5";
const units = "metric";

export const WeatherToday = React.createContext();

export default function WeatherApp() {
  const [init, setInit] = useState(true);
  const [city, setCity] = useState("tokyo");
  const [currentWeather, setCurrentWeather] = useState({});

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
    <div className="WeatherApp">
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
      <WeatherToday.Provider value={[currentWeather, setCurrentWeather]}>
        <Error />
        <Unit />
        <CurrentWeather />
      </WeatherToday.Provider>
      <HourlyForecast />
      <hr className="Bar" />
      <DailyForecast />
    </div>
  );
}
