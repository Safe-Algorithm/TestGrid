const host = (String = import.meta.env.VITE_SERVER_HOST);
const port = (String = import.meta.env.VITE_SERVER_PORT);
const API_KEY = (String = import.meta.env.VITE_API_KEY);

const Register = () => {
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

      console.log(res.status);
    } catch (error) {
      throw new Error(`${error}`);
    } finally {
      console.log(`this is finally`);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    user.email = e.target.email.value;
    user.username = e.target.username.value;
    user.password = e.target.password.value;

    fetchAPI();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="user@example.com" />
      <input type="username" name="username" placeholder="@username" />
      <input type="password" name="password" placeholder="password" />
      <button type="submit">register</button>
    </form>
  );
};

export default Register;
