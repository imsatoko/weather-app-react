import React from "react";

import "./../styles/DailyForecast.css";

export default function DailyForecast() {
  return (
    <div className="DailyForecast">
      <div className="row">
        <div className="col-sm-2 FcstDay">
          <div className="row">
            <div className="col-sm-3 FcstDay01">
              <i className="fas fa-cloud-sun WeatherIconDay"></i>
              <br />
            </div>
            <div className="col-sm-9 FcstDay02">
              <span className="Day">SUN</span>
              <br />
              <div className="Temperature">
                <span className="TmpHigh">21°</span>|
                <span className="tmpLow">14°</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-2 FcstDay">
          <div className="row">
            <div className="col-sm-3 FcstDay01">
              <i className="fas fa-cloud WeatherIconDay"></i>
              <br />
            </div>
            <div className="col-sm-9 FcstDay02">
              <span className="Day">MON</span>
              <br />
              <div className="Temperature">
                <span className="TmpHigh">19°</span>|
                <span className="TmpLow">16°</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-2 FcstDay">
          <div className="row">
            <div className="col-sm-3 FcstDay01">
              <i className="fas fa-sun WeatherIconDay"></i>
              <br />
            </div>
            <div className="col-sm-9 FcstDay02">
              <span className="Day">TUE</span>
              <br />
              <div className="Temperature">
                <span className="TmpHigh">20°</span>|
                <span className="TmpLow">15°</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-2 FcstDay">
          <div className="row">
            <div className="col-sm-3 FcstDay01">
              <i className="fas fa-sun WeatherIconDay"></i>
              <br />
            </div>
            <div className="col-sm-9 FcstDay02">
              <span className="Day">WED</span>
              <br />
              <div className="Temperature">
                <span className="TmpHigh">17°</span>|
                <span className="TmpLow">13°</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-2 FcstDay">
          <div className="row">
            <div className="col-sm-3 FcstDay01">
              <i className="fas fa-sun WeatherIconDay"></i>
              <br />
            </div>
            <div className="col-sm-9 FcstDay02">
              <span className="Day">THU</span>
              <br />
              <div className="Temperature">
                <span className="TmpHigh">15°</span>|
                <span className="TmpLow">9°</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
