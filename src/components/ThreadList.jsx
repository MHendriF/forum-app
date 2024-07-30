import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { fetchThreads } from "../redux/threadsSlice";
import { ThreadItem } from "./ThreadItem";

const ThreadList = () => {
  const dispatch = useDispatch();
  const threads = useSelector((state) => state.threads.threads);
  const status = useSelector((state) => state.threads.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchThreads());
    }
  }, [status, dispatch]);

  if (status === "loading") return <div className="text-center">Loading...</div>;
  if (status === "failed") return <div className="text-center">Error loading threads</div>;

  return (
    <div className="container mx-auto p-4">
      {threads.length > 0 && threads.map((thread, index) => <ThreadItem key={index} {...thread} />)}
    </div>
  );
};

export default ThreadList;
