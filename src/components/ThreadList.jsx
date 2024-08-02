import { ThreadItem } from './ThreadItem';
import PropTypes from 'prop-types';

export default function ThreadList({ threads, upVote, downVote, authUser }) {
  return (
    <>
      {threads?.map((thread, index) => (
        <ThreadItem
          key={index}
          {...thread}
          upVote={upVote}
          downVote={downVote}
          authUser={authUser}
        />
      ))}
    </>
  );
}

ThreadList.propTypes = {
  threads: PropTypes.array,
  addThread: PropTypes.func,
  upVote: PropTypes.func,
  downVote: PropTypes.func,
  categories: PropTypes.array,
  onClickCategory: PropTypes.func,
  params: PropTypes.string,
  authUser: PropTypes.object,
};
