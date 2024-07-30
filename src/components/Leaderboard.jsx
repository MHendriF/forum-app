// src/components/Leaderboard.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLeaderboard } from "../redux/threadsSlice";

const Leaderboard = () => {
  const dispatch = useDispatch();
  const leaderboard = useSelector((state) => state.threads.leaderboard);
  const status = useSelector((state) => state.threads.status);

  useEffect(() => {
    dispatch(fetchLeaderboard());
  }, [dispatch]);

  if (status === "loading") return <div>Loading...</div>;
  if (status === "failed") return <div>Error loading leaderboard</div>;

  return (
    <div>
      {leaderboard.map((user, index) => (
        <div key={user.id}>
          <h2>
            {index + 1}. {user.name}
          </h2>
          <p>Score: {user.score}</p>
        </div>
      ))}
    </div>
  );
};

export default Leaderboard;
