"use client";

import { useState } from "react";
import Button from "../atom/Button";
import style from "./header.module.css";
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="mr-1 cursor-pointer">
          <img src="logo.png.webp" />
        </div>
        <div className="hidden md:block">
          <ul className="flex py-[39px] ">
            <li>
              <a className="hover:text-[#ec5b53] cursor-pointer font-bold mr-2">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-[#ec5b53] cursor-pointer font-bold mr-2">
                About
              </a>
            </li>
            <li>
              <a className="hover:text-[#ec5b53] cursor-pointer font-bold mr-2">
                Service
              </a>
            </li>
            <li>
              <a className="hover:text-[#ec5b53] cursor-pointer font-bold mr-2">
                Portfolio
              </a>
            </li>
            <li>
              <a className="hover:text-[#ec5b53] cursor-pointer font-bold mr-2">
                Page
              </a>
            </li>
            <li>
              <a className="hover:text-[#ec5b53] cursor-pointer font-bold mr-2">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="hidden md:block ">
          <Button text={"zfaisal863@gmail.com"} />
        </div>
        <div
          className="block md:hidden flex-col items-end"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className={style.hamburger}></div>
          <div className={style.hamburger}></div>
          <div className={style.hamburger}></div>
        </div>
      </div>
      {isMenuOpen && (
        <div className={`${style.hamburgerMenu} shadow-2xl text-center`}>
          <ul>
            <li>
              <a className="hover:text-[#ec5b53] cursor-pointer font-bold mr-2">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-[#ec5b53] cursor-pointer font-bold mr-2">
                About
              </a>
            </li>
            <li>
              <a className="hover:text-[#ec5b53] cursor-pointer font-bold mr-2">
                Service
              </a>
            </li>
            <li>
              <a className="hover:text-[#ec5b53] cursor-pointer font-bold mr-2">
                Portfolio
              </a>
            </li>
            <li>
              <a className="hover:text-[#ec5b53] cursor-pointer font-bold mr-2">
                Page
              </a>
            </li>
            <li>
              <a className="hover:text-[#ec5b53] cursor-pointer font-bold mr-2">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
