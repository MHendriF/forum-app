import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import { FaRegCommentDots } from 'react-icons/fa';
import { FaDownLong, FaUpLong } from 'react-icons/fa6';
import postedAt from '../utils';
import Avatar from './Avatar';
import { threadShape } from '../utils/types';

export default function ThreadItem({
  id,
  title,
  body,
  createdAt,
  category,
  user,
  upVotesBy,
  downVotesBy,
  upVote,
  downVote,
  totalComments,
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
    <div className="block hover:bg-slate-300 transition duration-300 ease-in-out rounded-lg">
      <div className="border p-4 mb-4 rounded-lg">
        <div className="flex justify-between">
          <Avatar src={user?.avatar} alt={user?.name} />
          <div className="flex-1">
            <p className="text-md text-gray-800 font-bold">{user?.name}</p>
            <p className="text-sm text-slate-500">{postedAt(createdAt)}</p>
          </div>
          <p className="text-sm text-gray-500">#{category}</p>
        </div>
        <div className="flex items-start">
          <div className="flex-1">
            <Link
              to={`/thread/${id}`}
              className="block mt-2 hover:text-blue-700 transition duration-300"
            >
              <h2 className="text-lg font-bold">{title}</h2>
            </Link>
            <p className="text-gray-700 mt-2 line-clamp-3">
              {body && parse(body)}
            </p>
            <div className="mt-4 flex items-center">
              <div className="flex items-center">
                <div className="flex items-center justify-center mr-4">
                  <FaUpLong
                    onClick={onUpVoteClick}
                    className={`w-8 h-8 text-gray-500 p-2 hover:bg-slate-700 hover:text-white cursor-pointer rounded-sm ${
                      isUpVoted && 'text-green-500'
                    }`}
                  />
                  <p className="text-md p-1 text-gray-500">
                    {upVotesBy?.length}
                  </p>
                  <FaDownLong
                    onClick={onDownVoteClick}
                    className={`w-8 h-8 text-gray-500 p-2 hover:bg-slate-700 hover:text-white cursor-pointer  rounded-sm ${
                      isDownVoted && 'text-red-500'
                    }`}
                  />
                </div>
                <FaRegCommentDots className="w-5 h-5 text-gray-500 mr-2" />
                <p className="text-sm text-gray-500">{totalComments}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ThreadItem.propTypes = {
  ...threadShape,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
};
