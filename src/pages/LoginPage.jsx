import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncSetAuthUser } from "../states/authUser/action";
import LoginForm from "../components/form/LoginForm";

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    //console.log("🚀 ~ onLogin:", email, password);
    dispatch(asyncSetAuthUser({ email, password }));
    navigate("/");
  };

  return <LoginForm onLogin={onLogin} />;
}
