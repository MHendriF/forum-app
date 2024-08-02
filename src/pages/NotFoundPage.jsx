import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center  h-screen justify-center bg-white">
      <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-2xl w-full">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <p className="text-2xl text-gray-600 mb-8">Page Not Found</p>
        <button
          type="button"
          className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          onClick={() => navigate('/')}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
