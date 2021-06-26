import { useDispatch } from "react-redux";
import { loginWithGoogle } from "../../redux/actions/auth.action";
import "./_loginScreen.scss";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(loginWithGoogle());
  };
  return (
    <div className="login">
      <div className="login__container">
        <h1>Youtube Clone</h1>
        <img src="/blue-logo.jpeg" alt="" />
        <button onClick={handleLogin}>Login with Google</button>
        <p>Made by Fadhil Radhian using React, Redux and Youtube API</p>
      </div>
    </div>
  );
};

export default LoginScreen;
