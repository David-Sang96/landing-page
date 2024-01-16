/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { FiAnchor } from "react-icons/fi";
import { ThemeContext } from "../context/Context";

const Navbar = () => {
  const [themeValue, setThemeValue] = useState(
    localStorage.getItem("theme") || ""
  );
  const { changeTheme } = useContext(ThemeContext);

  useEffect(() => {
    if (themeValue) {
      localStorage.setItem("theme", "dark");
      changeTheme("dark");
      setThemeValue(localStorage.getItem("theme"));
    } else {
      changeTheme("light");
      localStorage.removeItem("theme");
    }
  }, [themeValue]);

  return (
    <div className="py-3">
      <nav className="flex justify-between items-center ">
        <div className="flex items-center gap-1 ">
          <FiAnchor className="text-4xl color " />
          <div className="text-3xl color font-bold">Vanilla</div>
        </div>

        <label className="relative inline-flex items-center  cursor-pointer ">
          <input
            value={themeValue}
            checked={themeValue}
            type="checkbox"
            className="sr-only peer"
            onChange={(e) => {
              setThemeValue(e.target.checked);
            }}
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
        </label>
      </nav>
    </div>
  );
};

export default Navbar;
