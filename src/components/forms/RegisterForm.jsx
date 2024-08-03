import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import InputForm from '../inputs/InputForm';
import Button from '../Button';
import { RegisterFormValidation } from '../../utils/validation';

export default function RegisterForm({ onRegister }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(RegisterFormValidation),
  });

  const onSubmit = (data) => {
    onRegister(data);
    reset();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputForm
            label="Name"
            name="name"
            type="text"
            placeholder="Enter your name"
            register={register}
            errors={errors}
          />
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
          <Button text="Register" type="submit" />
        </form>
        <p className="text-center mt-4">
          Already have an account?
          <a href="/login" className="text-blue-500">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

RegisterForm.propTypes = {
  onRegister: PropTypes.func.isRequired,
};
