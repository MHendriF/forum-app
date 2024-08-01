import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import parse from "html-react-parser";
import { postedAt } from "../utils";
import Avatar from "./Avatar";
import { FaRegCommentDots } from "react-icons/fa";
import { FaDownLong, FaUpLong } from "react-icons/fa6";

export const ThreadItem = ({
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
}) => {
  const onUpVoteClick = () => {
    upVote(id);
  };

  const onDownVoteClick = () => {
    downVote(id);
  };

  const isUpVoted = upVotesBy?.includes(authUser?.id);
  const isDownVoted = downVotesBy?.includes(authUser?.id);

  console.log("🚀 ~ isUpVoted:", upVotesBy);
  console.log("🚀 ~ isDownVoted:", downVotesBy);

  return (
    <>
      <div className="block hover:bg-gray-300 transition duration-300 ease-in-out rounded-lg">
        <div className="border p-4 mb-4 rounded-lg">
          <div className="flex items-start">
            <Avatar src={user?.avatar} alt={user?.name} />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <Link to={`/thread/${id}`}>
                  <h2 className="text-lg font-bold">{title}</h2>
                </Link>

                <p className="text-sm text-gray-500">{postedAt(createdAt)}</p>
              </div>
              <p className="text-gray-700 mt-2 line-clamp-3">{parse(`${body}`)}</p>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex items-center justify-center mr-4">
                    <FaUpLong
                      onClick={onUpVoteClick}
                      className={`w-8 h-8 text-gray-500 p-2 hover:bg-slate-700 hover:text-white cursor-pointer rounded-sm ${
                        isUpVoted && "text-green-500"
                      }`}
                    />
                    <p className="text-md p-1 text-gray-500">{upVotesBy?.length}</p>
                    <FaDownLong
                      onClick={onDownVoteClick}
                      className={`w-8 h-8 text-gray-500 p-2 hover:bg-slate-700 hover:text-white cursor-pointer  rounded-sm ${
                        isDownVoted && "text-red-500"
                      }`}
                    />
                  </div>
                  <FaRegCommentDots className="w-5 h-5 text-gray-500 mr-2" />
                  <p className="text-sm text-gray-500">{totalComments}</p>
                  <p className="text-sm text-gray-500 ml-4">
                    createdBy : <strong>{user?.name}</strong>
                  </p>
                </div>
                <p className="text-sm text-gray-500">Category: {category}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ThreadItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  category: PropTypes.string,
  createdAt: PropTypes.string,
  user: PropTypes.object,
  upVotesBy: PropTypes.array,
  downVotesBy: PropTypes.array,
  upVote: PropTypes.func,
  downVote: PropTypes.func,
  totalComments: PropTypes.number,
  authUser: PropTypes.object,
};
