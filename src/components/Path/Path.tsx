import React, { useState, useRef, useEffect } from "react";

const Path: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const boxWidth = 380; // Width of each box
  const numBoxes = 4; // Number of boxes

  useEffect(() => {
    const containerWidth =
      containerRef.current?.getBoundingClientRect().width || 0;
    const maxScrollPosition = numBoxes * boxWidth - containerWidth;
    if (scrollPosition > maxScrollPosition) {
      setScrollPosition(maxScrollPosition);
    }
  }, [scrollPosition]);

  const handleScroll = (scrollOffset: number) => {
    const newPosition = scrollPosition + scrollOffset;
    setScrollPosition(Math.max(0, newPosition));
  };

  return (
    <>
      <div
        ref={containerRef}
        className="flex flex-col justify-center items-center bg-gray-100 m-10 rounded-xl p-5 overflow-hidden"
      >
        <div className="flex text-2xl md:text-4xl font-semibold text-center m-10">
          <div>
            Choose Us: Your Path to Innovation and{" "}
            <span className="grad-text">Success</span>
          </div>
          <img className="ml-2 max-md:hidden" src="/greenHex.png" alt="" />
        </div>
        <div className="flex items-center justify-between md:gap-5 md:ml-7 h-66 w-full">
          <div
            className="flex flex-col items-center m-5 bg-white shadow-lg rounded-xl p-5 z-50 w-80 h-52"
            style={{ transform: `translateX(-${scrollPosition}px)` }}
          >
            <p className="text-xl md:text-2xl font-semibold w-full mx-24">
              Expertise Across the Tech Spectrum
            </p>
            <p className="text-md md:text-lg mt-5 w-full">
              Our team consists of developers, designers, and experts who excel
              in various areas of technology.
            </p>
          </div>
          <div
            className="flex flex-col items-center text-white m-5 bg-gradient-to-tr from-[#EDE14F] to-[#62AE6E] shadow-lg rounded-xl p-5 z-50 w-80 h-52"
            style={{ transform: `translateX(-${scrollPosition}px)` }}
          >
            <p className="text-xl md:text-2xl font-semibold w-full mx-24">
              Proven Track Record of Success:
            </p>
            <p className="text-md md:text-lg mt-5">
              Our portfolio is a testament to our ability to deliver impactful
              results.
            </p>
          </div>
          <div
            className="flex flex-col items-center m-5 bg-white shadow-lg rounded-xl p-5 z-50 w-80 h-52 "
            style={{ transform: `translateX(-${scrollPosition}px)` }}
          >
            <p className="text-xl md:text-2xl font-semibold w-full mx-24">
              Collaborative Approach, Transparent Communication:
            </p>
            <p className="text-md md:text-lg mt-5">
              We believe in working hand-in-hand with our clients.
            </p>
          </div>
          <div
            className="flex flex-col items-center text-white m-5 bg-gradient-to-tr from-[#3171DE] to-[#4AC0F2] shadow-lg rounded-xl p-5 z-50 w-80 h-52"
            style={{ transform: `translateX(-${scrollPosition}px)` }}
          >
            <p className="text-xl md:text-2xl font-semibold w-full mx-24">
              Tailored Solutions for Your Unique Needs:
            </p>
            <p className="text-md md:text-lg mt-5">
              We understand that no two projects are alike.
            </p>
          </div>
        </div>

        <div className="flex gap-5 self-center mt-5 max-w-full w-[148px] ">
          <button onClick={() => handleScroll(-100)}>
            <img loading="lazy" src="/leftbtn.png" alt="Left Button" />
          </button>
          <button onClick={() => handleScroll(100)}>
            <img loading="lazy" src="/rightbtn.png" alt="Right Button" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Path;
