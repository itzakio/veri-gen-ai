import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-white/70 backdrop-blur-md border border-white/20 overflow-hidden pt-28">
      <div className="max-w-360 mx-auto flex justify-start py-10 md:py-16 lg:py-24 xl:py-52">
        <div className="w-full lg:w-1/2 flex flex-col gap-4 px-8 xl:px-0">
          <Image
            className="lg:hidden"
            src="/banner/d-md.png"
            width={958}
            height={489}
            alt="banner"
          />
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold ">
            Boost Revenue and Cut Costs by Balancing AI in Communications
          </h1>
          <p className="text-base lg:text-lg">
            Discover how balancing AI with human oversight can boost your bottom
            line. In today’s AI-driven business world, maintaining the integrity
            of your communications is crucial. VeriGenAI enables executives to
            validate AI-generated content in contracts, reports, and emails,
            ensuring compliance and safeguarding sensitive data.
          </p>
          <button className="bg-[#00AAC9] px-8 py-3 rounded-full font-bold text-white w-fit">
            Learn More
          </button>
        </div>
      </div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 z-30">
        <Image
          className="hidden lg:block lg:w-lg xl:w-3xl"
          src="/banner/d-xl.png"
          width={958}
          height={489}
          alt="banner"
        />
      </div>
      <Image
        className="absolute left-0 bottom-0 w-full"
        src="/banner/bottom.png"
        width={958}
        height={489}
        alt="banner"
      />

      {/* bubble */}
      <div className="absolute top-0 left-0 -z-999 -mt-30 flex justify-between w-full">
        <div className="flex gap-20">
          <div
            className="w-10 h-70  lg:w-60 lg:h-120 -rotate-50 rounded-full 
bg-linear-to-br from-blue-500 to-indigo-300 
blur-2xl opacity-60 animate-pulse"
          ></div>
          <div
            className="w-10 h-70  lg:w-60 lg:h-120 -rotate-50 rounded-full 
bg-linear-to-br from-blue-500 to-indigo-300 
blur-2xl opacity-60 animate-pulse"
          ></div>
        </div>

        <div className="flex gap-20">
          <div
            className="w-10 h-70  lg:w-60 lg:h-120 rotate-50 rounded-full 
bg-linear-to-br from-green-500 to-green-300 
blur-2xl opacity-60 animate-pulse"
          ></div>
          <div
            className="w-10 h-70  lg:w-60 lg:h-120 rotate-50 rounded-full 
bg-linear-to-br from-green-500 to-green-300 
blur-2xl opacity-60 animate-pulse"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
