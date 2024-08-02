import { useSelector } from "react-redux";

export default function ProfilePage() {
  const { authUser } = useSelector((states) => states);

  return (
    <div className="container mx-auto pt-10 w-full max-w-3xl bg-white flex flex-col gap-4">
      <h1 className="text-lg font-semibold text-center mb-4">My Profile</h1>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full">
        <div className="flex justify-center mb-6">
          <img src={authUser?.avatar} alt={authUser?.name} className="rounded-full w-32 h-32" />
        </div>
        <h1 className="text-2xl font-semibold text-center mb-4">{authUser?.name}</h1>
        <div className="text-center">
          <a href={authUser?.email} className="text-blue-500 hover:text-blue-700 transition duration-300">
            {authUser?.email}
          </a>
        </div>
      </div>
    </div>
  );
}
