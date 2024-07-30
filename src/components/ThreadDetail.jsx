// src/components/ThreadDetail.jsx
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchThreadDetail } from "../redux/threadsSlice";

const ThreadDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const thread = useSelector((state) => state.threads.threadDetail);
  const status = useSelector((state) => state.threads.status);

  useEffect(() => {
    dispatch(fetchThreadDetail(id));
  }, [id, dispatch]);

  if (status === "loading") return <div>Loading...</div>;
  if (status === "failed") return <div>Error loading thread detail</div>;

  return (
    <div>
      <h2>{thread.title}</h2>
      <p>{thread.body}</p>
      <p>Created by: {thread.creatorName}</p>
      <p>Comments: {thread.commentsCount}</p>
      <p>Created at: {new Date(thread.createdAt).toLocaleString()}</p>
    </div>
  );
};

export default ThreadDetail;
