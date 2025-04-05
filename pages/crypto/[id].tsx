import { useRouter } from 'next/router';

const CryptoDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Details for {id}</h1>
      
    </div>
  );
};

export default CryptoDetail;
