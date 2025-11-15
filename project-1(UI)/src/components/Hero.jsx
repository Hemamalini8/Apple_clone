import React from "react";
import HeroOne from "../assets/HeroOne.jpg";
import HeroTwo from "../assets/HeroTwo.jpg";
import HeroThree from "../assets/HeroThree.jpg";
import HeroOneMobile from "../assets/HeroOneMobile.jpg";
import HeroTwoMobile from "../assets/HeroTwoMobile.jpg";
const Hero = () => {
  return (
    <div>
      <div className="relative flex justify-center items-center">
        <img
          className="w-full h-[80vh] object-cover hidden md:flex"
          src={HeroOne}
          alt="HeroOne"
        />
        <img
          className="w-full h-[80vh] object-cover md:hidden"
          src={HeroOneMobile}
          alt="HeroOneMobile"
        />
        <div className="absolute top-8 space-y-2 md:top-12">
          <h2
            className="text-3xl font-semibold text-white md:text-6xl
textcenter"
          >
            iPhone 17 Pro
          </h2>
          <p className="font-medium text-white text-lg text-center md:text-2xl">
            All out Pro.
          </p>
          <div className="space-x-4 space-y-2 text-center">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bgblue-500 font-normal md:px-6 md:font-medium">
              Learn more
            </button>
            <button
              className="bg-transparent border border-blue-600 text-blue-500 px-6
py-2 rounded-full font-normal md:font-medium hover:bg-blue-600
hover:textwhite"
            >
              Buy
            </button>
          </div>
        </div>
      </div>
      <div className="relative flex justify-center items-center mt-3">
        <img
          className="w-full h-[80vh] object-cover hidden md:flex"
          src={HeroTwo}
          alt="HeroOne"
        />
        <img
          className="w-full h-[60vh] object-cover md:hidden"
          src={HeroTwoMobile}
          alt="HeroOneMobile"
        />
        <div className="absolute top-2 space-y-1 md:top-12">
          <h2 className="text-3xl font-semibold text-black md:text-6xl textcenter">
            iPhone Air
          </h2>
          <p className="font-medium text-black text-lg text-center md:text-2xl">
            The thinnest iPhone ever.
          </p>
          <p className="font-medium text-black text-lg text-center md:text-2xl">
            With the power of pro inside.
          </p>
          <div className="space-x-4 space-y-2 text-center">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bgblue-500 font-normal md:px-6 md:font-medium">
              Learn more
            </button>
            <button
              className="bg-transparent border border-blue-600 text-blue-500 px-6
py-2 rounded-full font-normal md:font-medium hover:bg-blue-600
hover:textwhite"
            >
              Buy
            </button>
          </div>
        </div>
      </div>
      <div className="relative flex justify-center items-center mt-3">
        <img
          className="w-full h-[60vh] object-cover md:h-[80vh]"
          src={HeroThree}
          alt="HeroThree"
        />
        <div className="absolute top-12 space-y-2">
          <h2
            className="text-3xl font-semibold text-white text-center
md:text6xl"
          >
            MackBook Pro 14"
          </h2>
          <p className="font-medium text-white text-lg text-center md:text2xl">
            Supercharged by M5.
          </p>
          <div className="space-x-4 space-y-2 text-center">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bgblue-500 font-normal md:px-6 md:font-medium">
              Learn more
            </button>
            <button
              className="bg-transparent border border-blue-600 text-blue-500 px-6
py-2 rounded-full font-normal md:font-medium hover:bg-blue-600
hover:textwhite"
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
