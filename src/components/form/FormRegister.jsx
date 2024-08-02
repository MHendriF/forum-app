import PropTypes from "prop-types";
import { useState } from "react";
import InputForm from "../inputs/InputForm";
import Button from "../Button";

export default function FormRegister({ register }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    register({ name, email, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
        <form onSubmit={handleSubmit}>
          <InputForm id="name" label="Name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <InputForm id="email" label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <InputForm
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button text="Register" type="submit" />
        </form>
        <p className="text-center mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

FormRegister.propTypes = {
  register: PropTypes.func.isRequired,
};
