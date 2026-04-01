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
      // alert(`${products.name} is Add To Cart`);
      toast(`${products.name} is Selected`);
      setSelectedCard([...selectedCart, products]);
    }
  };
  return (
    <div className="card w-full max-w-md bg-white shadow-sm border border-gray-100 rounded-3xl p-6 transition-all hover:shadow-md">
      <div className="flex justify-between items-start mb-6">
        <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center border border-gray-100">
          <span className="text-3xl">
            <img src={products.icon} alt="" />
          </span>
        </div>
        <span
          className={`text-xs font-bold px-4 py-1.5 rounded-full ${tagStyles[products.tag]}`}
        >
          {products.tag}
        </span>
      </div>

      <div className="space-y-3">
        <h2 className="text-2xl font-bold text-slate-800">{products.name}</h2>
        <p className="text-sm text-slate-500 leading-relaxed">
          {products.description}
        </p>
      </div>

      <div className="mt-6 flex items-baseline gap-1">
        <span className="text-3xl font-extrabold text-slate-800">
          ${products.price}
        </span>
        <span className="text-slate-400 text-sm">/{products.period}</span>
      </div>

      <ul className="mt-6 space-y-3">
        {products.features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center gap-3 text-slate-600 text-sm"
          >
            <Check color="#30B868"></Check>

            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <button
          onClick={handelBuy}
          disabled={isBuy}
          className={`
    w-full py-3 rounded-full text-white font-bold text-lg  transition-all shadow-lg 
    ${isBuy ? "bg-gray-400 cursor-not-allowed opacity-70" : "bg-linear-brand hover:opacity-90 active:scale-95 shadow-purple-200"}
    `}
        >
          {isBuy ? "Add To Cart" : "Buy Now"}
        </button>
      </div>
    </div>
  );
};

export default ProductsCard;
