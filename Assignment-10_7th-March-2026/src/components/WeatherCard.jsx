import React from "react";

function WeatherCard({ weather }) {
  const getIcon = () => {
    if (weather.type === "Clear") return "☀️";
    if (weather.type === "Cloudy") return "☁️";
    if (weather.type === "Rain") return "🌧️";
    if (weather.type === "Snow") return "❄️";
    return "⛈️";
  };

  const getBackground = () => {
    if (weather.temperature > 30) return "hot";
    if (weather.temperature > 20) return "warm";
    return "cold";
  };

  return (
    <div className={`weather-card ${getBackground()}`}>
      <h2>{weather.city}, {weather.country}</h2>
      <div className="icon">
        {getIcon()}
      </div>
      <p><strong>Temperature:</strong> {weather.temperature} °C</p>
      <p><strong>Condition:</strong> {weather.type}</p>
      <p><strong>Wind Speed:</strong> {weather.wind} km/h</p>
    </div>
  );
}
export default WeatherCard;