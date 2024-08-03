import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '../Button';
import TextareaForm from '../inputs/TextareaForm';
import { CommentFormValidation } from '../../utils/validation';

export default function CommentForm({ addComment, id }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(CommentFormValidation),
  });

  const onSubmit = (data) => {
    addComment(data.content, id);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-5">
      <TextareaForm
        label="Add a Comment"
        name="content"
        register={register}
        errors={errors}
      />
      <Button text="Submit" type="submit" />
    </form>
  );
}

CommentForm.propTypes = {
  id: PropTypes.string,
  addComment: PropTypes.func.isRequired,
};
