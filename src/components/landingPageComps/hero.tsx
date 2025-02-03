import "./landingComp.css";
export const Hero = () => {
  return (
    <>
      <div className={`bg-primary-background relative w-screen overflow-x-hidden flex justify-center`}>
        <div
          id="video-frame"
          className=" relative video-width overflow-hidden rounded-lg flex justify-center"
        >
          <div className={` VST-HUB-heading text-7xl bangers-font flex flex-col`}>
            <p>
              <b><span className="VST-HUB-RGB">VST </span> <span className="invert-text absolute z-50"> REALM</span></b>
            </p>
            <div className="invert-text">FIND YOUR SOUND</div>
            {/* ADD GET STARTED BUTTON */}
          </div>
          <div className={`bg-primary-content width-100 overflow-x-hidden video-clip-path min-w-3xl lg:m-10 md:m-8 m-0 flex justify-center items-center`}>
            <video
              muted
              loop
              className="video-99 video-clip-path"
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
