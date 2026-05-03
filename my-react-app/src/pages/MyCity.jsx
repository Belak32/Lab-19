import { useState, useEffect } from 'react';
import axios from 'axios';

const MyCity = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Координати Яготина: 50.2806 пн.ш., 31.9458 сх.д.
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          'https://api.open-meteo.com/v1/forecast?latitude=50.2806&longitude=31.9458&current_weather=true'
        );
        setWeather(response.data.current_weather);
        setLoading(false);
      } catch (error) {
        console.error("Помилка при отриманні даних про погоду:", error);
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="page fade-in">
      <h1>Моє місто — Яготин 🇺🇦</h1>
      
      <div className="city-info card">
        <p>Яготин — затишне місто в Київській області з багатою історією. Спокійна атмосфера робить його чудовим місцем для навчання та концентрації на коді.</p>
      </div>

      <div className="weather-widget card">
        <h2>Поточна погода</h2>
        {loading ? (
          <p className="loading">Завантаження даних з API...</p>
        ) : weather ? (
          <div className="weather-data">
            <p><strong>Температура:</strong> {weather.temperature}°C</p>
            <p><strong>Швидкість вітру:</strong> {weather.windspeed} км/год</p>
            <p><strong>Координати:</strong> 50.28° пн.ш., 31.94° сх.д.</p>
          </div>
        ) : (
          <p>На жаль, не вдалося завантажити дані.</p>
        )}
      </div>
    </div>
  );
};

export default MyCity;