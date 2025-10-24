import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Forecast from "./components/HourlyForecast";
import DailyForecast from "./components/DailyForecast";
import Metric from "./components/Metric";
import Summary from "./components/Summary";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Summary />
      <Metric />
      <Forecast />
      <DailyForecast />
    </div>
  );
}

export default App;
