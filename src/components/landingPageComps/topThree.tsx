import { VstCard } from "../card";
import "./landingComp.css";
export const TopThree = () => {
  return (
    <>
      <div className="w-screen flex justify-center min-h-20 items-center flex-col top-neg-20">
        <div className=" text-4xl bangers-font underline-offset-6 underline invert mb-8">
          Featured Plugins
        </div>
        <div className="flex flex-wrap items-center justify-center space-x-14">
          <VstCard />
          <VstCard />
          <VstCard />
        </div>
      </div>
    </>
  );
};
