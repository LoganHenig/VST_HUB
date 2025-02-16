import { useState } from "react";
import { ProductCard } from "../card";
import "./landingComp.css";

export const TopThree = () => {
  const [topThree] = useState([
    {
      id: '5eb7cf5a86d9755df3a6c593',
      title: "Kick Ninja",
      category: "Drum Synth",
      author: "The Him DSP",
      description:
        "Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows.",
      rating: 5,
    },
    {
      id: '5eb7cf5a86d9755df3a6c594',
      title: "Egoist",
      category: "Groovebox",
      author: "Sugar Bytes",
      description:
        "Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows.",
      rating: 4,
    },
    {
      id: '5eb7cf5a86d9755df3a6c597',
      title: "H3000 Factory Mk II",
      category: "Harmonizer",
      author: "Eventide",
      description:
        "Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows.",
      rating: 3,
    },
  ]);

  const topThreeCards = topThree.map((product) => (
    <ProductCard product={product} id={product.id} />
  ));

  return (
    <>
      <div className="w-screen flex justify-center min-h-20 items-center flex-col top-neg-20 bg-primary-background">
        <div className=" text-4xl bangers-font underline-offset-6 underline mb-8 text-primary-content">
          Featured Plugins
        </div>
        <div className="flex items-center justify-center space-x-10 py-10 px-20">
          {topThreeCards}
        </div>
      </div>
    </>
  );
};
