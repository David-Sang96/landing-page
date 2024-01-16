import { useContext } from "react";
import { FaChrome, FaRaspberryPi } from "react-icons/fa";
import { FaLinux } from "react-icons/fa6";
import { GrApple } from "react-icons/gr";
import { ImWindows8 } from "react-icons/im";
import { MdAndroid } from "react-icons/md";
import { ThemeContext } from "../context/Context";

const Download = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <section className="space-y-14 py-32">
      <div>
        <h2
          className={`text-3xl text-center font-bold text-color mb-2 ${isDark ? "text-slate-200" : ""}`}
        >
          Every Operating system, every device
        </h2>
        <p
          className={`max-w-xs mx-auto text-center text-color md:max-w-full  ${isDark ? "text-slate-400" : ""}`}
        >
          Vanilla runds native clients on all major platforms.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-5 md:flex md:justify-center md:space-x-16">
        <p
          className={`flex flex-col items-center  ${isDark ? "text-slate-200" : ""}`}
        >
          <ImWindows8 className="text-4xl" />
          <span>window</span>
        </p>
        <p
          className={`flex flex-col items-center  ${isDark ? "text-slate-200" : ""}`}
        >
          <GrApple className="text-4xl" />
          <span>masOS</span>
        </p>
        <p
          className={`flex flex-col items-center  ${isDark ? "text-slate-200" : ""}`}
        >
          <FaLinux className="text-4xl" />
          <span>masOS</span>
        </p>
        <p
          className={`flex flex-col items-center  ${isDark ? "text-slate-200" : ""}`}
        >
          <MdAndroid className="text-4xl" />
          <span>masOS</span>
        </p>
        <p
          className={`flex flex-col items-center  ${isDark ? "text-slate-200" : ""}`}
        >
          <FaRaspberryPi className="text-4xl" />
          <span>masOS</span>
        </p>
        <p
          className={`flex flex-col items-center  ${isDark ? "text-slate-200" : ""}`}
        >
          <FaChrome className="text-4xl" />
          <span>masOS</span>
        </p>
      </div>
    </section>
  );
};

export default Download;
