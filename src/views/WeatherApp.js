import React, { useState } from "react";
import Search from "./Search";
import Error from "./Error";
import Unit from "./Unit";
import CurrentWeather from "./CurrentWeather";
import HourlyForecast from "./HourlyForecast";
import DailyForecast from "./DailyForecast";

import "./../styles/WeatherApp.css";

export const WeatherToday = React.createContext();
export const ForecastHour = React.createContext();

export default function WeatherApp() {
  const [currentWeather, setCurrentWeather] = useState({});
  const [hourlyForecast, setHourlyForecast] = useState([]);

  return (
    <div className="WeatherApp">
      <WeatherToday.Provider value={[currentWeather, setCurrentWeather]}>
        <ForecastHour.Provider value={[hourlyForecast, setHourlyForecast]}>
          <Search />
          <Error />
          <Unit />
          <CurrentWeather />
          <HourlyForecast />
          <hr className="Bar" />
          <DailyForecast />
        </ForecastHour.Provider>
      </WeatherToday.Provider>
    </div>
  );
}
