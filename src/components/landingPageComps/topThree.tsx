import { VstCard } from "../card";
import { ProductCard } from "../pcard";
import "./landingComp.css";
export const TopThree = () => {
  return (
    <>
      <div className="w-screen flex justify-center min-h-20 items-center flex-col top-neg-20">
        <div className=" text-4xl bangers-font underline-offset-6 underline invert mb-8">
          Featured Plugins
        </div>
        <div className="flex items-center justify-center space-x-10 py-10 px-20">
          <ProductCard
            id={10501}
            title="Drum Synth"
            category="Synthesizer"
            description="Enter a freshly updated and thoughtfully furnished peaceful home
          surrounded by ancient trees, stone walls, and open meadows."
            rating={5}
          />
          <ProductCard
            id={10502}
            title="Drum Synth"
            category="Synthesizer"
            description="Enter a freshly updated and thoughtfully furnished peaceful home
          surrounded by ancient trees, stone walls, and open meadows."
            rating={3}
          />
          <ProductCard
            id={10503}
            title="Drum Synth"
            category="Synthesizer"
            description="Enter a freshly updated and thoughtfully furnished peaceful home
          surrounded by ancient trees, stone walls, and open meadows."
            rating={4}
          />
        </div>
      </div>
    </>
  );
};
