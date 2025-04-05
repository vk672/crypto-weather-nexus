/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['cryptologos.cc', 'openweathermap.org'], 
    },
    env: {
      NEXT_PUBLIC_WEATHER_API_KEY: process.env.NEXT_PUBLIC_WEATHER_API_KEY,
      NEXT_PUBLIC_CRYPTO_API_KEY: process.env.NEXT_PUBLIC_CRYPTO_API_KEY,
      NEXT_PUBLIC_NEWS_API_KEY: process.env.NEXT_PUBLIC_NEWS_API_KEY,
    },
  }
  
  module.exports = nextConfig
  