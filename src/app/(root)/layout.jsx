import Navbar from "@/components/home/Navbar";
import React from "react";

const HomeLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-base-100">
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
};

export default HomeLayout;
