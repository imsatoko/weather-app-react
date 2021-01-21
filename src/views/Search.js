import React from "react";

import "./../styles/Search.css";

export default function Search() {
  return (
    <form className="form-inline" id="search-city-form">
      <div className="form-group mx-sm-3 mb-2">
        <input
          type="city"
          className="form-control"
          placeholder="Enter a city"
          autoFocus="on"
          autoComplete="off"
          id="city-input"
        />
      </div>
      <input type="submit" className="btn btn-primary mb-2" value="Search" />
      <button className="btn btn-success CurrentButton" id="current-location">
        Current
      </button>
    </form>
  );
}
