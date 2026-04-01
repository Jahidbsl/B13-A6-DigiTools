import { toast } from "react-toastify";
import CartDisk from "./CartDisk";

const Carts = ({ selectedCart, setSelectedCard }) => {
  const handelTrash = (clickedProduct) => {
    const filterProduct = selectedCart.filter(
      (item) => item.id !== clickedProduct.id,
    );
    toast("Deleted!");
    setSelectedCard(filterProduct);
  };

  const totalPrice = selectedCart.reduce((selectedPrice, currentPrice) => {
    return selectedPrice + currentPrice.price;
  }, 0);

  const hendleCheckout = () => {
    // console.log('clickedCheckout')
    //  alert("Order Placed Successfully!");
    toast("Order Placed Successfully!");
    setSelectedCard([]);
  };

  return (
    <section>
      <div id="cart-section">
        {selectedCart.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-gray-400">
              No Carts Selected
            </h2>
          </div>
        ) : (
          <div className="container mx-auto px-6 md:px-10 border-2 border-slate-100 rounded-3xl py-10 shadow-sm bg-white">
            <h2 className="font-bold text-3xl md:text-4xl mb-8 text-slate-800">
              Your Cart
            </h2>

            <div className="grid grid-cols-1 gap-4 mb-10">
              {selectedCart.map((product, ind) => (
                <div key={product.id || ind} className="cart-item">
                  {/* Trash function-ti pass kora holo */}
                  <CartDisk product={product} handelTrash={handelTrash} />
                </div>
              ))}
            </div>

            <div className="border-t border-slate-100 my-6"></div>

            <div className="flex justify-between items-center font-bold mb-6 px-2">
              <p className="text-gray-400 text-lg">Total:</p>
              <p className="text-2xl text-slate-900">${totalPrice}</p>
            </div>

            <button
              onClick={hendleCheckout}
              className="bg-linear-brand text-white w-full rounded-2xl p-4 font-bold text-lg shadow-lg hover:opacity-90 transition-all active:scale-[0.98]"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Carts;
