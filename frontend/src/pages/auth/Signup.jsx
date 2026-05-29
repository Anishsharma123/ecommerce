import "../../styles/pages/signup.css";

function Signup() {
  return (
    <div className="signup-page">
      <div className="signup-box">
        <h1>Create Account</h1>

        <input type="text" placeholder="Full Name" />

        <input type="email" placeholder="Email" />

        <input type="password" placeholder="Password" />

        <button>Signup</button>
      </div>
    </div>
  );
}

export default Signup;