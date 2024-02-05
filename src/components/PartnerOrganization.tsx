const PartnerOrganization = () => {
  return (
    <div className="flex flex-col items-center justify-around border rounded-xl bg-gray-100 mb-20 m-8">
      <div className="flex flex-col justify-center items-center gap-4 mt-20">
        <h2 className="text-3xl text-center font-semibold text-gray-800">
          Trusted by Leading Organizations
        </h2>
        <p className="text-md md:text-lg text-gray-600 font-semibold w-3/4 text-center">
          Our 4,000+ team has expertise in almost everyprogramming language.
        </p>
      </div>
      <div className="hidden md:flex justify-around items-center w-full overflow-x-auto">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className={logo.class}
          />
        ))}
      </div>

      <div className="md:hidden flex flex-col justify-center items-center w-full">
        {mobileLogos.map((logo, index) => (
          <div key={index} className="flex justify-center items-center gap-10">
            {logo.map((item, idx) => (
              <img
                key={idx}
                src={item.src}
                alt={item.alt}
                className={item.class}
              />
            ))}
          </div>
        ))}
      </div>

      <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-full m-10">
        Out Full Repertorie
      </button>
    </div>
  );
};

// Array of logo data for desktop view
const logos = [
  { src: "/samsungdesk.png", alt: "Samsung", class: "h-44" },
  { src: "/microsoft.png", alt: "Microsoft", class: "h-14" },
  { src: "/google.png", alt: "Google", class: "h-14" },
  { src: "/slack.png", alt: "Slack", class: "h-10" },
  { src: "/lg.png", alt: "LG", class: "h-24" },
  { src: "/sonydesk.png", alt: "Sony", class: "h-40" },
];

// Array of logo data for mobile view
const mobileLogos = [
  [
    { src: "/samsung.png", alt: "Samsung", class: "h-16" },
    { src: "/microsoft.png", alt: "Microsoft", class: "h-5" },
  ],
  [
    { src: "/google.png", alt: "Google", class: "h-5" },
    { src: "/slack.png", alt: "Slack", class: "h-5" },
    { src: "/lg.png", alt: "LG", class: "h-10" },
  ],
  [{ src: "/sony.png", alt: "Sony", class: "h-14" }],
];

export default PartnerOrganization;
