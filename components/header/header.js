"use client";

import { useState } from "react";
import Button from "../atom/Button/Button";
import style from "./header.module.css";
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="mr-1 cursor-pointer">
          <img src="logo.png.webp" />
        </div>
        <div className="hidden lg:block">
          <ul className={`flex py-[39px] ${style.nav} space-x-10`}>
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

        <div className="hidden lg:block ">
          <Button
            text={"zfaisal863@gmail.com"}
            originStart={"origin-left"}
            originEnd={"origin-right"}
            scaleAxis={"x"}
          />
        </div>
        <div
          className=" flex-col items-end"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className={style.hamburger}></div>
          <div className={style.hamburger}></div>
          <div className={style.hamburger}></div>
        </div>
      </div>
      {isMenuOpen && (
        <div
          className={`${style.hamburgerMenu} shadow-2xl text-center block md:hidden`}
        >
          <ul>
            <li className="mb-2">
              <a className="hover:text-[#ec5b53] cursor-pointer font-bold ">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a className="hover:text-[#ec5b53] cursor-pointer font-bold">
                About
              </a>
            </li>
            <li className="mb-2">
              <a className="hover:text-[#ec5b53] cursor-pointer font-bold ">
                Service
              </a>
            </li>
            <li className="mb-2">
              <a className="hover:text-[#ec5b53] cursor-pointer font-bold ">
                Portfolio
              </a>
            </li>
            <li className="mb-2">
              <a className="hover:text-[#ec5b53] cursor-pointer font-bold ">
                Page
              </a>
            </li>
            <li className="mb-2">
              <a className="hover:text-[#ec5b53] cursor-pointer font-bold ">
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
