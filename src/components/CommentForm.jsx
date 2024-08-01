import { useState } from "react";
import PropTypes from "prop-types";

export default function CommentForm({ addComment, id }) {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment(comment, id);
    setComment("");
    console.log(comment);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="mb-5">
      <div className="mb-4">
        <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
          Add a Comment
        </label>
        <textarea
          id="comment"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm"
          rows="4"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-slate-600 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
      >
        Submit
      </button>
    </form>
  );
}

CommentForm.propTypes = {
  id: PropTypes.string,
  addComment: PropTypes.func,
};
