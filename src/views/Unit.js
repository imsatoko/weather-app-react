import React from "react";

import "./../styles/Unit.css";

export default function Unit() {
  return (
    <div className="Unit">
      <div className="Heat">
        <span>℃</span>&nbsp;
      </div>
      <label className="Switch">
        <input type="checkbox" id="unit-button" />
        <span className="Slider"></span>
      </label>
      <div className="Heat">
        &nbsp;<span>℉</span>
      </div>
    </div>
  );
}
