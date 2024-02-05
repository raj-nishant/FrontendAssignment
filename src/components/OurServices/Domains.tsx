import React from "react";
import OurServices from "./OurServices";

interface ServiceProps {
  imageUrl: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceProps> = ({
  imageUrl,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow justify-center max-md:mt-10">
        <img
          loading="lazy"
          src={imageUrl}
          className="aspect-square w-[50px]"
          alt={title}
        />
        <div className="mt-9 text-3xl font-medium leading-10 text-neutral-700">
          {title}
        </div>
        <div className="mt-2 text-base leading-6 text-neutral-600">
          {description}
        </div>
      </div>
    </div>
  );
};

const Domains: React.FC = () => {
  return (
    <>
      <div className="flex z-10 flex-col justify-center px-12 py-12 mt-0 w-full max-md:px-5 max-md:max-w-full">
        <div className="self-center mt-6 text-3xl font-medium bg-clip-text  leading-[60px] text-neutral-700 max-md:max-w-full">
          We have multidisciplinary teams to meet any{" "}
          <span className="text-blue-500">challenge</span>.
        </div>
        <div className="flex flex-col justify-center px-16 py-8 mt-11 mb-6 bg-white shadow-custom border rounded-[35.39px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <ServiceCard
              imageUrl="/monitor.png"
              title="Front-end"
              description="Our frontend developers understand the delicate balance between aesthetics and functionality."
            />
            <ServiceCard
              imageUrl="/driver.png"
              title="Back-end"
              description="Our backend developers are the architects of efficiency and security. They design and build the databases and APIs."
            />
            <ServiceCard
              imageUrl="/simcard.png"
              title="Data Analysts"
              description="Our data analytics team is a blend of mathematicians, statisticians, and technology enthusiasts."
            />
          </div>
        </div>
      </div>
      <OurServices />
    </>
  );
};

export default Domains;
