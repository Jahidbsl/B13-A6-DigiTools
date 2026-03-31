import React, { use, useState } from 'react';
import ProductsCard from './ProductsCard';
import Carts from './Carts/Carts';

const Products = ({productsPromise, selectedCart ,setSelectedCard}) => {
    // console.log(productsPromise)
    const productsData = use(productsPromise);
    const [isSelecetedProducts , setIsSelecetedProducts] =useState('Products')
    // console.log(isSelecetedProducts,'isSelecetedProducts')
    return (
  <div id='product' className='my-5'>
   <div className='flex flex-col items-center space-y-4 my-5' >
     <h3 className='text-4xl font-bold'>Premium Digital Tools</h3>
    <p className=' text-gray-400 w-md text-center '>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
 <div className="flex justify-center my-10">
   
    <div className="inline-flex items-center bg-white border border-gray-100  rounded-full shadow-sm">
        
        <button 
            onClick={() => setIsSelecetedProducts("Products")}
            className={`px-8 py-2.5 rounded-full font-bold transition-all duration-300 ${
                isSelecetedProducts === "Products" 
                ? "bg-linear-brand text-white shadow-md scale-105" 
                : "text-slate-500 hover:text-slate-800"
            }`}
        >
            Products
        </button>

        <button
            onClick={() => setIsSelecetedProducts("Cart")}
            className={`px-8 py-2.5 rounded-full font-bold transition-all duration-300 ${
                isSelecetedProducts === "Cart" 
                ? "bg-linear-brand text-white shadow-md scale-105" 
                : "text-slate-500 hover:text-slate-800"
            }`}
        >
            Cart ({selectedCart.length})
        </button>
        
    </div>
</div>
   </div>
  {
  isSelecetedProducts === "Products" ? (
    <div className='container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10'>
      {
        productsData.map((products) => (
          <ProductsCard key={products.id} products={products} selectedCart={selectedCart} setSelectedCard={setSelectedCard} />
        ))
      }
    </div>
  ) : (
    <Carts selectedCart={selectedCart} setSelectedCard={setSelectedCard}></Carts>
  )
}
  </div>
    );
};

export default Products;