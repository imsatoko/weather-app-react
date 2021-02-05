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
export const ForecastDay = React.createContext();
export const Toggle = React.createContext();

export default function WeatherApp() {
  const [currentWeather, setCurrentWeather] = useState({});
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [dailyForecast, setDailyForecast] = useState([]);
  const [unitToggle, setUnitToggle] = useState(false);

  return (
    <div className="WeatherApp">
      <WeatherToday.Provider value={[currentWeather, setCurrentWeather]}>
        <ForecastHour.Provider value={[hourlyForecast, setHourlyForecast]}>
          <ForecastDay.Provider value={[dailyForecast, setDailyForecast]}>
            <Toggle.Provider value={[unitToggle, setUnitToggle]}>
              <Search />
              <Error />
              <Unit />
              <CurrentWeather />
              <HourlyForecast />
              <hr className="Bar" />
              <DailyForecast />
            </Toggle.Provider>
          </ForecastDay.Provider>
        </ForecastHour.Provider>
      </WeatherToday.Provider>
    </div>
  );
}
