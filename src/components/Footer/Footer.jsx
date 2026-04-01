import React from "react";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
   <section className="bg-[#101727] w-full py-16 text-white">
  <div className="container mx-auto px-4">
   
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
      
      
      <div className="sm:col-span-2 md:col-span-1 space-y-4">
        <h1 className="text-4xl font-bold">DigiTools</h1>
        <p className="text-gray-400 leading-relaxed">
          Premium digital tools for creators, professionals, and businesses.
          Work smarter with our suite of powerful tools.
        </p>
      </div>

      
      <div className="space-y-4 md:ml-13">
        <h3 className="font-semibold text-xl">Product</h3>
        <ul className="space-y-2 text-gray-400">
          <li className="hover:text-white cursor-pointer">Features</li>
          <li className="hover:text-white cursor-pointer">Pricing</li>
          <li className="hover:text-white cursor-pointer">Templates</li>
          <li className="hover:text-white cursor-pointer">Integrations</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold text-xl">Company</h3>
        <ul className="space-y-2 text-gray-400">
          <li className="hover:text-white cursor-pointer">About</li>
          <li className="hover:text-white cursor-pointer">Blog</li>
          <li className="hover:text-white cursor-pointer">Careers</li>
          <li className="hover:text-white cursor-pointer">Press</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold text-xl">Resources</h3>
        <ul className="space-y-2 text-gray-400">
          <li className="hover:text-white cursor-pointer">Documentation</li>
          <li className="hover:text-white cursor-pointer">Help Center</li>
          <li className="hover:text-white cursor-pointer">Community</li>
          <li className="hover:text-white cursor-pointer">Contact</li>
        </ul>
      </div>

     
      <div className="space-y-4">
        <h3 className="font-semibold text-xl">Social Links</h3>
        <div className="flex gap-4">
          <a href="#" className="bg-white h-10 w-10 rounded-full flex items-center justify-center text-[#101727] hover:bg-gray-200 transition-colors">
            <FaInstagram size={20} />
          </a>
          <a href="#" className="bg-white h-10 w-10 rounded-full flex items-center justify-center text-[#101727] hover:bg-gray-200 transition-colors">
            <FaFacebookSquare size={20} />
          </a>
          <a href="#" className="bg-white h-10 w-10 rounded-full flex items-center justify-center text-[#101727] hover:bg-gray-200 transition-colors">
            <FaXTwitter size={20} />
          </a>
        </div>
      </div>
    </div>

   
    <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-400">
      <p>© 2026 Digitools. All rights reserved.</p>
      <div className="flex flex-wrap justify-center gap-6 md:gap-10">
        <p className="hover:text-white cursor-pointer">Privacy Policy</p>
        <p className="hover:text-white cursor-pointer">Terms of Service</p>
        <p className="hover:text-white cursor-pointer">Cookies</p>
      </div>
    </div>
  </div>
</section>
  );
};

export default Footer;
