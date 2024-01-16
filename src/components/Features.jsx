import { useContext } from "react";
import { FaWeightHanging } from "react-icons/fa6";
import { LuWallpaper } from "react-icons/lu";
import { MdOutlineFileDownload } from "react-icons/md";
import { PiRocketLaunchLight } from "react-icons/pi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { ThemeContext } from "../context/Context";

const Features = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <section className={`my-16 ${isDark ? "text-white" : ""}`} id="feature">
      <div className="grid md:grid-cols-2 space-y-20 md:space-y-0 items-center ">
        <div className="flex flex-col space-y-4 md:space-y-0  md:grid md:grid-cols-2 md:gap-7  ">
          <div className="text-center border border-transparent duration-300 hover:border-green-500 rounded-3xl p-3 space-y-3  max-w-sm mx-auto">
            <PiRocketLaunchLight className="mx-auto text-3xl color" />
            <h3 className="font-bold text-2xl color">Blazing Fast</h3>
            <p className={` text-color ${isDark ? "text-slate-400" : ""}`}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, dicta?
            </p>
          </div>
          <div className="text-center border border-transparent duration-300  hover:border-green-500 rounded-3xl p-3 space-y-3 max-w-sm mx-auto">
            <FaWeightHanging className="mx-auto text-3xl color" />
            <h3 className="font-bold text-2xl color">Lightweight</h3>
            <p className={` text-color ${isDark ? "text-slate-400" : ""}`}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, dicta?
            </p>
          </div>
          <div className="text-center border border-transparent duration-300  hover:border-green-500 rounded-3xl p-3 space-y-3 max-w-sm mx-auto">
            <RiSecurePaymentLine className="mx-auto text-3xl color" />
            <h3 className="font-bold text-2xl color">Secure</h3>
            <p className={` text-color ${isDark ? "text-slate-400" : ""}`}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, dicta?
            </p>
          </div>
          <div className="text-center border border-transparent duration-300  hover:border-green-500 rounded-3xl p-3 space-y-3 max-w-sm mx-auto">
            <LuWallpaper className="mx-auto text-3xl color" />
            <h3 className="font-bold text-2xl color">Everywhere</h3>
            <p className={` text-color ${isDark ? "text-slate-400" : ""}`}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, dicta?
            </p>
          </div>
        </div>
        <div className="text-center space-y-8 md:mx-auto ">
          <h2
            className={`text-3xl font-bold text-color md:max-w-xs md:text-4xl ${isDark ? "text-slate-200" : ""}`}
          >
            Why 500+ million users love AnyDesk
          </h2>
          <button className="btn flex items-center gap-2 mx-auto ">
            <MdOutlineFileDownload className="text-2xl" />
            <span> Discover</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
