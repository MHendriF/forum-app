import PropTypes from 'prop-types';
import { postedAt } from '../utils';
import Avatar from './Avatar';
import { FaRegCommentDots, FaDownLong, FaUpLong } from 'react-icons/fa6';

export default function ThreadDetail({
  id,
  title,
  body,
  createdAt,
  category,
  owner,
  comments,
  upVotesBy,
  downVotesBy,
  upVote,
  downVote,
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
  //console.log("🚀 ~ ThreadDetail ~ totalComments:", totalComments);

  return (
    <div className="border mb-4 p-4 rounded-lg">
      <div className="flex justify-between">
        <Avatar src={owner?.avatar} alt={owner?.name} />
        <div className="flex-1">
          <p className="text-md text-gray-800 font-bold">{owner?.name}</p>
          <p className="text-sm text-slate-500">{postedAt(createdAt)}</p>
        </div>
        <p className="text-sm text-gray-500">#{category}</p>
      </div>
      <div className="flex items-start">
        <div className="flex-1">
          <h2 className="text-lg font-bold mt-2">{title}</h2>
          <p
            className="text-gray-700 mt-2"
            dangerouslySetInnerHTML={{
              __html: body,
            }}
          />
          <div className="mt-4 flex items-center justify-between">
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
              <FaRegCommentDots className="w-5 h-5 text-gray-500 mr-2" />
              <p className="text-sm text-gray-500">{comments?.length}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ThreadDetail.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  createdAt: PropTypes.string,
  category: PropTypes.string,
  owner: PropTypes.object,
  comments: PropTypes.array,
  upVotesBy: PropTypes.array,
  downVotesBy: PropTypes.array,
  upVote: PropTypes.func,
  downVote: PropTypes.func,
  authUser: PropTypes.object,
};
