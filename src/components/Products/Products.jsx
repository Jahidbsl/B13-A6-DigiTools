import React, { use, useState } from "react";
import ProductsCard from "./ProductsCard";
import Carts from "./Carts/Carts";

const Products = ({ productsPromise, selectedCart, setSelectedCard }) => {
  const productsData = use(productsPromise);
  const [isSelecetedProducts, setIsSelecetedProducts] = useState("Products");

  return (
    <section className="antialiased"> 
      <div className="my-10 lg:my-16">
        <div className="flex flex-col items-center space-y-4 mb-10">
          <div className="flex flex-col items-center px-4 max-w-7xl mx-auto">
            {/* Heading: leading-tight ব্যবহার করা হয়েছে যেন উইন্ডোজে লাইন গ্যাপ বেশি না হয় */}
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 text-center leading-tight">
              Premium Digital Tools
            </h3>

            <p className="text-gray-500 text-center mt-4 text-base md:text-lg max-w-lg md:max-w-2xl leading-relaxed">
              Choose from our curated collection of premium digital products
              designed to boost your productivity and creativity.
            </p>
          </div>

          {/* Toggle Tab  */}
          <div className="flex justify-center mt-10">
            <div className="inline-flex items-center bg-white border border-gray-200 rounded-full shadow-sm p-1">
              <button
                onClick={() => setIsSelecetedProducts("Products")}
                className={`px-6 md:px-10 py-2.5 rounded-full font-bold text-sm md:text-base transition-all duration-300 ${
                  isSelecetedProducts === "Products"
                    ? "bg-linear-brand text-white shadow-md"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                Products
              </button>

              <button
                onClick={() => setIsSelecetedProducts("Cart")}
                className={`px-6 md:px-10 py-2.5 rounded-full font-bold text-sm md:text-base transition-all duration-300 ${
                  isSelecetedProducts === "Cart"
                    ? "bg-linear-brand text-white shadow-md"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                Cart ({selectedCart.length})
              </button>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {isSelecetedProducts === "Products" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 py-6">
              {productsData.map((products) => (
                <ProductsCard
                  key={products.id}
                  products={products}
                  selectedCart={selectedCart}
                  setSelectedCard={setSelectedCard}
                />
              ))}
            </div>
          ) : (
            <div className="py-6 min-h-[400px]">
              <Carts
                selectedCart={selectedCart}
                setSelectedCard={setSelectedCard}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;