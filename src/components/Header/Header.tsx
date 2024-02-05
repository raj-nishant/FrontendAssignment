import React, { useState } from "react";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="w-full h-[80px] bg-white px-20 ">
      <div className="md:max-w-[1480px] max-w-[600px] m-auto h-full w-full flex justify-between items-center">
        <img
          src="/logo.png"
          alt="Logo"
          className="hidden sm:inline lg:inline xl:inline h-8 cursor-pointer"
        />
        <img
          src="/logo.png"
          alt="Mobile Logo"
          className="sm:hidden lg:hidden xl:hidden h-8"
        />
        <div className="border rounded-[50px] bg-[#F7F7FD] h-[49px] flex items-center justify-center">
          <div className="hidden md:flex  w-[633px]  justify-center">
            <ul className="flex gap-20">
              <li className="cursor-pointer text-blue-600 font-semibold">
                Home
              </li>
              <li className="cursor-pointer">About us</li>
              <li className="cursor-pointer">Services</li>
              <li className="cursor-pointer">Contact Us</li>
            </ul>
          </div>
        </div>

        <div className="hidden md:flex">
          <div className="leading-3 p-5">
            En <span>&#9662;</span>
          </div>
          <button className=" border rounded-[50px] flex justify-bteween items-center bg-[#3171DE] h-12 w-40 text-white px-6 gap-2 cursor-pointer">
            Schedule a call
          </button>
        </div>

        <div className="md:hidden" onClick={handleToggle}>
          <img
            alt="Menu"
            src={toggle ? "/close.svg" : "/hamburgerMenu.svg"}
            className="md:hidden"
          />
        </div>
      </div>

      <div
        className={
          toggle
            ? "absolute z-10 p-4 bg-white w-full px-8 md:hidden border-b"
            : "hidden"
        }
      >
        <ul>
          <li className="p-4 hover:bg-gray-100 flex justify-center items-center cursor-pointer">
            Home
          </li>
          <li className="p-4 hover:bg-gray-100 flex justify-center items-center cursor-pointer">
            About us
          </li>
          <li className="p-4 hover:bg-gray-100 flex justify-center items-center cursor-pointer">
            Services
          </li>
          <li className="p-4 hover:bg-gray-100 flex justify-center items-center cursor-pointer">
            Contact Us
          </li>

          <div className="flex flex-col my-4 gap-4">
            <button className="border border-[#0C5BC6] text-blue-500 rounded-sm flex justify-center items-center bg-transperent px-6 gap-2 py-4 cursor-pointer">
              Schedule a call
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
