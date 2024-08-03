import PropTypes from 'prop-types';
import CommentForm from './forms/CommentForm';
import CommentItem from './CommentItem';
import { authUserShape, commentShape } from '../utils/types';

export default function ThreadComment({
  id,
  addComment,
  upVoteComment,
  downVoteComment,
  comments,
  authUser,
}) {
  console.log('🚀 ~ comments:', comments);

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
  id: PropTypes.string.isRequired,
  addComment: PropTypes.func.isRequired,
  upVoteComment: PropTypes.func.isRequired,
  downVoteComment: PropTypes.func.isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape(commentShape)),
  authUser: PropTypes.shape(authUserShape).isRequired,
};

ThreadComment.defaultProps = {
  comments: [],
};
