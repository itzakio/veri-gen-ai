"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/">Use cases</Link>
      </li>
      <li>
        <Link href="/">Features</Link>
      </li>
      <li>
        <Link href="/">Pricings</Link>
      </li>
      <li>
        <Link href="/">Contact Us</Link>
      </li>
    </>
  );
  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-xs bg-base-100/1 shadow-md z-999">
      <div className="max-w-360 mx-auto h-20 flex justify-between items-center px-8 xl:px-0 ">
        {/* logo */}
        <div className="text-2xl font-bold flex gap-0.5 z-999 ">
          <img src="./logo.png" alt="" /> VeriGenAi
        </div>
        {/* menu */}
        <div>
          <ul className="hidden lg:flex items-center gap-4">{links}</ul>
        </div>
        {/* actions buttons */}
        <div className="flex items-center gap-4">
          <button className="bg-white/35 border  px-4 py-2 rounded-full font-bold hidden md:block">
            Is it AI?
          </button>
          <button className="bg-[#00AAC9] px-4 py-2 rounded-full font-bold text-white hidden md:block">
            Sign In
          </button>
          <div className="static lg:hidden" onClick={() => setOpen(!open)}>
        {/* menu icon */}
            <FaBars size={32} />
          </div>
        </div>
      </div>
      {/* sidebar for mobile */}
      <aside
        className={`absolute top-0 left-0 w-full ${open ? "translate-x-0" : "-translate-x-full"} transition-all duration-100 ease-in-out bg-white z-999`}
      >
        <div
          onClick={() => setOpen(!open)}
          className="flex justify-between items-center h-20 px-6"
        >
          {/* logo */}
          <div className="text-2xl font-bold flex gap-0.5 z-999 ">
            <img src="./logo.png" alt="" /> VeriGenAi
          </div>
          <IoClose size={50} />
        </div>
        <ul className="flex flex-col gap-8 justify-center items-center py-4">
          {links}
        </ul>

        <div className="md:hidden flex flex-col justify-center items-center gap-4 py-4 pb-8">
          <button className="bg-white/35 border px-8 py-3 rounded-full font-bold  w-2/3">
            Is it AI?
          </button>
          <button className="bg-[#00AAC9] px-8 py-4 rounded-full font-bold text-white w-2/3">
            Sign In
          </button>
        </div>
      </aside>
    </nav>
  );
};

export default Navbar;
