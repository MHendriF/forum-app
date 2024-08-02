import Button from "../Button";
import InputForm from "../inputs/InputForm";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ThreadFormValidation } from "../../utils/validation";
import TextareaForm from "../inputs/TextareaForm";

export default function ThreadForm({ addThread }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(ThreadFormValidation),
  });

  const onSubmit = (data) => {
    console.log("Form is valid, submitting...", data);
    addThread(data);
    reset();
    // Add your form submission logic here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <InputForm
        label="Title"
        name="title"
        type="text"
        placeholder="Type a title"
        register={register}
        errors={errors}
      />
      <InputForm label="Category" name="category" type="text" placeholder="" register={register} errors={errors} />
      <TextareaForm label="Content" name="body" register={register} errors={errors} />
      <Button text="Create New Thread" type="submit" />
    </form>
  );
}

ThreadForm.propTypes = {
  addThread: PropTypes.func.isRequired,
};
