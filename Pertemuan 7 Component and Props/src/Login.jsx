import "./Login.css";
import App from "./App";

const isLogin = true;

function LoginComponent() {
  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Welcome Back</h2>
        <p className="login-subtitle">Please sign in to continue</p>

        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              required
            />
          </div>

          <button type="submit" className="btn-submit">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default function Login() {
  return <>{isLogin ? <App /> : <LoginComponent />}</>;
}
