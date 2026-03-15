import React, { useState } from "react";
import WeatherCard from "./components/WeatherCard";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getWeatherType = (code) => {
    if (code === 0) return "Clear";
    if (code <= 3) return "Cloudy";
    if (code <= 67) return "Rain";
    if (code <= 77) return "Snow";
    return "Storm";
  };

  const searchWeather = async () => {
    if (!city) 
      return;
    setLoading(true);
    setError("");
    setWeather(null);

    try {
      //Convert city to latitude & longitude.
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
      );
      const geoData = await geoRes.json();
      if (!geoData.results) {
        throw new Error("City not found");
      }
      const place = geoData.results[0];
      
      //Fetch weather.
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${place.latitude}&longitude=${place.longitude}&current_weather=true`
      );
      const weatherData = await weatherRes.json();
      const weatherType = getWeatherType(weatherData.current_weather.weathercode);

      setWeather({
        city: place.name,
        country: place.country,
        temperature: weatherData.current_weather.temperature,
        wind: weatherData.current_weather.windspeed,
        type: weatherType
      });
    } 
    catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <h1>Weather Dashboard</h1>
      <div className="search-box">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={searchWeather}>Search</button>
      </div>
      {loading && <p>Loading weather data...</p>}
      {error && <p className="error">{error}</p>}
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}
export default App;