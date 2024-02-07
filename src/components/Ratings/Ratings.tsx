import React, { useState, useRef, useEffect } from "react";
import TestimonialCard from "./TestimonialCard";

const Ratings: React.FC = () => {
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
      <div className="relative">
        <img
          src="/Group 2.png"
          alt="img"
          className="relative lg:absolute -z-10 ml-4"
        />
      </div>
      <div className="flex flex-col items-end pt-10 pb-5">
        <div className="flex justify-center max-md:justify-start">
          <div className="mr-16 text-4xl font-medium leading-[54px] text-neutral-700 w-[553px] max-md:w-full max-md:mr-2.5 max-md:text-center">
            We've stopped counting.
            <p>Over 500 brands count on us.</p>
          </div>
        </div>

        <div className="mt-10 max-md:mx-3 text-xl font-medium leading-6 text-neutral-600 ">
          Our 4,000+ team has expertise in almost every programming language.
        </div>
        <div className="flex flex-col self-stretch px-12 py-10 mt-24 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 justify-between font-bold max-md:max-w-full overflow-hidden">
            <TestimonialCard
              rating="⭐⭐️⭐️⭐️⭐️️"
              quote="Exceptional Solutions, Exceeded Expectations!"
              description="Working with Nearshore has been an absolute pleasure. Their team took the time to understand our unique needs and delivered a solution that not only met but exceeded our expectations. Their expertise and commitment to excellence are truly commendable."
              authorName="Mary Johnson"
              authorRole="CEO of TechCraft Solutions"
              imageUrl="/Vector.png"
              scrollPosition={scrollPosition}
            />
            <TestimonialCard
              rating="⭐⭐️⭐️⭐️⭐️️"
              quote="Transformed Our Business with Innovative Tech!"
              description="We owe a significant part of our success to [Company Name]. Their custom software solution streamlined our processes, saving us time and resources. Their team's dedication to innovation and problem-solving is unmatched. We're grateful for their partnership."
              authorName="Mark Williams"
              authorRole="COO of InnovateNow Inc"
              imageUrl="/mark.png"
              scrollPosition={scrollPosition}
            />
            <TestimonialCard
              rating="⭐⭐️⭐️⭐️⭐️️"
              quote="Sculpted User Experiences Beyond Imagination!"
              description="The UI/UX design crafted by [Company Name] turned our app into a masterpiece. The attention to detail, intuitive design, and user-centric approach have resulted in rave reviews from our customers. Their design expertise has taken our brand to a whole new level."
              authorName="Emily Clark"
              authorRole="CMO of Visionary Apps"
              imageUrl="/Dovetail.png"
              scrollPosition={scrollPosition}
            />
            <TestimonialCard
              rating="⭐⭐️⭐️⭐️⭐️️"
              quote="Sculpted User Experiences Beyond Imagination!"
              description="The UI/UX design crafted by [Company Name] turned our app into a masterpiece. The attention to detail, intuitive design, and user-centric approach have resulted in rave reviews from our customers. Their design expertise has taken our brand to a whole new level."
              authorName="Emily Clark"
              authorRole="CMO of Visionary Apps"
              imageUrl="/Dovetail.png"
              scrollPosition={scrollPosition}
            />
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
      </div>
    </>
  );
};

export default Ratings;
