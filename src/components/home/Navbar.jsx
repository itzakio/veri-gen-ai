import Link from "next/link";
import React from "react";

const Navbar = () => {
  const links = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
    </>
  );
  return (
    <nav>
      <div className="max-w-360 mx-auto h-20 bg-red-500 flex justify-between items-center">
        <div className="text-2xl font-bold">VeriGenAi</div>
        <div>
          <ul>{links}</ul>
        </div>
        <div>sign in</div>
      </div>
    </nav>
  );
};

export default Navbar;
