import { useContext } from "react";
import { BsCart2 } from "react-icons/bs";
import { MdOutlineFileDownload } from "react-icons/md";
import { ThemeContext } from "../context/Context";

const HeroSection = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <section
      className="flex flex-col justify-center items-center  space-y-10 py-32 md:pb-24 "
      id="Home"
    >
      <div className="space-y-2">
        <h1
          className={`text-7xl text-center font-bold text-slate-600  ${isDark ? "text-red-300" : ""}`}
        >
          Access. <span className="color block md:inline">Now.</span>
        </h1>
        <p
          className={`px-4 text-center text-sm text-color ${isDark ? "text-slate-400" : ""}`}
        >
          Access any device at any time.From anywhere.Always secure end fast.
        </p>
      </div>
      <div className="flex flex-col space-y-5 md:space-y-0 md:flex-row md:space-x-8">
        <button className="btn flex items-center gap-2">
          <MdOutlineFileDownload className="text-2xl" />
          <span> Download Now</span>
        </button>
        <button className="btn bg-white text-green-500 flex items-center gap-2 hover:bg-green-500 hover:text-white">
          <BsCart2 className="text-2xl" />
          <span> Download Now</span>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
