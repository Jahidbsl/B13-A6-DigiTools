import React from "react";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#101727] w-full py-16 text-white antialiased">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-6">
            <h1 className="text-3xl md:text-4xl font-black tracking-tighter">
              DigiTools
            </h1>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base font-medium">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Product Column */}
          <div className="space-y-6 lg:pl-8">
            <h3 className="font-bold text-lg md:text-xl tracking-tight">Product</h3>
            <ul className="space-y-3 text-gray-400 text-sm md:text-base">
              <li className="hover:text-white transition-colors cursor-pointer">Features</li>
              <li className="hover:text-white transition-colors cursor-pointer">Pricing</li>
              <li className="hover:text-white transition-colors cursor-pointer">Templates</li>
              <li className="hover:text-white transition-colors cursor-pointer">Integrations</li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg md:text-xl tracking-tight">Company</h3>
            <ul className="space-y-3 text-gray-400 text-sm md:text-base">
              <li className="hover:text-white transition-colors cursor-pointer">About</li>
              <li className="hover:text-white transition-colors cursor-pointer">Blog</li>
              <li className="hover:text-white transition-colors cursor-pointer">Careers</li>
              <li className="hover:text-white transition-colors cursor-pointer">Press</li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg md:text-xl tracking-tight">Resources</h3>
            <ul className="space-y-3 text-gray-400 text-sm md:text-base">
              <li className="hover:text-white transition-colors cursor-pointer">Documentation</li>
              <li className="hover:text-white transition-colors cursor-pointer">Help Center</li>
              <li className="hover:text-white transition-colors cursor-pointer">Community</li>
              <li className="hover:text-white transition-colors cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Social Links Column */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg md:text-xl tracking-tight">Connect</h3>
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="bg-white/10 backdrop-blur-sm h-10 w-10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#101727] transition-all duration-300"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="bg-white/10 backdrop-blur-sm h-10 w-10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#101727] transition-all duration-300"
              >
                <FaFacebookSquare size={18} />
              </a>
              <a
                href="#"
                aria-label="X (Twitter)"
                className="bg-white/10 backdrop-blur-sm h-10 w-10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#101727] transition-all duration-300"
              >
                <FaXTwitter size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs md:text-sm text-gray-400">
          <p className="font-medium">© 2026 Digitools. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 font-medium">
            <p className="hover:text-white transition-colors cursor-pointer">Privacy Policy</p>
            <p className="hover:text-white transition-colors cursor-pointer">Terms of Service</p>
            <p className="hover:text-white transition-colors cursor-pointer">Cookies Settings</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;