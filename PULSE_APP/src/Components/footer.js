import React from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
  } from "@material-tailwind/react";

import logo from "../public/pulse-logo.svg";

function Footer() {
  return (
    <footer className="px-4 divide-y dark:bg-black dark:text-gray-800">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="flex flex-col lg:w-2/3 ">
          <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
          <img
          src={logo}
          alt="Logo"
          className="relative h-8"
          style={{ height: 50 }}
        />
            </a>
            <Button className="mx-auto bg-green-500 my-5 px-10 py-5 font-semibold text-black transition-all duration-300 hover:translate-x-[4px] hover:translate-y-[-4px] hover:shadow-[-4px_4px_0px_gray] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
  Sign Up for a Free 30-Day Trail
</Button>

        </div>
        <div className="grid grid-cols-2 text-base font-bold text-sm gap-x-3 gap-y-8 lg:w-1/3 sm:grid-cols-3">
          <div className="space-y-3">
            <h2 className="tracking-wide uppercase dark:text-white">Product</h2>
            <ul className="space-y-1 text-green-500">
              <li>
                <a rel="noopener noreferrer" href="#">Features</a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">Pricing</a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">Sign Up</a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase dark:text-white">Company</h3>
            <ul className="space-y-1 text-green-500">
              <li>
                <a rel="noopener noreferrer" href="#">Customer Stories</a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">About</a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase dark:text-white">Resources</h3>
            <ul className="space-y-1 text-green-500">
              <li>
                <a rel="noopener noreferrer" href="#">Support</a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">Blog</a>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
      <div className="py-6 text-[12px] dark:text-gray-600">©2019 Pulseapp.com, Inc. All Rights Reserved | Terms of Use | Privacy Policy | EU Privacy
Pulse is made by Simple Focus. We also make Ballpark, Sifter, and Curated.</div>
    </footer>
  );
}

export default Footer;
