import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Forecast from "./components/Forecast";
import DailyForecast from "./components/DailyForecast";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Forecast />
      <DailyForecast />
    </div>
  );
}

export default App;
