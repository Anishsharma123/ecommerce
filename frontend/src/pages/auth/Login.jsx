import "../../styles/pages/login.css";

function Login() {
  return (
    <div className="login-page">
      <div className="login-box">
        <h1>Login</h1>

        <input type="email" placeholder="Email" />

        <input type="password" placeholder="Password" />

        <button>Login</button>
      </div>
    </div>
  );
}

export default Login;