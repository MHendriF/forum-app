import * as z from "zod";

export const LoginFormValidation = z.object({
  email: z.string().email("Invalid email address").nonempty("Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters").nonempty("Password is required"),
});

export const RegisterFormValidation = z.object({
  name: z.string().nonempty("Name is required"),
  email: z.string().email("Invalid email address").nonempty("Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters").nonempty("Password is required"),
});

export const ThreadFormValidation = z.object({
  title: z.string().nonempty("Title is required"),
  category: z.string().optional(),
  body: z.string().nonempty("Content is required"),
});

export const CommentFormValidation = z.object({
  content: z.string().nonempty("Content is required"),
});
