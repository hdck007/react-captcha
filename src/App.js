import { useEffect } from "react";
import "./App.css";
import Captcha from "./components/captcha";
import Button from "./components/togglebtn";
import { MdLightMode, MdDarkMode } from 'react-icons/md';

function App() {
  // changes on check`
  const handleChange = (value) => {
    console.log(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App relative h-screen dark:bg-slate-900 bg-slate-50">
      <div className="absolute right-5 top-5 flex items-center justify-around">
        <MdLightMode 
          className="dark:text-white mr-2 text-xl"
        />
        <Button />
        <MdDarkMode 
          className="dark:text-white ml-2 text-xl"
        />
      </div>
      <div className="w-screen h-4/5 flex items-center justify-center">
        <form onSubmit={handleSubmit} className="w-80 h-96">
          <input
            placeholder="username"
            className="px-4 py-2 my-4 dark:text-white dark:bg-slate-700 bg-slate-200 rounded-full w-full"
          />
          <input
            placeholder="password"
            type="password"
            className="px-4 py-2 my-4 dark:text-white dark:bg-slate-700 bg-slate-200 rounded-full w-full"
          />
          <Captcha onChange={handleChange} />
          <button
            type="submit"
            className="bg-red-400 w-full -z-10 py-2 text-white rounded-full my-4"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
