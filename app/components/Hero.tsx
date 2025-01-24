import Image from "next/image";
import React, { useEffect } from "react";
import aiImg from "../../public/images/ai160kg.jpeg";
import arrow from "../../public/images/arrow.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="hero_section px-3 sm:px-5 lg:px-16">
      <Image
        src={aiImg}
        alt="Your Image"
        layout="fill"
        objectFit="cover"
        style={{ opacity: 0.2 }}
      />
      <div className="flex flex-col items-center justify-center gap-3 text-center h-[80vh]  relative z-40 bg-transparent text-xl">
        <div className="text-4xl lg:text-5xl font-bold" 
        // data-aos="fade-up"
        >
          Ask FatGPT anything
        </div>
        <div 
        // data-aos-delay="200" data-aos="fade-up"
        className="text-lg"
        >
          Trained on burgers. Optimized for gains.
        </div>
        <div
          // data-aos-delay="400"
          // data-aos="fade-up"
          className="font-bold text-2xl"
        >
          Chat with LLM
        </div>
        <div
          // data-aos-delay="800"
          // data-aos="fade"
          // data-aos-duration="1200"
          className="p-4 bg_orange w-[20rem] sm:w-[25rem] lg:w-[31rem] rounded-full flex items-center gap-2"
        >
          <input
            placeholder="Which is the largest language model in the world?"
            className="bg-transparent outline-none text-xs lg:text-lg w-full"
          />
          <button className="rounded-full transition-all hover:scale-125">
            <Image height={50} src={arrow} alt="->" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
