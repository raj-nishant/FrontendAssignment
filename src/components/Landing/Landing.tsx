import React from "react";

const Landing: React.FC = () => {
  return (
    <div className="w-full h-[calc(100vh-100px)] relative ">
      <div className="image-container md:px-16 md:py-12">
        <img
          src="/landing.png"
          alt="Your Image"
          className="fade-image border rounded-3xl"
        />
        <div className="flex flex-col justify-center items-start absolute top-[20%] md:top-[30%] left-[5%] w-full md:w-1/2 gap-5">
          <p className="font-bold text-[#F3BC4C]">TECH SERVICE</p>
          <p className="text-5xl md:text-[64px] font-medium text-white md:text-[#3D3D3D]">
            TechSynergy: Innovate, Create, Elevate
          </p>
          <p className="text-white md:text-gray-500 font-medium">
            Unlocking Possibilities, One Code at a Time
          </p>
          <button className="bg-[#66B066] text-white px-5 py-2 rounded-full font-medium">
            See Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
