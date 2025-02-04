import "./landingComp.css";

export const Compare = () => {
  return (
    <>
      <div className="w-screen flex pt-10 pb-20 justify-center min-h-20 items-center flex-col top-neg-20 bg-highlight-background">
        <div className=" text-4xl bangers-font underline-offset-6 underline invert mb-8 text-center">
          Compare commming SOON
        </div>
        <div className="flex flex-wrap items-center justify-center space-x-14 text-center text-vst-white mb-16 w-60">
          compare two VSTs to see which one is right for you
        </div>
        <div className="left-right-container">
          <div className="left flex flex-col justify-center items-center">
            <div className="comp-image" />
            <div className="text-vst-white text-center">
              Side by side comparison
            </div>
          </div>
          <div className="right flex flex-col justify-center items-center">
            <div className="comp-image" />
            <div className="text-vst-white text-center">
              Side by side comparison
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
