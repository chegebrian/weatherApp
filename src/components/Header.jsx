import React from "react";

function Header() {
  return (
    <header className="flex items-center justify-between">
      <img src="../../public/assets/images/logo.svg" alt="logo" />
      <div className="flex items-center gap-2">
        <label htmlFor="units">
          <img
            src="../../public/assets/images/icon-units.svg"
            alt="settings-icon"
          />
        </label>
        <select name="units" id="units">
          <optgroup label="Temperature">
            <option value="Celsius">Celsius (°C)</option>
            <option value="Fahrenheit">Fahrenheit (°F)</option>
          </optgroup>
          <optgroup label="Wind Speed">
            <option value="km/h">km/h</option>
            <option value="mph">mph</option>
          </optgroup>
          <optgroup label="Precipitation">
            <option value="Millimeters">Millimeters (mm)</option>
            <option value="Inches">Inches (in)</option>
          </optgroup>
        </select>
      </div>
    </header>
  );
}

export default Header;
