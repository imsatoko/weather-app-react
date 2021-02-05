import React, { useContext } from "react";
import { ConverCurrentWeather } from "./../modules/FormatWeather.js";
import { ConvertHourlyForecast } from "./../modules/FormatWeather.js";
import { ConvertDailyForecast } from "./../modules/FormatWeather.js";
import { WeatherToday } from "./WeatherApp";
import { ForecastHour } from "./WeatherApp";
import { ForecastDay } from "./WeatherApp";
import { Toggle } from "./WeatherApp";

import "./../styles/Unit.css";

export default function Unit() {
  const [currentWeather, setCurrentWeather] = useContext(WeatherToday);
  const [hourlyForecast, setHourlyForecast] = useContext(ForecastHour);
  const [dailyForecast, setDailyForecast] = useContext(ForecastDay);
  const [unitToggle, setUnitToggle] = useContext(Toggle);

  function changeUnit(event) {
    setCurrentWeather(
      ConverCurrentWeather(currentWeather, event.target.checked)
    );

    setHourlyForecast(
      ConvertHourlyForecast(hourlyForecast, event.target.checked)
    );

    setDailyForecast(ConvertDailyForecast(dailyForecast, event.target.checked));

    setUnitToggle(event.target.checked);
  }

  return (
    <div className="Unit">
      <div className="Heat">
        <span>℃</span>&nbsp;
      </div>
      <label className="Switch">
        <input
          type="checkbox"
          id="unit-button"
          checked={unitToggle}
          onChange={changeUnit}
        />
        <span className="Slider"></span>
      </label>
      <div className="Heat">
        &nbsp;<span>℉</span>
      </div>
    </div>
  );
}
