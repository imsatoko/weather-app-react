import React from "react";
//import { WeatherForecast } from "./WeatherApp";

import "./../styles/HourlyForecast.css";

export default function HourlyForecast() {
  //  const weatherForecast = useContext(WeatherForecast);

  return (
    <div className="HourlyForecast">
      <div className="row">
        <div className="col-2 FcstHour">
          <span className="Hour">18:00</span>
          <br />
          <i className="fas fa-cloud WeatherIconHour"></i>
          <br />
          <div className="Temperature">
            <span className="TmpHigh">20°</span>|
            <span className="TmpLow">13°</span>
          </div>
        </div>
        <div className="col-2 FcstHour">
          <span className="Hour">21:00</span>
          <br />
          <i className="fas fa-cloud-moon-rain WeatherIconHour"></i>
          <br />
          <div className="Temperature">
            <span className="TmpHigh">18°</span>|
            <span className="TmpLow">15°</span>
          </div>
        </div>
        <div className="col-2 FcstHour">
          <span className="Hour">00:00</span>
          <br />
          <i className="fas fa-cloud-moon WeatherIconHour"></i>
          <br />
          <div className="Temperature">
            <span className="TmpHigh">19°</span>|
            <span className="TmpLow">14°</span>
          </div>
        </div>
        <div className="col-2 FcstHour">
          <span className="Hour">03:00</span>
          <br />
          <i className="fas fa-moon WeatherIconHour"></i>
          <br />
          <div className="Temperature">
            <span className="TmpHigh">16°</span>|
            <span className="TmpLow">12°</span>
          </div>
        </div>
        <div className="col-2 FcstHour">
          <span className="Hour">06:00</span>
          <br />
          <i className="fas fa-cloud-sun WeatherIconHour"></i>
          <br />
          <div className="Temperature">
            <span className="TmpHigh">14°</span>|
            <span className="TmpLow">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
