import { useState } from "react";
import Cookies from "js-cookie";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const host = import.meta.env.VITE_SERVER_HOST;
  const port = import.meta.env.VITE_SERVER_PORT;
  const API_KEY = import.meta.env.VITE_API_KEY;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (email && password) {
      const user = {
        email,
        password,
      };

      const response = await fetch(`http://${host}:${port}/api/v1/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": API_KEY,
        },
        body: JSON.stringify(user),
      });

      if (response.status === 401) setError(true);
      else if (response.status === 200) {
        const data = await response.json();
        const accessToken = data.access_token;

        Cookies.set("accessToken", accessToken, { expires: 2 });

        navigate("/", { replace: true });
      } else {
        console.log("Unknown Error");
      }
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          {error && <p>Incorrect email or password. Please try again</p>}
          <label htmlFor="email">Email Address </label>
          <input
            type="email"
            id="email"
            placeholder="user@example.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password </label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>
        <div>
          <Button>Login</Button>
        </div>
        <div>
          New user? <Link to="/register">Register</Link>
        </div>
      </form>
    </div>
  );
}
export default Login;
