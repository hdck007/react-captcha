import Button from "./togglebtn";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const DarkModeToggle = () => {
  return (
    <div className="absolute right-5 top-5 flex items-center justify-around">
      <MdLightMode className="dark:text-white mr-2 text-xl" />
      <Button />
      <MdDarkMode className="dark:text-white ml-2 text-xl" />
    </div>
  );
};

export default DarkModeToggle;
