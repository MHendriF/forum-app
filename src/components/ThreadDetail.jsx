import PropTypes from "prop-types";
import parse from "html-react-parser";
import { postedAt } from "../utils";
import Avatar from "./Avatar";

const ThreadDetail = ({
  id,
  title,
  body,
  createdAt,
  category,
  owner,
  comments,
  upVotesBy,
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

  const isThreadVoted = upVotesBy?.includes(authUser?.id);
  console.log("🚀 ~ ThreadDetail ~ totalComments:", totalComments);

  return (
    <div className="border p-4 mb-4 rounded-lg">
      <div className="flex items-start">
        <Avatar src={owner?.avatar} alt={owner?.name} />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold">{title}</h2>

            <p className="text-sm text-gray-500">{postedAt(createdAt)}</p>
          </div>
          <p className="text-gray-700 mt-2">{parse(`${body}`)}</p>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center">
              <svg
                className="w-5 h-5 text-gray-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                ></path>
              </svg>
              <p className="text-sm text-gray-500">{comments?.length} comments</p>
              <p className="text-sm text-gray-500 ml-4">
                createdBy : <strong>{owner?.name}</strong>
              </p>
            </div>
            <p className="text-sm text-gray-500">Category: {category}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreadDetail;

ThreadDetail.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  createdAt: PropTypes.string,
  category: PropTypes.string,
  owner: PropTypes.object,
  comments: PropTypes.array,
  upVotesBy: PropTypes.array,
  upVote: PropTypes.func,
  downVote: PropTypes.func,
  totalComments: PropTypes.number,
  authUser: PropTypes.object,
};
