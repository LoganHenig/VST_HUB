import { useTheme } from "../../context/themeContext";
import "./landingComp.css";
export const Hero = () => {
  const { darkMode } = useTheme();
  return (
    <>
      <div className={`${ darkMode ? 'bg-hero-dark' :'bg-hero-light'} relative w-screen overflow-x-hidden flex justify-center`}>
        <div
          id="video-frame"
          className=" relative z-10 video-width overflow-hidden rounded-lg flex justify-center"
        >
          <div className={`${ darkMode ? 'text-black' :'text-white'} VST-HUB-heading text-7xl z-80 bangers-font flex flex-col invert-color`}>
            <p>
              <b>VST HUB</b>
            </p>
            <div className="">FIND YOUR SOUND</div>
            {/* ADD GET STARTED BUTTON */}
          </div>
          <div className={`${ darkMode ? 'bg-white' : 'bg-vst-blue-900'} width-100 overflow-x-hidden video-clip-path min-w-3xl lg:m-10 md:m-8 m-0 flex justify-center items-center`}>
            <video
              muted
              loop
              className="video-99 video-clip-path z-10"
              autoPlay
            >
              <source src="src\assets\audioVideo.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </>
  );
};
