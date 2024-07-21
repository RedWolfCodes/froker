import { useState } from "react";
import close from "./assets/close.svg";
import menu from "./assets/menu.svg";

const DesktopNav = () => {
  return (
    <div className="w-full h-20 md:flex hidden flex-row justify-between items-center text-black px-8 py-2 font-sans">
      <a href="/">
        <img
          src={
            "https://res.cloudinary.com/de7hlbfce/image/upload/f_auto,q_auto/v1/Froker/zfknckgkzlafeqpgwy02"
          }
          alt="logo"
          className=""
        />
      </a>
      <div className="h-full flex flex-row items-center text-orange-500 text-[1.3rem] gap-4 mr-8 font-normal">
        <a href="/" className="hover-underline-animation">
          Home
        </a>
        <a href="/" className="hover-underline-animation">
          Blogs
        </a>
        <a href="/" className="hover-underline-animation">
          Discover Broker
        </a>
      </div>
    </div>
  );
};

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="w-full h-20 md:hidden flex flex-row justify-between items-center text-black px-8 py-2 font-sans">
        <a href="/">
          <img
            src={
              "https://res.cloudinary.com/de7hlbfce/image/upload/f_auto,q_auto/v1/Froker/zfknckgkzlafeqpgwy02"
            }
            alt="logo"
            className=""
          />
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="text-orange-500 text-[1.3rem] font-normal"
        >
          <img src={open ? close : menu} alt="" className="w-8 h-8" />
        </button>
      </div>
      <div
        className={`fixed z-50 top-0 left-0 w-screen flex flex-col justify-center items-center ${
          open
            ? " origin-left duration-700 bg-white overflow-hidden"
            : "-translate-x-[100%] origin-center duration-700"
        } touch-none mt-20`}
      >
        <div className="h-full flex flex-col items-center text-orange-500 text-[1.3rem] gap-4 font-normal">
          <a href="/">Home</a>
          <a href="/">Blogs</a>
          <a href="/">Discover Broker</a>
        </div>
      </div>
    </>
  );
};
const Nav = () => {
  return (
    <div className="sticky z-50 top-0 flex bg-white">
      <DesktopNav />
      <MobileNav />
    </div>
  );
};

export default Nav;
