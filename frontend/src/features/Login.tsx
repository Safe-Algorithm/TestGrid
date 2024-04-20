import { useState } from "react";
import Cookies from "js-cookie";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import Container from "../components/Container";
import NavBar from "../components/NavBar";
import Input from "../components/Input";

function Login() {
  const host = import.meta.env.VITE_SERVER_HOST;
  const port = import.meta.env.VITE_SERVER_PORT;
  const API_KEY = import.meta.env.VITE_API_KEY;

  let email = "";
  let password = "";
  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);
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

      if (response.status === 401) {
        setIsError(true);
        setError("Invalid email or password. Please try again");
      } else if (response.status === 200) {
        const data = await response.json();
        const accessToken = data.access_token;

        Cookies.set("accessToken", accessToken, { expires: 2 });

        navigate("/", { replace: true });
      } else {
        setIsError(true);
        setError("Something went wrong! Please try again");
      }
    }
  }
  return (
    <>
      <div className="bg-[url('src/assets/background.svg')] bg-repeat w-full h-full absolute top-0 left-0"></div>
      <main className="relative min-h-full">
        <div className="hidden md:block fixed inset-x-0 bottom-0 h-8 bg-green w-full"></div>
        <Container className="flex-grow">
          <img
            src="src/assets/register-mobile-illustration.svg"
            className=" mx-auto md:hidden"
          />
          <NavBar isLogin={true} />
          <section className="flex-grow">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center md:items-start"
            >
              {isError && (
                <p className=" bg-red-200 text-red-600 border-l-8 border-red-600 font-roboto font-bold p-4 m-3">
                  {error}
                </p>
              )}

              <Input type="email" name="email" placeholder="Email" required />
              <Input
                type="password"
                name="password"
                placeholder="Password"
                required
              />

              <Button type="submit">Login</Button>

              <Link
                to="/signup"
                className=" text-blue underline font-bold font-roboto m-5"
              >
                I don't have an account
              </Link>
            </form>
          </section>
        </Container>
      </main>
      <img
        src="src/assets/register-desktop-illustration.svg"
        className="hidden md:block absolute md:w-96 bottom-0 md:right-2 xl:w-1/4 xl:right-6"
      />
    </>
  );
}
export default Login;
