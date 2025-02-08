import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import "./landing.css";
import { Hero } from "../../components/landingPageComps/hero";
import { TopThree } from "../../components/landingPageComps/topThree";
import { Compare } from "../../components/landingPageComps/compare";
import { BuySell } from "../../components/landingPageComps/buySell";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { resetProduct } from "../../utils/reduxSlices/productSlice";

gsap.registerPlugin(ScrollTrigger);

export const Landing = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(resetProduct())
  },[])

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

  return (
    <>
      <Hero />
      <TopThree />
      <Compare />
      <BuySell />
      <div className="waves-container waves-svg spacer"></div>
    </>
  );
};
