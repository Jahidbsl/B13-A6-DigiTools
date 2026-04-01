import { Check } from "lucide-react";
import { toast } from "react-toastify";

const ProductsCard = ({ products, selectedCart, setSelectedCard }) => {
  const tagStyles = {
    New: "bg-green-100 text-green-700 border-green-200",
    "Best Seller": "bg-orange-100 text-orange-700 border-orange-200",
    Popular: "bg-purple-100 text-purple-700 border-purple-200",
  };

  const isBuy = selectedCart.some((item) => item.id === products.id);

  const handelBuy = () => {
    if (!isBuy) {
      toast.success(`${products.name} is Selected`, {
        position: "top-right",
        autoClose: 2000,
      });
      setSelectedCard([...selectedCart, products]);
    }
  };

  return (
    <div className="card w-full bg-white shadow-sm border border-gray-100 rounded-[2rem] p-6 transition-all hover:shadow-md antialiased">
      <div className="flex justify-between items-start mb-6">
        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-100 overflow-hidden p-2">
          <img src={products.icon} alt={products.name} className="w-full h-full object-contain" />
        </div>
        <span
          className={`text-[10px] md:text-xs font-bold px-3 py-1 rounded-full border ${tagStyles[products.tag] || "bg-gray-100 text-gray-600"}`}
        >
          {products.tag}
        </span>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl md:text-2xl font-bold text-slate-800 tracking-tight">
          {products.name}
        </h2>
        <p className="text-sm text-slate-500 leading-relaxed min-h-[40px]">
          {products.description}
        </p>
      </div>

      <div className="mt-6 flex items-baseline gap-1">
        <span className="text-3xl font-black text-slate-800">
          ${products.price}
        </span>
        <span className="text-slate-400 text-xs md:text-sm font-medium">
          /{products.period}
        </span>
      </div>

      <ul className="mt-6 space-y-3 min-h-[120px]">
        {products.features.map((feature, index) => (
          <li
            key={index}
            className="flex items-start gap-3 text-slate-600 text-sm leading-tight"
          >
            <div className="mt-0.5">
              <Check size={18} color="#30B868" strokeWidth={3} />
            </div>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <button
          type="button"
          onClick={handelBuy}
          disabled={isBuy}
          className={`
            w-full py-3.5 rounded-full text-white font-bold text-base md:text-lg transition-all shadow-lg
            ${isBuy 
              ? "bg-gray-300 cursor-not-allowed shadow-none" 
              : "bg-linear-brand hover:opacity-95 active:scale-[0.98] shadow-indigo-100"}
          `}
        >
          {isBuy ? "Added to Cart" : "Buy Now"}
        </button>
      </div>
    </div>
  );
};

export default ProductsCard;