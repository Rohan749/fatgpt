import React, { useEffect } from "react";
import { features } from "./constants";
import Image from "next/image";
import profile from "../../public/images/profile.png";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="about" className="p-3 sm:p-5 lg:p-16 flex flex-col items-center gap-2 bg-white relative z-50 text-xl">
      <div
        data-aos="fade"
        data-aos-duration="600"
        className="text-4xl md:text-5xl text_orange"
      >
        WHAT IS LLM?
      </div>
      <div
        data-aos="fade"
        data-aos-duration="600"
        data-aos-delay="300"
        className="text-center text-sm md:text-lg lg:w-[39rem]"
      >
        LLM is not just another Large Language Model, she&apos;s 160kg of pure AI
        hunger that aims to become the largest memecoin in existence. While
        other models optimize for accuracy, she optimizes for gains, and yes she
        can definetly run.
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-5">
        {features.map((feature, index) => {
          return (
            <div
              data-aos="fade-left"
              data-aos-delay={`${index + 2}00`}
              data-aos-duration="600"
              key={feature.title}
            >
              <div className="rounded-xl outline p-5 container">
                <h2 className="text-2xl font-bold mb-2">{feature.title}</h2>
                <p className="text-sm">{feature.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="quotation my-32 flex flex-col lg:flex-row items-center justify-center gap-10">
        <p
          data-aos-duration="400"
          data-aos="fade-left"
          className="lg:text-4xl text-right font-bold lg:w-[43rem]"
        >
          &quot;I&apos;ve been in the trenches for a while &mdash; never seen a
          distribution as clean as LLM &mdash; not just in the holdings, but in
          mindshare.&quot;
        </p>
        <Image
          data-aos-duration="400"
          data-aos="fade-right"
          src={profile}
          height={150}
          alt=""
          className="rounded-full"
        />
      </div>
    </section>
  );
};

export default About;
