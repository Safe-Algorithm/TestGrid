import { useState } from "react";
import Container from "../components/Container";
import NavBar from "../components/NavBar";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";

const host: string = import.meta.env.VITE_SERVER_HOST;
const port: string = import.meta.env.VITE_SERVER_PORT;

const Signup = () => {
  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);
  const user = {
    email: String,
    username: String,
    password: String,
  };
  const navigate = useNavigate();

  const fetchAPI = async () => {
    try {
      const res = await fetch(`http://${host}:${port}/api/v1/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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
        setError("Username or Email already exist");
        setIsError(true);
      } else if (res.status === 422) {
        // if email is missing
        setError("Invalid email!");
        setIsError(true);
      } else if (res.status === 200) {
        navigate("/login");
      } else {
        setError("");
        setIsError(true);
      }
    } catch (error) {
      setError("Something went wrong!");
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
      <div className="bg-[url('src/assets/background.svg')] bg-repeat w-full h-full absolute top-0 left-0"></div>
      <main className="relative min-h-full">
        <div className="hidden md:block fixed inset-x-0 bottom-0 h-8 bg-green w-full"></div>
        <Container className="">
          <img
            src="src/assets/register-mobile-illustration.svg"
            className=" mx-auto md:hidden"
          />
          <NavBar />
          <section className="mt-4 md:mt-32">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center md:items-start"
            >
              {isError && (
                <p className=" bg-red-200 text-red-600 border-l-8 border-red-600 font-roboto font-bold p-4 m-3">
                  {error}
                </p>
              )}
              <Input type="email" name="email" required placeholder="Email" />
              <Input
                type="username"
                name="username"
                required
                placeholder="Username"
              />
              <Input
                type="password"
                name="password"
                required
                placeholder="Password"
              />
              <Button type="submit">Signup</Button>
              <Link
                to="/login"
                className=" text-blue underline font-bold font-roboto m-5"
              >
                I already have an account
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
};

export default Signup;
