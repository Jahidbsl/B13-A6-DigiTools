import { Trash } from "lucide-react";
import React from "react";

const CartDisk = ({ product, handelTrash }) => {
  return (
    <div className="antialiased border border-slate-100 rounded-2xl p-4 flex justify-between items-center bg-white shadow-sm hover:shadow-md transition-all duration-300 group/item">
      <div className="flex items-center gap-4 md:gap-6">
        {/* Icon Container: Scaling fix for Windows */}
        <div className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0 bg-slate-50 rounded-xl overflow-hidden border border-slate-100 p-2 flex items-center justify-center">
          <img
            src={product.icon}
            alt={product.name}
            className="w-full h-full object-contain transform group-hover/item:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Info Container */}
        <div className="flex flex-col justify-center">
          <h4 className="text-base md:text-lg font-bold text-slate-800 leading-tight tracking-tight">
            {product.name}
          </h4>
          <div className="flex items-center gap-2 mt-1">
            <p className="text-blue-600 font-bold text-sm md:text-base">
              ${product.price}
            </p>
            <span className="text-[10px] text-slate-400 font-medium uppercase tracking-tighter">
              / {product.period}
            </span>
          </div>
        </div>
      </div>

      {/* Delete Button */}
      <button
        onClick={() => handelTrash(product)}
        className="p-3 hover:bg-red-50 rounded-full transition-all duration-200 group/btn active:scale-90"
        aria-label="Remove item"
      >
        <Trash
          size={20}
          className="text-slate-400 group-hover/btn:text-red-500 transition-colors"
        />
      </button>
    </div>
  );
};

export default CartDisk;