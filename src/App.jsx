import { useContext } from "react";
import Client from "./components/Client";
import Download from "./components/Download";
import Features from "./components/Features";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar.";
import Solution from "./components/Solution";
import Why from "./components/Why";
import { ThemeContext } from "./context/Context";

function App() {
  const { isDark } = useContext(ThemeContext);

  return (
    <div className="">
      <div className={`${isDark ? "bg-slate-800" : ""}`}>
        <div className="container mx-auto px-3">
          <NavBar />
          <HeroSection />
        </div>
        <Why />
        <div className="container mx-auto px-3">
          <Features />
          <Client />
          <Solution />
          <Download />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
