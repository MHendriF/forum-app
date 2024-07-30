// src/components/ThreadList.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchThreads } from "../redux/threadsSlice";

const ThreadList = () => {
  const dispatch = useDispatch();
  const threads = useSelector((state) => state.threads.threads);
  const status = useSelector((state) => state.threads.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchThreads());
    }
  }, [status, dispatch]);

  if (status === "loading") return <div>Loading...</div>;
  if (status === "failed") return <div>Error loading threads</div>;

  return (
    <div>
      {threads.map((thread) => (
        <div key={thread.id}>
          <h2>{thread.title}</h2>
          <p>{thread.body}</p>
          <p>Created by: {thread.creatorName}</p>
          <p>Comments: {thread.commentsCount}</p>
          <p>Created at: {new Date(thread.createdAt).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default ThreadList;
