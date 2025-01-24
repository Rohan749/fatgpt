"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import burger from "../../public/images/burger.png";
import { burgernomics } from "./constants";
import AOS from "aos";
import "aos/dist/aos.css";

const Burgernomics = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="">
      <div className="flex lg:flex-row flex-col-reverse justify-between gap-5">
        <Image
        //   data-aos="fade-right"
        //   data-aos-duration="1400"
        //   data-aos-delay="400"
        //   data-aos-anchor-placement="top-center"
          height={500}
          src={burger}
          alt="burger"
          className="w-full"
        />
        <div className="lg:pr-20 px-3 sm:px-5 lg:px-16 ">
          <div data-aos="zoom-out" className="text_orange text-4xl md:text-7xl">
            BURGERNOMICS
          </div>
          <div className="flex flex-col gap-6 mt-10">
            {burgernomics.map(({ title, description }, index) => {
              return (
                <div
                  key={title}
                  data-aos="zoom-out"
                  data-aos-delay={`${index}00`}
                >
                  <div className="font-bold text-2xl">{title}</div>
                  <div className="text-sm md:text-xl">{description}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Burgernomics;
