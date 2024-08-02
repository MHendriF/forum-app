import PropTypes from "prop-types";
import InputForm from "../inputs/InputForm";
import { useState } from "react";
import Button from "../Button";

export default function FormLogin({ login }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <form onSubmit={handleSubmit}>
          <InputForm id="email" label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <InputForm
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button text="Login" type="submit" />
        </form>
        <p className="text-center mt-4">
          Don&apos;t have an account?{" "}
          <a href="/register" className="text-blue-500">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}

FormLogin.propTypes = {
  login: PropTypes.func.isRequired,
};
