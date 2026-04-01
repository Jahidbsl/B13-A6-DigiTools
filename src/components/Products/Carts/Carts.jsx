import { toast } from "react-toastify";
import CartDisk from "./CartDisk";
import { ShoppingCart } from "lucide-react";

const Carts = ({ selectedCart, setSelectedCard }) => {
  const handelTrash = (clickedProduct) => {
    const filterProduct = selectedCart.filter(
      (item) => item.id !== clickedProduct.id,
    );
    toast.error(`${clickedProduct.name} removed from cart`, {
      position: "top-right",
      autoClose: 2000,
    });
    setSelectedCard(filterProduct);
  };

  const totalPrice = selectedCart.reduce((acc, curr) => acc + curr.price, 0);

  const hendleCheckout = () => {
    toast.success("Order Placed Successfully!", {
      position: "top-center",
      autoClose: 3000,
    });
    setSelectedCard([]);
  };

  return (
    <section className="antialiased pb-20">
      <div id="cart-section" className="max-w-4xl mx-auto px-4 md:px-6">
        {selectedCart.length === 0 ? (
          <div className="flex flex-col items-center justify-center space-y-4 text-center border-2 border-dashed border-slate-200 rounded-[2rem] py-20 bg-slate-50/50">
            <div className="p-6 bg-white rounded-full shadow-sm">
              <ShoppingCart size={60} className="text-slate-300" />
            </div>
            <div className="space-y-1">
              <h2 className="text-2xl font-bold text-slate-500">
                Your Cart is empty
              </h2>
              <p className="text-slate-400 text-sm">
                Looks like you haven't added any digital tools yet.
              </p>
            </div>
          </div>
        ) : (
          <div className="border border-slate-100 rounded-[2rem] p-6 md:p-10 shadow-sm bg-white">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-bold text-2xl md:text-3xl text-slate-800 tracking-tight">
                Shopping Cart
              </h2>
              <span className="bg-slate-100 text-slate-600 px-4 py-1 rounded-full text-sm font-bold">
                {selectedCart.length} Items
              </span>
            </div>

            <div className="flex flex-col gap-4 mb-10">
              {selectedCart.map((product, ind) => (
                <div key={product.id || ind} className="group">
                  <CartDisk product={product} handelTrash={handelTrash} />
                </div>
              ))}
            </div>

            <div className="border-t border-slate-100 pt-8 mt-6">
              <div className="flex justify-between items-center mb-8 px-2">
                <div>
                  <p className="text-slate-400 font-medium uppercase tracking-wider text-xs">Total Amount</p>
                  <p className="text-slate-400 text-xs mt-1">Taxes and fees included</p>
                </div>
                <p className="text-3xl md:text-4xl font-black text-slate-900">
                  ${totalPrice.toFixed(2)}
                </p>
              </div>

              <button
                onClick={hendleCheckout}
                className="bg-linear-brand text-white w-full rounded-2xl py-4 font-bold text-lg shadow-xl shadow-indigo-100 hover:opacity-95 transition-all active:scale-[0.98] flex justify-center items-center gap-2"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Carts;