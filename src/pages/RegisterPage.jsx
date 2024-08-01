import RegisterForm from "../components/RegisterForm";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { asyncRegisterUser } from "../states/users/action";

const RegisterPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));
    navigate("/");
  };

  return <RegisterForm register={onRegister} />;
};

export default RegisterPage;
