import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { postedAt } from "../utils";

export const ThreadItem = ({
  id,
  title,
  body,
  createdAt,
  ownerId,
  totalComments,
  category,
  creatorAvatar,
  creatorName = "Anonymous",
}) => {
  return (
    <>
      <div className="block hover:bg-gray-100 transition duration-300 ease-in-out">
        <div className="border-b pb-4 mb-4">
          <div className="flex items-start">
            <img src={creatorAvatar} alt={ownerId} className="w-12 h-12 rounded-full mr-4" />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <Link to={`/thread/${id}`}>
                  <h2 className="text-lg font-bold">{title}</h2>
                </Link>

                <p className="text-sm text-gray-500">{postedAt(createdAt)}</p>
              </div>
              <p
                className="text-gray-700 mt-2 line-clamp-3"
                dangerouslySetInnerHTML={{
                  __html: body,
                }}
              ></p>
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
                  <p className="text-sm text-gray-500">{totalComments} comments</p>
                  <p className="text-sm text-gray-500 ml-4">
                    postedBy : <strong>{creatorName}</strong>
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

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const threadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  totalComments: PropTypes.number.isRequired,
  authUser: PropTypes.string.isRequired,
  user: PropTypes.shape(userShape).isRequired,
};

ThreadItem.propTypes = {
  ...threadItemShape,
};

export { threadItemShape };