import React from 'react';

interface CryptoCardProps {
  name: string;
  symbol: string;
  price: number;
}

const CryptoCard: React.FC<CryptoCardProps> = ({ name, symbol, price }) => (
  <div className="bg-yellow-100 p-4 rounded shadow">
    <h2 className="text-lg font-semibold">{name} ({symbol.toUpperCase()})</h2>
    <p>Price: ${price}</p>
  </div>
);

export default CryptoCard;
