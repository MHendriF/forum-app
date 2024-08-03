import PropTypes from 'prop-types';
import ThreadItem from './ThreadItem';
import { authUserShape, threadShape } from '../utils/types';

export default function ThreadList({ threads, upVote, downVote, authUser }) {
  return threads?.map((thread) => (
    <ThreadItem
      key={thread.id}
      id={thread.id}
      title={thread.title}
      body={thread.body}
      createdAt={thread.createdAt}
      category={thread.category}
      user={thread.user}
      upVotesBy={thread.upVotesBy}
      downVotesBy={thread.downVotesBy}
      totalComments={thread.totalComments}
      upVote={upVote}
      downVote={downVote}
      authUser={authUser}
    />
  ));
}

ThreadList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadShape)).isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  authUser: PropTypes.shape(authUserShape),
};
