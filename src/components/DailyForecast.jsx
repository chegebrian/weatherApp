import React from "react";

function DailyForecast() {
  return (
    <section className="bg-[#181818] ">
      <h3>DailyForecast</h3>
      <div>
        <div className="flex gap-4 items-center flex-col py-3 px-2 rounded-md">
          <h4>Tue</h4>
          <div className="w-12">
            <img src="../../public/assets/images/icon-snow.webp" alt="" />
          </div>
          <div className="flex items-center justify-between gap-2">
            <span>20c</span>
            <span>10c</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DailyForecast;
