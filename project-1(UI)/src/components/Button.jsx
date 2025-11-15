import React from "react";
import ButtonOne from "../assets/ButtonOne.jpg";
import ButtonTwo from "../assets/ButtonTwo.jpg";
import ButtonThree from "../assets/ButtonThree.jpg";
import ButtonFour from "../assets/ButtonFour.jpg";
import ButtonFive from "../assets/ButtonFive.jpg";
import ButtonSix from "../assets/ButtonSix.jpg";
import ButtonSeven from "../assets/ButtonSeven.jpg";
import ButtonEight from "../assets/ButtonEight.jpg";
import ButtonMobileOne from "../assets/ButtonMobileOne.jpg";
import ButtonMobileTwo from "../assets/ButtonMobileTwo.jpg";
import ButtonMobileThree from "../assets/ButtonMobileThree.jpg";
import ButtonMobileFour from "../assets/ButtonMobileFour.jpg";
import ButtonMobileFive from "../assets/ButtonMobileFive.jpg";
import ButtonMobileSix from "../assets/ButtonMobileSix.jpg";
import ButtonMobileSeven from "../assets/ButtonMobileSeven.jpg";
import ButtonMobileEight from "../assets/ButtonMobileEight.jpg";
const Button = () => {
  const buttonsData = [
    { img: ButtonOne, genre: "Comedy", desc: "Winner of 13 Emmy®Awards" },
    { img: ButtonTwo, genre: "Thriller", desc: "Winner of 8 Emmy®Awards" },
    { img: ButtonThree, genre: "Thriller", desc: "Emmy® Award Winner" },
    {
      img: ButtonFour,
      genre: "Action",
      desc: "It's only a legend until you discover it.",
    },
    { img: ButtonFive, genre: "Drama", desc: "Live your best lie." },
    {
      img: ButtonSix,
      genre: "Thriller",
      desc: "The world's most dangerous secret liesbetween them.",
    },
    {
      img: ButtonSeven,
      genre: "Sci-Fi",
      desc: "To live, you need something to die for.",
    },
    {
      img: ButtonEight,
      genre: "Comedy",
      desc: "Getting it together. Together.",
    },
  ];
  const buttonsMobileData = [
    {
      img: ButtonMobileOne,
      genre: "Comedy",
      desc: "Winner of 13 Emmy® Awards",
    },
    {
      img: ButtonMobileTwo,
      genre: "Thriller",
      desc: "Winner of 8 Emmy® Awards",
    },
    { img: ButtonMobileThree, genre: "Thriller", desc: "Emmy® Award Winner" },
    {
      img: ButtonMobileFour,
      genre: "Action",
      desc: "It's only a legend until you discover it.",
    },
    { img: ButtonMobileFive, genre: "Drama", desc: "Live your best lie." },
    {
      img: ButtonMobileSix,
      genre: "Thriller",
      desc: "The world's most dangerous secret liesbetween them.",
    },
    {
      img: ButtonMobileSeven,
      genre: "Sci-Fi",
      desc: "To live, you need something to die for.",
    },
    {
      img: ButtonMobileEight,
      genre: "Comedy",
      desc: "Getting it together. Together.",
    },
  ];
  return (
    <div className="w-full mt-3">
      <div
        className="flex overflow-x-scroll snap-x snap-mandatory w-full h-screen scrollsmooth hidden md:flex"
        id="scrollbar"
      >
        {buttonsData.map((item, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 w-full h-full snap-center"
          >
            <img
              src={item.img}
              alt={`Button${index + 1}`}
              className="w-full h-full objectcover px-3 py-3"
            />
            <div className="absolute bottom-16 left-28 flex items-center">
              <button className="bg-white px-6 py-2 rounded-full fontmedium">
                Stream now
              </button>
              <h2 className="font-bold text-white text-xl ml-4">
                {item.genre} •
              </h2>
              <p className="text-white text-lg font-medium ml-1">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div
        className="flex overflow-x-auto snap-x snap-mandatory w-full scrollsmooth
md:hidden gap-x-6 px-6 pb-0 mb-0 !h-auto !min-h-0 !max-h-none"
        id="scrollbar"
      >
        {buttonsMobileData.map((item, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 w-[75%] h-[350px] snapcenter
flex justify-center items-center"
          >
            <div
              className="relative bg-white shadow-lg overflow-hidden w-full h-full flex
flex-col justify-end items-center"
            >
              <img
                src={item.img}
                alt={`ButtonMobile${index + 1}`}
                className="absolute w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/70
viatransparent to-transparent"
              ></div>
              <div className="relative text-center text-white px-6 pb-3">
                <h2 className="text-2xl font-semibold mb-1">{item.genre}</h2>
                <p className="text-lg mb-2">{item.desc}</p>
                <button
                  className="bg-white text-black px-6 py-2 rounded-full
fontmedium"
                >
                  Stream now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Button;
