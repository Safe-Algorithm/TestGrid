import { useState } from "react";
import Cookies from "js-cookie";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const host = import.meta.env.VITE_SERVER_HOST;
  const port = import.meta.env.VITE_SERVER_PORT;
  const API_KEY = import.meta.env.VITE_API_KEY;

  let email = "";
  let password = "";
  const [infoError, setInfoError] = useState(false);
  const [unexpectedError, setUnexpectedError] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    email = e.target.email.value;
    password = e.target.password.value;

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

      if (response.status === 401) setInfoError(true);
      else if (response.status === 200) {
        const data = await response.json();
        const accessToken = data.access_token;

        Cookies.set("accessToken", accessToken, { expires: 2 });

        navigate("/", { replace: true });
      } else {
        setUnexpectedError(true);
      }
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          {unexpectedError && <p>Something went wrong! try again.</p>}
          {infoError && <p>Incorrect email or password. Please try again</p>}
          <label htmlFor="email">Email Address </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="user@example.com"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password </label>
          <input type="password" id="password" name="password" required />
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
