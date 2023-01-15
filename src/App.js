import "./App.css";
import Captcha from "./components/captcha";
import Button from "./components/togglebtn";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useState } from "react";

function App() {
  const [error, setError] = useState({
    captcha: true,
    username: false,
    password: false,
  });
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (input) => {
    setError({
      ...error,
      captcha: input.error,
    });
  };

  const handleInputChange = (field) => (e) => {
    setInput({
      ...input,
      [field]: e.target.value,
    });
    setError({
      ...error,
      [field]: false,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.username === "") {
      setError({
        ...error,
        username: true,
      });
    }
    if (input.password === "") {
      setError({
        ...error,
        password: true,
      });
    }
    if (error.captcha) {
      setError({
        ...error,
        captcha: true,
      });
    }
    if (input.username !== "" && input.password !== "" && !error.captcha) {
      setSubmitted(true);
    }
  };

  return (
    <div className="App relative h-screen dark:bg-slate-900 bg-slate-50">
      <div className="absolute right-5 top-5 flex items-center justify-around">
        <MdLightMode className="dark:text-white mr-2 text-xl" />
        <Button />
        <MdDarkMode className="dark:text-white ml-2 text-xl" />
      </div>
      <div className="w-screen h-4/5 flex items-center justify-center">
        {submitted ? (
          <div className="w-80 h-96 flex flex-col items-center justify-center">
            <h1 className="text-2xl dark:text-white">
              Thank you for submitting
            </h1>
            <p className="text-sm dark:text-white">after all you are not a robot!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="w-80 h-96">
            <input
              onChange={handleInputChange("username")}
              placeholder="username"
              className="px-4 py-2 my-4 dark:text-white dark:bg-slate-700 bg-slate-200 rounded-full w-full"
            />
            {error.username && (
              <p className="text-red-400 relative bottom-3 text-xs px-4">Username is required</p>
            )}
            <input
              onChange={handleInputChange("password")}
              placeholder="password"
              type="password"
              className="px-4 py-2 my-4 dark:text-white dark:bg-slate-700 bg-slate-200 rounded-full w-full"
            />
            {error.password && (
              <p className="text-red-400 text-xs relative bottom-3 px-4">Password is required</p>
            )}
            <br />
            <Captcha onChange={handleChange} />
            {error.captcha && (
              <p className="text-red-400 text-xs px-4">
                Sorry you are a robot!!
              </p>
            )}
            <button
              type="submit"
              className="bg-red-400 w-full -z-10 py-2 text-white rounded-full my-4"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default App;
