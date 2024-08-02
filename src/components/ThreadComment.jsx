import CommentForm from './forms/CommentForm';
import CommentItem from './CommentItem';
import PropTypes, { object } from 'prop-types';

export default function ThreadComment({
  id,
  addComment,
  upVoteComment,
  downVoteComment,
  comments,
  authUser,
}) {
  return (
    <div className="flex flex-col">
      <CommentForm addComment={addComment} id={id} />
      {comments?.map((comment) => (
        <CommentItem
          key={comment.id}
          {...comment}
          authUser={authUser}
          upVote={upVoteComment}
          downVote={downVoteComment}
        />
      ))}
    </div>
  );
}

ThreadComment.propTypes = {
  id: PropTypes.string,
  addComment: PropTypes.func,
  upVoteComment: PropTypes.func,
  downVoteComment: PropTypes.func,
  comments: PropTypes.arrayOf(object),
  authUser: PropTypes.object,
};
