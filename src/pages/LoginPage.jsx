import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncSetAuthUser } from "../states/authUser/action";
import FormLogin from "../components/form/FormLogin";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    console.log("🚀 ~ onLogin:", email, password);
    dispatch(asyncSetAuthUser({ email, password }));
    navigate("/");
  };

  return <FormLogin login={onLogin} />;
};

export default LoginPage;
