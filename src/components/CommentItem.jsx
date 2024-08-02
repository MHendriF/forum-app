import Avatar from './Avatar';
import { postedAt } from '../utils';
import { FaDownLong, FaUpLong } from 'react-icons/fa6';
import PropTypes from 'prop-types';

export default function CommentItem({
  id,
  owner,
  createdAt,
  content,
  upVote,
  downVote,
  upVotesBy,
  downVotesBy,
  authUser,
}) {
  const onUpVoteClick = () => {
    upVote(id);
  };

  const onDownVoteClick = () => {
    downVote(id);
  };

  const isUpVoted = upVotesBy?.includes(authUser?.id);
  const isDownVoted = downVotesBy?.includes(authUser?.id);

  return (
    <div className="border-b p-4 mb-4 rounded-lg">
      <div className="flex justify-between">
        <Avatar src={owner?.avatar} alt={owner?.name} />
        <div className="flex-1">
          <p className="text-md text-gray-800 font-bold">{owner?.name}</p>
          <p className="text-sm text-slate-500">{postedAt(createdAt)}</p>
        </div>
      </div>
      <div className="flex items-start">
        <div className="flex-1">
          <p
            className="text-gray-700 mt-2"
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          />
          <div className="mt-4 flex items-center">
            <div className="flex items-center">
              <div className="flex items-center justify-center mr-4">
                <FaUpLong
                  onClick={onUpVoteClick}
                  className={`w-8 h-8 text-gray-500 p-2 hover:bg-slate-700 hover:text-white cursor-pointer rounded-sm ${
                    isUpVoted && 'text-green-500'
                  }`}
                />
                <p className="text-md p-1 text-gray-500">{upVotesBy?.length}</p>
                <FaDownLong
                  onClick={onDownVoteClick}
                  className={`w-8 h-8 text-gray-500 p-2 hover:bg-slate-700 hover:text-white cursor-pointer  rounded-sm ${
                    isDownVoted && 'text-red-500'
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

CommentItem.propTypes = {
  id: PropTypes.string,
  owner: PropTypes.object,
  createdAt: PropTypes.string,
  content: PropTypes.string,
  upVote: PropTypes.func,
  downVote: PropTypes.func,
  upVotesBy: PropTypes.array,
  downVotesBy: PropTypes.array,
  authUser: PropTypes.object,
};
