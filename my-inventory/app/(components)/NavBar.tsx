"use client";
import { Bell, Menu, Settings, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const NavBar = () => {
  return (
    <div className=" flex justify-between items-center w-full px-4 py-2 mb-7">
      {/* Left Side */}
      <div className="flex items-center gap-5">
        <button className="p-2 bg-gray-100 rounded-full hover:bg-blue-100">
          <Menu size={20} />
        </button>

        <div className="relative">
          <input
            type="search"
            placeholder="Start typing to search groups & products"
            className="pl-10 pr-4 py-2 w-48 md:w-80 border-2 border-gray-300 rounded-lg bg-white focus:outline-none focus:border-blue-500"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Bell className="text-gray-500" size={20} />
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-5">
        <div className="hidden md:flex items-center gap-5">
          <button>
            <Sun className="text-gray-500 cursor-pointer" size={24} />
          </button>

          <div className="relative">
            
              <Bell className="text-gray-500 cursor-pointer" size={24} />
              <span className="absolute -top-2 -right-1.5 bg-red-500 px-[0.4rem] py-1 rounded-full text-xs text-white font-bold leading-none">
                5
              </span>
          
          </div>
          <hr className="h-6 border-l border-gray-300 mx-3" />

        <div className="flex items-center gap-3 cursor-pointer">
          <Image
            src="/default-profile.jpg"
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <span className="font-semibold">Ed Roh</span>
        </div>
        </div>
        <Link href='/settings'>
         <Settings className="text-gray-500 cursor-pointer" size={24}/>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
