import { useState } from "react";
import Captcha from "./captcha";

const FormComponent = ({ onSubmit, onChange, value }) => {
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
  return submitted ? (
    <div className="w-80 h-96 flex flex-col items-center justify-center">
      <h1 className="text-2xl dark:text-white">Thank you for submitting</h1>
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
        <p className="text-red-400 relative bottom-3 text-xs px-4">
          Username is required
        </p>
      )}
      <input
        onChange={handleInputChange("password")}
        placeholder="password"
        type="password"
        className="px-4 py-2 my-4 dark:text-white dark:bg-slate-700 bg-slate-200 rounded-full w-full"
      />
      {error.password && (
        <p className="text-red-400 text-xs relative bottom-3 px-4">
          Password is required
        </p>
      )}
      <br />
      <Captcha onChange={handleChange} />
      {error.captcha && (
        <p className="text-red-400 text-xs px-4">Sorry you are a robot!!</p>
      )}
      <button
        type="submit"
        className="bg-red-400 w-full -z-10 py-2 text-white rounded-full my-4"
      >
        Submit
      </button>
    </form>
  );
};

export default FormComponent;
