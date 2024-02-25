import { useState } from "react";

const host = (String = import.meta.env.VITE_SERVER_HOST);
const port = (String = import.meta.env.VITE_SERVER_PORT);
const API_KEY = (String = import.meta.env.VITE_API_KEY);

const Register = () => {
  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);
  const user = {
    email: String,
    username: String,
    password: String,
  };

  const fetchAPI = async () => {
    try {
      const res = await fetch(`http://${host}:${port}/api/v1/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": API_KEY,
        },
        body: JSON.stringify(user),
      });

      /*
       returns 409 in the following error scenarios:
       - username is exist
       - email is exist
       - username is missing
      */
      if (res.status === 409) {
        // const data = await res.json();
        setError("Something went wrong!");
        setIsError(true);
      } else if (res.status === 422) {
        // if email is missing
        setError("Invalid email!");
        setIsError(true);
      } else {
        // console.log("Registered successfully!");
        setError("");
        setIsError(true);
      }
    } catch (error) {
      console.error(error);
      throw new Error("Something went wrong!");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    user.email = e.target.email.value;
    user.username = e.target.username.value;
    user.password = e.target.password.value;

    await fetchAPI();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="user@example.com" />
        <input type="username" name="username" placeholder="@username" />
        <input type="password" name="password" placeholder="password" />
        <button type="submit">register</button>
      </form>
      {isError && <p>{error}</p>}
    </>
  );
};

export default Register;
