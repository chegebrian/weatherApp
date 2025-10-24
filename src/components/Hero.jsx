import React from "react";

function Hero() {
  return (
    <div className="flex items-center flex-col gap-6">
      <h1 className="capitalize font-bold text-3xl">how's the sky looking today?</h1>
      <form action="" className="flex items-center gap-3">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search for a place..."
          className="px-2 py-1 bg-[#181818] rounded-sm outline-0 border-0 hover:outline-2"
        />
        <button type="submit" className="bg-amber-600 px-4 py-1 rounded-sm">
          Search
        </button>
      </form>
    </div>
  );
}

export default Hero;
