import { useParams } from "react-router-dom";
import ThreadDetail from "../components/ThreadDetail";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  asyncDownVoteThreadDetail,
  asyncReceiveThreadDetail,
  asyncUpVoteThreadDetail,
} from "../states/threadDetail/action";
import { asyncAddComment, asyncUpVoteComment, asyncDownVoteComment } from "../states/comments/action";
import ThreadComment from "../components/ThreadComment";

const ThreadDetailPage = () => {
  const { id } = useParams();
  const { threadDetail = null, authUser } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  const onUpVote = (threadId) => {
    dispatch(asyncUpVoteThreadDetail(threadId));
  };

  const onDownVote = (threadId) => {
    dispatch(asyncDownVoteThreadDetail(threadId));
  };

  const onAddComment = (content) => {
    dispatch(asyncAddComment({ threadId: id, content }));
  };

  const onUpVoteComment = (commentId) => {
    dispatch(asyncUpVoteComment({ threadId: id, commentId }));
  };

  const onDownVoteComment = (commentId) => {
    dispatch(asyncDownVoteComment({ threadId: id, commentId }));
  };

  if (!threadDetail) {
    return null;
  }
  console.log("🚀 ~ ThreadDetailPage ~ threadDetail:", threadDetail);
  return (
    <div className="container mx-auto pt-10 w-full max-w-3xl bg-white flex flex-col gap-4">
      <ThreadDetail {...threadDetail} authUser={authUser} upVote={onUpVote} downVote={onDownVote} />
      <ThreadComment
        {...threadDetail}
        authUser={authUser}
        addComment={onAddComment}
        upVoteComment={onUpVoteComment}
        downVoteComment={onDownVoteComment}
      />
    </div>
  );
};

export default ThreadDetailPage;
