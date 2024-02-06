import React from "react";

// Define the type for props of ServiceItem component
type ServiceItemProps = {
  imageUrl: string;
  title: string;
  description: string;
};

// Reusable component for each service item
const ServiceItem: React.FC<ServiceItemProps> = ({
  imageUrl,
  title,
  description,
}) => {
  return (
    <div className="flex mb-2 flex-col md:px-7 md:py-7  h-auto md:w-[31%] bg-white border rounded-[35px] shadow-custom max-md:px-5 max-md:mt-10">
      <img
        loading="lazy"
        src={imageUrl}
        className="aspect-square w-[50px]"
        alt="Service item"
      />
      <div className="mt-9 text-3xl font-medium leading-10  text-neutral-700 ">
        {title}
      </div>
      <div className="mt-5 text-base leading-6 underline text-neutral-600">
        {description}
      </div>
    </div>
  );
};

const OurServices: React.FC = () => {
  // Data for service items
  const services: ServiceItemProps[] = [
    {
      imageUrl: "/document-code.png",
      title: "Custom Software Development",
      description: `Create custom software tailored for your unique needs, including front-end, and core back-end technology.`,
    },
    {
      imageUrl: "/setting-5.png",
      title: "QA and Testing",
      description: `Create custom software tailored for your unique needs, including front-end.`,
    },
    {
      imageUrl: "/data.png",
      title: "AI and Data Science",
      description: `Use leading AI, machine learning, and data engineering technologies to unlock business value.`,
    },
    {
      imageUrl: "/brush.png",
      title: "UX/UI Design",
      description: `Create beautiful, pixel-perfect, and easy-to-use designs that delight your end users.`,
    },
    {
      imageUrl: "/mobile.png",
      title: "UX/UI Design",
      description: `Create beautiful, pixel-perfect, and easy-to-use designs that delight your end users.`,
    },
    {
      imageUrl: "/shapes.png",
      title: "UX/UI Design",
      description: `Create beautiful, pixel-perfect, and easy-to-use designs that delight your end users.`,
    },
  ];

  return (
    <div className="flex flex-col justify-center px-20 py-12 w-full max-md:px-5 max-md:max-w-full">
      <div className="flex md:mx-[14.5%] gap-5 self-center mt-20 text-4xl font-medium leading-[60px] text-neutral-700  max-md:mt-10 ">
        <img
          loading="lazy"
          src="/greenHex.png"
          className="self-start aspect-[1.12] fill-[linear-gradient(180deg,#3171DE_0%,#4AC0F2_100%)] w-[92px]"
          alt="Logo"
        />
        <div className="flex-auto ">
          Empowering Your Digital Vision: Our Comprehensive Tech Services.
        </div>
      </div>
      <div className="relative px-px mx-2.5 mt-20 max-md:mt-10 max-md:max-w-full">
        <div className=" absolute  max-md:hidden inset-0 object-cover w-full h-full">
          <img
            src="/greenHex.png"
            alt="bg"
            className="object-cover mt-[55px] ml-[65%] "
          />
          <img
            src="/greenHex.png"
            alt="bg"
            className="object-cover mt-[25%] ml-[30%]"
          />
        </div>
        <div className="relative z-10 flex  lg:justify-center lg:flex-wrap overflow-x-auto gap-7">
          {services.map((service, index) => (
            <ServiceItem key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
