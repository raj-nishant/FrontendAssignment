import React from "react";

function DesktopMembers(): JSX.Element {
  return (
    <div className="hidden relative md:flex items-center w-fit justify-center mt-56">
      <div className="relative left-44">
        <img src="/Frame 3254.png" alt="m1" />
      </div>
      <div className="relative left-24">
        <img src="/Frame 3254-1.png" alt="m1" />
      </div>
      <div className="relative">
        <img src="/Frame 3254-2.png" alt="m1" />
      </div>
      <div className="relative right-24">
        <img src="/Frame 3254-3.png" alt="m1" />
      </div>
      <div className="relative right-44">
        <img src="/Frame 3254-4.png" alt="m1" />
      </div>
    </div>
  );
}

function MobileMembers(): JSX.Element {
  return (
    <div className="relative flex flex-col md:hidden items-center justify-between w-full">
      <div className="top-0 flex">
        <img
          src="/Frame 3254.png"
          alt="m1"
          className="w-20 h-24 sm:w-40 sm:h-44"
        />
        <img
          src="/Frame 3254-1.png"
          alt="m1"
          className="w-20 h-24 sm:w-40 sm:h-44"
        />
      </div>
      <div className="top-20 flex">
        <img
          src="/Frame 3254-2.png"
          alt="m1"
          className="w-20 h-24 sm:w-40 sm:h-44"
        />
        <img
          src="/Frame 3254-3.png"
          alt="m1"
          className="w-20 h-24 sm:w-40 sm:h-44"
        />
      </div>
      <div className="top-40 flex">
        <img
          src="/Frame 3254-4.png"
          alt="m1"
          className="w-20 h-24 sm:w-40 sm:h-44"
        />
      </div>
    </div>
  );
}

const Team: React.FC = () => {
  return (
    <>
      <div className="absolute w-full h-full hidden md:flex justify-around gap-96 items-center -z-10">
        <img src="/greenHex.png" alt="bg" className="object-cover" />
        <img src="/greenHex.png" alt="bg" className="object-cover" />
      </div>
      <div className="flex flex-col items-center justify-center mb-20">
        <DesktopMembers />
        <MobileMembers />
        <p className="text-center text-3xl font-bold text-black mt-5 md:mt-20">
          Let's Form Your Crew
        </p>
        <button className="bg-[#3171DE] text-white px-10 py-2 rounded-full mt-10">
          Schedule a Call
        </button>
      </div>
    </>
  );
};

export default Team;
