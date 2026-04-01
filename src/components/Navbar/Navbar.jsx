import { ShoppingCart } from "lucide-react";
import React from "react";

const Navbar = ({ selectedCart = [] }) => { 
  return (
    <div className="border-base-300 border-b-2 sticky top-0 z-50 bg-white shadow-sm antialiased">
      <div className="navbar bg-base-100 max-w-7xl mx-auto px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" aria-label="Menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6" 
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z- mt-3 w-52 p-2 shadow border border-base-200"
            >
              <li className="menu-title text-linear-brand font-bold text-lg">DigiTools</li>
              <li><a>Products</a></li>
              <li><a>Features</a></li>
              <li><a>Pricing</a></li>
              <li><a>Testimonials</a></li>
              <li><a>FAQ</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl font-bold text-linear-brand hidden sm:inline-flex">
            DigiTools
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base font-medium">
            <li><a href="#products">Products</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>

        <div className="navbar-end flex items-center gap-2 md:gap-5">
          {/* Shopping Cart */}
          <div className="relative cursor-pointer group p-2 rounded-full hover:bg-slate-100 transition-all">
            <ShoppingCart
              size={22}
              className="text-slate-700 group-hover:text-blue-600 transition-colors"
            />
            {selectedCart.length > 0 && (
              <span className="absolute top-0 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white ring-2 ring-white animate-in zoom-in">
                {selectedCart.length}
              </span>
            )}
          </div>

          <a className="text-sm md:text-base font-medium hover:text-blue-600 transition-colors" href="#login">
            Login
          </a>
          
          <button className="btn btn-sm md:btn-md border-none text-white bg-linear-brand rounded-full px-6">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;