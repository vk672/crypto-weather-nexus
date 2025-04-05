const API_BASE = 'https://api.example.com';

export const fetchWeather = async (city: string) => {
  const res = await fetch(`${API_BASE}/weather/${city}`);
  if (!res.ok) throw new Error('Failed to fetch weather');
  return res.json();
};

export const fetchCrypto = async (id: string) => {
  const res = await fetch(`${API_BASE}/crypto/${id}`);
  if (!res.ok) throw new Error('Failed to fetch crypto');
  return res.json();
};

export const fetchNews = async () => {
  const res = await fetch(`${API_BASE}/news`);
  if (!res.ok) throw new Error('Failed to fetch news');
  return res.json();
};
