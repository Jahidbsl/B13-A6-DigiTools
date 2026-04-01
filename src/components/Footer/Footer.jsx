import React from "react";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <section className="bg-purple-800 w-ful h-[450px]">
      <div className="grid grid-cols-1 md:grid-cols-5 container mx-auto px-4">
        <div className="bg-red-500">
          <h1>Digitools</h1>
          <p>
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>
        <div className="bg-red-500 flex flex-col items-center space-y-2">
          <h3>Product</h3>
          <p>Features</p>
          <p>Pricing</p>
          <p>Templates</p>
          <p>Integrations</p>
        </div>
        <div className="bg-red-500 flex flex-col items-center space-y-2">
          <h3>Company</h3>
          <p>About</p>
          <p>Blog</p>
          <p>Careers</p>
          <p>Press</p>
        </div>
        <div className="bg-red-500 flex flex-col items-center space-y-2">
          <h3>Resources</h3>
          <p>Documentation</p>
          <p>Help Center</p>
          <p>Community</p>
          <p>Contact</p>
        </div>
        <div className="bg-red-500">
          <h3>Social Links</h3>
          <div className="inline-flex gap-1.5">
            <FaInstagram></FaInstagram>
            <FaFacebookSquare />

            <FaXTwitter></FaXTwitter>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
