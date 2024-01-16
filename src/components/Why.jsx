import { useContext } from "react";
import { TbEyeStar } from "react-icons/tb";
import { ThemeContext } from "../context/Context";

const Why = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <section
      className={` bg-slate-50 py-36 px-3 ${isDark ? "bg-slate-800" : ""}`}
      id="why"
    >
      <div className="container mx-auto text-center space-y-5 md:text-left ">
        <p className="color">Remote Desktop Software</p>
        <h2
          className={`text-5xl font-bold text-slate-600 md:text-8xl  ${isDark ? "text-red-300" : ""} `}
        >
          Overcoming <br /> distance
        </h2>
        <p
          className={`max-w-lg mx-auto text-color md:mx-0 ${isDark ? "text-slate-400" : ""}`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          quisquam voluptates labore repellat vel ad porro maxime. Numquam
          molestias recusandae eligendi, architecto illo vel quod?
        </p>
        <button className="btn flex items-center gap-2 mx-auto md:mx-0">
          <TbEyeStar className="text-2xl" />
          <span> Check Out Now</span>
        </button>
      </div>
    </section>
  );
};

export default Why;
