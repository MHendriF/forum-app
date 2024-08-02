import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import PropTypes from 'prop-types';
import InputForm from '../inputs/InputForm';
import Button from '../Button';
import { LoginFormValidation } from '../../utils/validation';

export default function LoginForm({ onLogin }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(LoginFormValidation),
  });

  const onSubmit = (data) => {
    onLogin(data);
    reset();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputForm
            label="Email"
            name="email"
            type="text"
            placeholder="Enter your email"
            register={register}
            errors={errors}
          />
          <InputForm
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
            register={register}
            errors={errors}
          />
          <Button text="Login" type="submit" />
        </form>
        <p className="text-center mt-4">
          Don&apos;t have an account?{' '}
          <a href="/register" className="text-blue-500">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}

LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
};
