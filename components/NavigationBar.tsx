import React from "react";
import { Bars2Icon } from "@heroicons/react/24/outline";

function NavigationBar() {
  const navigationItems = ["home", "movies", "genres"];
  return (
    <div className="h-[50px] w-full bg-[#8080801c] flex items-center backdrop-blur-lg z-50 sticky top-0">
      <div className="flex items-center justify-between w-full px-10">
        <p className="font-bold text-sm ">REACT~SHIFU | movie-site</p>
        <div className="hidden md:flex items-center space-x-2">
          {navigationItems.map((navItem, index) => (
            <p key={index} className="tracking-wide uppercase text-sm">
              {navItem}
            </p>
          ))}
        </div>
        <Bars2Icon className="h-[30px] md:hidden" />
      </div>
    </div>
  );
}

export default NavigationBar;
