import React from "react";

function HourlyForecast() {
  return (
    <section className="bg-[#181818] rounded-lg p-4 flex flex-col gap-4">
      <div className="flex items-center justify-between gap-2">
        <h3>Hourly forecast</h3>
        <select name="day" id="day">
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select>
      </div>
      <div>
        <div className="flex items-center justify-between gap-4 border px-2 py-1 rounded-sm border-amber-600">
          <div className="flex items-center gap-1">
            <span className="w-12">
              <img src="../../public/assets/images/icon-storm.webp" alt="" />
            </span>
            <span>3 PM</span>
          </div>
          <span>20c</span>
        </div>
      </div>
    </section>
  );
}

export default HourlyForecast;
