import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import "./landing.css";
import { Hero } from "../../components/landingPageComps/hero";
import { TopThree } from "../../components/landingPageComps/topThree";
import { Compare } from "../../components/landingPageComps/compare";
import { BuySell } from "../../components/landingPageComps/buySell";
import { useTheme } from "../../context/themeContext";

gsap.registerPlugin(ScrollTrigger);

export const Landing = () => {
  
  const { darkMode, setDarkMode } = useTheme();
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });
    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  // const navigate = useNavigate();

  return (
    <>
            <button
          onClick={() => setDarkMode(!darkMode)}
          className={`p-2 border rounded-md ${darkMode ? 'bg-vst-blue-200 text-vst-blue-900' : 'bg-vst-blue-700 text-vst-blue-100'}`}
        >
        Toggle {darkMode ? "Light" : "Dark"} Mode
      </button>
      <Hero />
      <TopThree />
      <Compare />
      <BuySell />
      <div className="layer2 spacer"></div>
    </>
  );
};
