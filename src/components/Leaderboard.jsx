// src/components/Leaderboard.jsx
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncReceiveLeaderboards } from '../states/leaderboards/action';
import Avatar from './Avatar';

const Leaderboard = () => {
  const { leaderboards = [] } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveLeaderboards());
  }, [dispatch]);

  if (!leaderboards) {
    return null;
  }

  return (
    <>
      <h1 className="text-lg font-semibold text-center mb-4">Leaderboard</h1>
      <div className="grid gap-4">
        {leaderboards?.map((user, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between"
          >
            <div className="flex items-center">
              <span className="text-md font-bold mr-4">{index + 1}.</span>
              <Avatar src={user.user.avatar} alt={user.user.name} />
              <h2 className="text-md text-gray-800 font-bold">
                {user.user.name}
              </h2>
            </div>
            <p className="text-gray-700">Score: {user.score}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Leaderboard;
