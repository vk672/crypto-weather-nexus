import { useRouter } from 'next/router';

const CityWeather = () => {
  const router = useRouter();
  const { city } = router.query;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Weather in {city}</h1>
      {/* Add fetch and render city-specific weather */}
    </div>
  );
};

export default CityWeather;
