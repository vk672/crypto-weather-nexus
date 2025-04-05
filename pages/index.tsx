import React, { useEffect } from 'react';
import Header from '../components/Header';
import WeatherCard from '../components/WeatherCard';
import CryptoCard from '../components/CryptoCard';
import NewsCard from '../components/NewsCard';
import NotificationToast from '../components/NotificationToast';

const Dashboard = () => {
  return (
    <div>
      <Header />
      <NotificationToast />

      {/* Dummy layout for now */}
      <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <WeatherCard city="Delhi" temperature={30} description="Sunny" />
        <CryptoCard name="Bitcoin" symbol="btc" price={65000} />
        <NewsCard title="Bitcoin surges again!" url="https://news.com" />
      </div>
    </div>
  );
};

export default Dashboard;
