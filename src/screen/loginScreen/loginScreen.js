import "./_loginScreen.scss";

const LoginScreen = () => {
  return (
    <div className="login">
      <div className="login__container">
        <h1>Youtube Clone</h1>
        <img src="/blue-logo.jpeg" alt="" />
        <button>Login with Google</button>
        <p>Made by Fadhil Radhian using React, Redux and Youtube API</p>
      </div>
    </div>
  );
};

export default LoginScreen;
