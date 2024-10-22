import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  asyncDownVoteThreadDetail,
  asyncReceiveThreadDetail,
  asyncUpVoteThreadDetail,
} from '../states/threadDetail/action';
import {
  asyncAddComment,
  asyncUpVoteComment,
  asyncDownVoteComment,
} from '../states/comments/action';
import ThreadComment from '../components/ThreadComment';
import ThreadDetail from '../components/ThreadDetail';

export default function ThreadDetailPage() {
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
    <div className="container mx-auto pt-10 w-full max-w-3xl bg-white flex flex-col gap-4 ">
      <div className="mx-4">
        <ThreadDetail
          {...threadDetail}
          authUser={authUser}
          upVote={onUpVote}
          downVote={onDownVote}
        />
        <ThreadComment
          id={threadDetail.id}
          comments={threadDetail.comments}
          authUser={authUser}
          addComment={onAddComment}
          upVoteComment={onUpVoteComment}
          downVoteComment={onDownVoteComment}
        />
      </div>
    </div>
  );
}
