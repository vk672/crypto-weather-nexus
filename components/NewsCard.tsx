import React from 'react';

interface NewsCardProps {
  title: string;
  url: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, url }) => (
  <div className="bg-white p-4 rounded shadow">
    <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
      {title}
    </a>
  </div>
);

export default NewsCard;
