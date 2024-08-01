// src/components/Leaderboard.jsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncReceiveLeaderboards } from "../states/leaderboards/action";

const Leaderboard = () => {
  const { leaderboard = [] } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveLeaderboards());
  }, [dispatch]);

  if (!leaderboard) {
    return null;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Leaderboard</h1>
      <div className="grid gap-4">
        {leaderboard.length > 0 &&
          leaderboard.map((user, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-lg font-bold mr-4">{index + 1}.</span>
                <img src={user.user.avatar} alt={user.user.name} className="w-12 h-12 rounded-full mr-4" />
                <h2 className="text-lg font-bold">{user.user.name}</h2>
              </div>
              <p className="text-gray-700">Score: {user.score}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Leaderboard;
