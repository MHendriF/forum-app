import { useState } from "react";
import Button from "../Button";
import InputForm from "../inputs/InputForm";
import TextareaForm from "../inputs/TextareaForm";

export default function FormThread({ addThread }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addThread({ title, body, category });
    console.log("🚀 ~ addThread ~ title:", title, "body:", body, "category:", category);
    setTitle("");
    setCategory("");
    setBody("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <InputForm label="Title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <InputForm label="Category" name="category" value={category} onChange={(e) => setCategory(e.target.value)} />
      <TextareaForm label="Content" name="content" value={body} onChange={(e) => setBody(e.target.value)} />
      <Button text="Add Thread" type="submit" />
    </form>
  );
}
