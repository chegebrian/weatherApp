import React from "react";

function Summary() {
  return (
    <section className="flex items-center gap-4 justify-between">
      <div>
        <p>Nairobi, Kenya</p>
        <p>Tuesday, Aug 5, 2025</p>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-12">
          <img src="../../public/assets/images/icon-sunny.webp" alt="" />
        </div>
        <p className="text-3xl">20c</p>
      </div>
    </section>
  );
}

export default Summary;
