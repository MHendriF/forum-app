import { useSelector } from "react-redux";
import Avatar from "../components/Avatar";

export default function ProfilePage() {
  const { authUser } = useSelector((states) => states);
  console.log("🚀 ~ ProfilePage ~ authUser:", authUser);

  return (
    // <div className="container mx-auto pt-4">
    //   <h1 className="text-2xl font-bold mb-6 text-center">Leaderboard</h1>
    //   <h1>Profile Page</h1>
    //   <h2>{authUser?.name}</h2>
    //   <h2>{authUser?.email}</h2>
    // </div>

    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-center mb-6">
          <img src={authUser?.avatar} alt={authUser?.name} className="rounded-full w-32 h-32" />
        </div>
        <h1 className="text-2xl font-bold text-center mb-4">{authUser?.name}</h1>
        <div className="text-center">
          <a href={authUser?.email} className="text-blue-500 hover:text-blue-700 transition duration-300">
            {authUser?.email}
          </a>
        </div>
      </div>
    </div>
  );
}
