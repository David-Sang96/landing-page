import { useContext } from "react";
import { BiHomeHeart, BiSolidPaint } from "react-icons/bi";
import { MdOutlineMobileFriendly } from "react-icons/md";
import { ThemeContext } from "../context/Context";

const Solution = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <section
      className={`text-center space-y-20 md:border-b-2 md:pb-28 ${isDark ? "border-slate-600" : ""}`}
    >
      <h2 className="text-4xl font-bold color">Vanilla fits your needs</h2>
      <div className="flex flex-col gap-20 md:flex-row md:justify-between  md:flex-wrap ">
        <div className="space-y-4 max-w-xs mx-auto border border-transparent hover:border-green-500 duration-300 p-4 rounded-lg md:max-w-lg">
          <BiHomeHeart className="mx-auto text-7xl color" />
          <h3
            className={`text-2xl text-color font-bold ${isDark ? "text-slate-200" : ""}`}
          >
            Runs in Cloud or On-Premises
          </h3>
          <p
            className={`max-w-xs mx-auto text-color ${isDark ? "text-slate-400" : ""}`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            libero! Iste in magnam minus dolor, temporibus recusandae libero
            impedit consectetur. Quia hic delectus nemo iste.
          </p>
          <p className="color font-bold border-b-2 border-green-500 inline-block ">
            Learn More
          </p>
        </div>
        <div className="space-y-4 max-w-xs mx-auto border border-transparent hover:border-green-500 duration-300 p-4 rounded-lg md:max-w-lg">
          <MdOutlineMobileFriendly className="mx-auto text-7xl color" />
          <h3
            className={`text-2xl text-color font-bold ${isDark ? "text-slate-200" : ""}`}
          >
            Full Mobile Support
          </h3>
          <p
            className={`max-w-xs mx-auto text-color ${isDark ? "text-slate-400" : ""}`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            libero! Iste in magnam minus dolor, temporibus recusandae libero
            impedit consectetur. Quia hic delectus nemo iste.
          </p>
          <p className="color font-bold border-b-2 border-green-500 inline-block ">
            Learn More
          </p>
        </div>
        <div className="space-y-4 max-w-xs mx-auto border border-transparent hover:border-green-500 duration-300 p-4 rounded-lg md:max-w-lg">
          <BiSolidPaint className="mx-auto text-6xl color md:text-7xl" />
          <h3
            className={`text-2xl text-color font-bold ${isDark ? "text-white" : ""}`}
          >
            Flexibility and Customization
          </h3>
          <p
            className={`max-w-xs mx-auto text-color ${isDark ? "text-slate-400" : ""}`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            libero! Iste in magnam minus dolor, temporibus recusandae libero
            impedit consectetur. Quia hic delectus nemo iste.
          </p>
          <p className="color font-bold border-b-2 border-green-500 inline-block ">
            Learn More
          </p>
        </div>
      </div>
    </section>
  );
};

export default Solution;
