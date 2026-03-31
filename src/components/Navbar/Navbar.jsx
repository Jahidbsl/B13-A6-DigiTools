import { ShoppingCart } from 'lucide-react';
import React from 'react';

const Navbar = ({selectedCart}) => {
    return (
  
  <div className='border-base-300 border-b-2 sticky top-0 z-50 bg-white shadow-sm'>
           <div className="navbar bg-base-100 md:container md:mx-auto md:px-4">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
         <li><a>Products</a></li>
      
      <li><a>Features</a></li>
      <li><a>Pricing</a></li>
      <li><a>Testimonials</a></li>
      <li><a>FAQ</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-2xl font-bold text-linear-brand">Digitools</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-[16px]">
      <li><a href='#product'>Products</a></li>
      
      <li><a>Features</a></li>
      <li><a>Pricing</a></li>
      <li><a>Testimonials</a></li>
      <li><a>FAQ</a></li>
    </ul>
  </div>
  <div className="navbar-end flex gap-3 md:gap-5">
<span className="relative inline-block cursor-pointer group">
  
    <a href='#cart-section' className="p-2 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors duration-200">
        
        <ShoppingCart 
            size={24} 
            className="text-slate-700 group-hover:text-blue-600 transition-colors" 
        />
        
       
        {selectedCart.length > 0 ? (
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white ring-2 ring-white">
                {selectedCart.length}
            </span>
        ) : null}

    </a>
</span>
                
                <a className='md:text-xl sm:text-sm' href="#login">Login</a>
                <button className="btn border-none text-white bg-linear-brand rounded-3xl">
  Get Started
</button>
  </div>
</div>
  </div>

    );
};

export default Navbar;