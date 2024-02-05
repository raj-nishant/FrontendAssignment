const Footer = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-around px-10 mt-56 gap-20 md:mt-72">
        <div className="flex flex-col-reverse items-start md:justify-around md:w-2/3 gap-10 md:gap-36 md:flex-row">
          <div className="flex justify-center gap-10 md:gap-36">
            <div className="">
              <p className=" text-lg font-normal mb-2">Product</p>
              <p className=" text-lg font-normal text-gray-400">
                Employee database
              </p>
              <p className=" text-lg font-normal text-gray-400">Payroll</p>
              <p className=" text-lg font-normal text-gray-400">Absences</p>
              <p className=" text-lg font-normal text-gray-400">
                Time Tracking
              </p>
              <p className=" text-lg font-normal text-gray-400">
                Shift Planner
              </p>
              <p className=" text-lg font-normal text-gray-400">Recruiting</p>
            </div>
          </div>

          <div className="flex justify-center gap-10 md:gap-36">
            <div className="">
              <p className=" text-lg font-normal">Information</p>
              <p className=" text-lg font-normal text-gray-400">FAQ</p>
              <p className=" text-lg font-normal text-gray-400">Blog</p>
              <p className=" text-lg font-normal text-gray-400">Support</p>
            </div>
            <div className="">
              <p className=" text-lg font-normal">Company</p>
              <p className=" text-lg font-normal text-gray-400">About Us</p>
              <p className=" text-lg font-normal text-gray-400">Career</p>
              <p className=" text-lg font-normal text-gray-400">Contact us</p>
              <p className=" text-lg font-normal text-gray-400">Lift Media</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 px-11 py-10 bg-blue-900 bg-opacity-10 md:w-1/3 rounded-[30px] max-md:px-5">
          <div className="text-base leading-7">Subscribe</div>
          <div className="flex gap-5 justify-between pr-1 pl-6 mt-6 text-sm bg-white border-solid border-[1.5px] border-slate-200 rounded-[30px] max-md:pl-5">
            <input
              className="my-auto"
              type="text"
              placeholder="Email address"
            />

            <img
              loading="lazy"
              srcSet="/arrow.svg"
              className="aspect-[1.08] fill-[linear-gradient(0deg,#3171DE_0%,#3171DE_100%)] w-[55px]"
            />
          </div>
          <div className="mt-6 text-xs leading-5">
            Hello, we are Lift Media. Our goal is to translate the positive
            effects from revolutionizing how companies engage with their clients
            & their team.
          </div>
        </div>
      </div>

      <hr className="w-11/12 mx-auto border-[1px] border-gray-300 my-10" />

      <div className="flex flex-col-reverse md:gap-80 md:flex-row w-full mb-5">
        <div className="flex justify-around items-center w-full">
          <img src="/logo.png" alt="logo" className="w-14 h-14" />
        </div>
        <div className="flex justify-center gap-5 ">
          <p className=" text-sm font-normal">Terms</p>
          <p className=" text-sm font-normal">Privacy</p>
          <p className=" text-sm font-normal">Cookies</p>
        </div>
        <div className="flex justify-center gap-5 items-center w-full pe-20">
          <img src="/fb.png" alt="" />
          <img src="/twitter.png" alt="" />
          <img src="/linkedin.png" alt="" />
        </div>
      </div>
    </>
  );
};
export default Footer;
