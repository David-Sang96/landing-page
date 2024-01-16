/* eslint-disable react-hooks/exhaustive-deps */
import { Navbar } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { FiAnchor } from "react-icons/fi";
import { ThemeContext } from "../context/Context";

const NavBar = () => {
  const [themeValue, setThemeValue] = useState(
    localStorage.getItem("theme") || ""
  );

  const { isDark, changeTheme } = useContext(ThemeContext);

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
    <Navbar fluid rounded className={`${isDark ? "bg-slate-800 " : ""}`}>
      <div className="flex items-center gap-1 ">
        <FiAnchor className="text-4xl color " />
        <div className="text-3xl color font-bold">Vanilla</div>
      </div>
      <div className="flex items-center md:order-2 space-x-2">
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
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          href={"Home"}
          className={`md:text-lg ${isDark ? "text-slate-300" : ""}`}
        >
          Home
        </Navbar.Link>
        <Navbar.Link
          href={"why"}
          className={`md:text-lg ${isDark ? "text-slate-300" : ""}`}
        >
          Why
        </Navbar.Link>
        <Navbar.Link
          href={"feature"}
          className={`md:text-lg ${isDark ? "text-slate-300" : ""}`}
        >
          Features
        </Navbar.Link>
        <Navbar.Link
          href={""}
          className={`md:text-lg ${isDark ? "text-slate-300" : ""}`}
        >
          Clients
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
