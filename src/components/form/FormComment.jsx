import { useState } from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import TextareaForm from "../inputs/TextareaForm";

export default function FormComment({ addComment, id }) {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment(comment, id);
    setComment("");
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="mb-5">
      <TextareaForm label="Add a Comment" name="comment" value={comment} onChange={(e) => setComment(e.target.value)} />
      <Button text="Submit" type="submit" />
    </form>
  );
}

FormComment.propTypes = {
  id: PropTypes.string,
  addComment: PropTypes.func,
};
