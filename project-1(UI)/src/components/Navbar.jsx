import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  function openMenu() {
    setOpen(true);
  }

  function closeMenu() {
    setOpen(false);
  }
  return (
    <section>
      <nav className="flex justify-between md:justify-evenly items-center bg-black p-4  z-50 md:fixed w-full">
        <div>
          <img
            width={40}
            height={50}
            src="https://tse1.mm.bing.net/th/id/OIP.kKXdHFx6A_HK90kQu5XV0AHaHa?pid=Api&rs=1&c=1&qlt=95&w=105&h=105"
            alt="apple_icon"
          />
        </div>

        <p className="text-gray-300 hidden md:flex">Store</p>
        <p className="text-gray-300  hidden md:flex">Mac</p>
        <p className="text-gray-300  hidden md:flex">iPad</p>
        <p className="text-gray-300  hidden md:flex">iPhone</p>
        <p className="text-gray-300  hidden md:flex">Watch</p>
        <p className="text-gray-300  hidden md:flex">AirPods</p>
        <p className="text-gray-300  hidden md:flex">TV & Home</p>
        <p className="text-gray-300  hidden md:flex">Entertainment</p>
        <p className="text-gray-300  hidden md:flex">Accessories</p>
        <p className="text-gray-300  hidden md:flex">Support</p>
        <div className="flex gap-8 flex-row  items-center">
          <div className="flex gap-8 flex-row ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-gray-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6  text-gray-100"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </div>
          <div>
            <h1
              className="text-white text-3xl bg-black p-4 cursor-pointer md:hidden"
              onClick={() => setOpen(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 9h16.5m-16.5 6.75h16.5"
                />
              </svg>
            </h1>
          </div>
        </div>
      </nav>
      {/*  hidden navbar */}
      <nav
        className={`bg-black px-20 flex justify-between z-10 fixed top-0 left-0 w-full h-full transition-all duration-300  p-10
        ${
          open
            ? "translate-y-0 duration-1000"
            : "-translate-y-full duration-1000"
        }`}
      >
        <div>
          <p className="text-white font-bold text-3xl pb-4">Store</p>
          <p className="text-white font-bold text-3xl pb-4">Mac</p>
          <p className="text-white font-bold text-3xl pb-4">iPad</p>
          <p className="text-white font-bold text-3xl pb-4">iPhone</p>
          <p className="text-white font-bold text-3xl pb-4">Watch</p>
          <p className="text-white font-bold text-3xl pb-4">AirPods</p>
          <p className="text-white font-bold text-3xl pb-4">TV & Home</p>
          <p className="text-white font-bold text-3xl pb-4">Entertainment</p>
          <p className="text-white font-bold text-3xl pb-4">Accessories</p>
          <p className="text-white font-bold text-3xl pb-4">Support</p>
        </div>

        <div>
          <h1
            className="text-4xl text-white font-bold cursor-pointer "
            onClick={() => setOpen(false)}
          >
            X
          </h1>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
