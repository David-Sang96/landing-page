import { FiAnchor } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className=" bg-slate-800 text-white pt-4 pb-20 border-t-2 border-slate-500">
      <div className="container mx-auto flex flex-col gap-10 items-center md:flex-row md:justify-between ">
        <div className="flex items-center gap-1 ">
          <FiAnchor className="text-5xl color " />
          <div className="text-4xl color font-bold">Vanilla</div>
        </div>
        <ul className="flex gap-10">
          <li>
            <a href="">Privacy Notice</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">Why Love?</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
