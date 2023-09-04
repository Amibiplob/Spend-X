"use client";
import ScrollCarousel from "scroll-carousel-react";

const Banner = () => {
  return (
    <ScrollCarousel
      autoplay
      autoplaySpeed={8}
      speed={7}
      onReady={() => console.log("I am ready")}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
        <div
          key={item}
          className="bg-blue-300/20 border-2 border-blue-300/70 rounded h-96 w-96"
        >
          {item}
        </div>
      ))}
    </ScrollCarousel>
  );
};

export default Banner;
