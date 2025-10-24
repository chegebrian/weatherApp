import React from "react";

function Metric() {
  return (
    <section className="flex gap-4 items-center">
      <div className="flex flex-col gap-4 items-start bg-[#181818] rounded-lg py-3 px-2">
        <p>Feels Like</p>
        <span>18c</span>
      </div>
      <div className="flex flex-col gap-4 items-start bg-[#181818] rounded-lg py-3 px-2">
        <p>Humidity</p>
        <span>46%</span>
      </div>
      <div className="flex flex-col gap-4 items-start bg-[#181818] rounded-lg py-3 px-2">
        <p>Wind</p>
        <span>14 km/h</span>
      </div>
      <div className="flex flex-col gap-4 items-start bg-[#181818] rounded-lg py-3 px-2">
        <p>Precipitation</p>
        <span>0 mm</span>
      </div>
    </section>
  );
}

export default Metric;
