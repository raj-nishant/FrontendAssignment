const Call: React.FC = () => {
  return (
    <>
      <div className="">
        <div className="flex flex-col items-center justify-center px-10">
          <div className="bg-gradient-to-b from-[#3171DE] to-[#4AC0F2] w-full rounded-lg flex flex-col items-center justify-center pt-20">
            <p className=" text-4xl md:text-5xl font-semibold w-3/4 text-center text-white">
              Ready to Transform Your Vision into Reality? Let's Get Started!
            </p>
            <button className="bg-white font-semibold text-lg mdtext-2xl px-10 py-3 rounded-full mt-10">
              <span className="grad-text text-blue-500">Schedule a Call</span>
            </button>
            <img
              src="/Intersect1.png"
              alt="Intersect"
              className="relative top-20 md:top-44"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Call;
