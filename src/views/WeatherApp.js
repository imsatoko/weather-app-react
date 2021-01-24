import React, { useState } from "react";
import Search from "./Search";
import Error from "./Error";
import Unit from "./Unit";
import CurrentWeather from "./CurrentWeather";
import HourlyForecast from "./HourlyForecast";
import DailyForecast from "./DailyForecast";

import "./../styles/WeatherApp.css";

export const WeatherToday = React.createContext();
export const WeatherForecast = React.createContext();

export default function WeatherApp() {
  const [currentWeather, setCurrentWeather] = useState({});
  const [weatherForecast, setWeatherForecast] = useState({});

  return (
    <div className="WeatherApp">
      <WeatherToday.Provider value={[currentWeather, setCurrentWeather]}>
        <WeatherForecast.Provider value={[weatherForecast, setWeatherForecast]}>
          <Search />
          <Error />
          <Unit />
          <CurrentWeather />
          <HourlyForecast />
          <hr className="Bar" />
          <DailyForecast />
        </WeatherForecast.Provider>
      </WeatherToday.Provider>
    </div>
  );
}
