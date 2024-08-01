// src/components/ThreadDetail.jsx
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncDownVoteThreadDetail,
  asyncReceiveThreadDetail,
  asyncUpVoteThreadDetail,
} from "../states/threadDetail/action";
import { asyncAddComment, asyncUpVoteComment, asyncDownVoteComment } from "../states/comments/action";

const ThreadDetail = () => {
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

  return (
    <div className="container mx-auto p-4">
      {/* {thread && (
        <>
          <h2 className="text-xl font-bold">{thread.title}</h2>
          <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: thread.body }}></p>
          <p className="text-sm text-gray-500">Created by: {thread.creatorName}</p>
          <p className="text-sm text-gray-500">Comments: {thread.commentsCount}</p>
          <p className="text-sm text-gray-500">Category: {thread.category}</p>
          <p className="text-sm text-gray-500">Created at: {new Date(thread.createdAt).toLocaleString()}</p>

          <div className="mt-6">
            <h3 className="text-lg font-bold mb-4">Comments ({thread.comments.length})</h3>
            {thread.comments &&
              thread.comments.map((comment) => (
                <div key={comment.id} className="border-b pb-4 mb-4">
                  <p className="text-gray-700">{comment.content}</p>
                  <p className="text-sm text-gray-500">
                    By {comment.owner.name} at {new Date(comment.createdAt).toLocaleString()}
                  </p>
                </div>
              ))}
          </div>

          <form onSubmit={handleCommentSubmit} className="mt-6">
            <div className="mb-4">
              <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
                Add a Comment
              </label>
              <textarea
                id="comment"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                rows="3"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit Comment
            </button>
          </form>
        </>
      )} */}
    </div>
  );
};

export default ThreadDetail;
