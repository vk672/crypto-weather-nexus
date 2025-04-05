import React from 'react';

interface WeatherCardProps {
  city: string;
  temperature: number;
  description: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ city, temperature, description }) => (
  <div className="bg-blue-100 p-4 rounded shadow">
    <h2 className="text-lg font-semibold">{city}</h2>
    <p>{description}</p>
    <p>{temperature}°C</p>
  </div>
);

export default WeatherCard;
