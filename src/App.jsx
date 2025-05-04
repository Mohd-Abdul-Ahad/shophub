import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SecondaryNavbar from "./components/SecondaryNavbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Link } from "react-router";
import Home from "./components/Home";

function App() {
 
  return (
    <>
      <Navbar />
      <SecondaryNavbar />
      
      {/* top image */}

      <div className="w-full h-[50rem] overflow-hidden relative">
        <button className="btnFont bg-orange-400 absolute text-white px-10 py-2 rounded-4xl mt-150 ml-10 flex items-center cursor-pointer">
          Shop Now
        </button>
        <img
          src="/images/homepageimg.png"
          alt="homepageimg"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* main content */}
      <div>
        <div className="px-10 py-10 flex justify-between ">
          {/* mobile hero banner */}
          <div className="rounded-3xl w-200 relative">
            <span className="absolute text-white text-xl mt-25 ml-10">
              Holiday Deals
            </span>
            <span className="iconFont text-7xl absolute mt-35 ml-10 text-white">
              Up to
            </span>
            <span className="iconFont text-7xl absolute mt-55 ml-10 text-white">
              30% off
            </span>
            <button className="btnFont bg-orange-400 absolute text-white px-10 py-2 rounded-4xl mt-80 ml-10 flex items-center cursor-pointer">
              Shop Now
            </button>
            <img
              src="/images/herobannermobilee.jpg"
              alt="herobanner"
              className="w-full h-full object-cover object-center rounded-2xl"
            />
          </div>
          {/* shoe hero banner */}
          <div className="rounded-3xl w-200 relative">
            <span className="absolute text-white text-xl mt-25 ml-10">
              Holiday Deals
            </span>
            <span className="iconFont text-7xl absolute mt-35 ml-10 text-white">
              Up to
            </span>
            <span className="iconFont text-7xl absolute mt-55 ml-10 text-white">
              30% off
            </span>
            <button className="btnFont bg-orange-400 absolute text-white px-10 py-2 rounded-4xl mt-80 ml-10 flex items-center cursor-pointer">
              Shop Now
            </button>
            <img
              src="/images/shoeherobannerrr.jpg"
              alt="herobanner"
              className="w-full h-full object-cover object-center rounded-2xl"
            />
          </div>
        </div>
        {/* Best Selllers category */}
        <div className="px-10 py-10 ">
          <div className="bg-white w-full h-150 flex justify-center ">
            <span className="iconFont mt-10 text-3xl">Best Sellers</span>
          </div>
        </div>
        {/* on sale category */}
        <div className="px-10 py-10 ">
          <div className="bg-white w-full h-150 flex justify-center ">
            <span className="iconFont mt-10 text-3xl">On Sale</span>
          </div>
        </div>
      </div>
      {/* footer */}
      <footer>
        <div className="bg-white px-20 py-20 flex justify-around">
          {/* loaction */}
          <div className="flex flex-col">
            <span className="mBold text-2xl">Store Location</span>
            <div className="mt-8 flex flex-col">
              <span>742 Nebula Crescent</span>
              <span>Lunaris City, ZX 99999</span>
              <span>info@mysite.com</span>
              <span>123 456 789</span>
            </div>
          </div>
          {/* shopFooter */}
          <div>
            <span className="mBold text-2xl">Shop</span>
            <div className="mt-8 flex">
              <ul className="flex gap-3 flex-col ">
                <li className="cursor-pointer">Shop All</li>
                <li className="cursor-pointer">Computers</li>
                <li className="cursor-pointer">Electronics</li>
                <li className="cursor-pointer">Books</li>
                <li className="cursor-pointer">Clothes</li>
                <li className="cursor-pointer">Toys & Games</li>
                <li className="cursor-pointer">Sale</li>
                <li className="cursor-pointer">Best Sellers</li>
              </ul>
            </div>
          </div>
          {/* customer Support */}
          <div>
            <span className="mBold text-2xl">Customer Support</span>
            <div className="mt-8 flex">
              <ul className="flex gap-3 flex-col ">
                <li className="cursor-pointer">Contact Us</li>
                <li className="cursor-pointer">Help Centre</li>
                <li className="cursor-pointer">About Us</li>
                <li className="cursor-pointer">Carrers</li>
              </ul>
            </div>
          </div>
          {/* Policy */}
          <div>
            <span className="mBold text-2xl">Customer Support</span>
            <div className="mt-8 flex">
              <ul className="flex gap-3 flex-col ">
                <li className="cursor-pointer">Shipping & Returns </li>
                <li className="cursor-pointer">Terms & Conditions</li>
                <li className="cursor-pointer">Payment Methods </li>
                <li className="cursor-pointer">FAQ</li>
              </ul>
            </div>
          </div>
        </div>

        {/* copyright message */}
        <div className="mBold items-center flex justify-center mt-2">
          ©2025 by SHOPHUB
        </div>
      </footer>
    </>
  );
}

export default App;
