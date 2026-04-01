import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import GetStart from "./components/GetStart/GetStart";
import Pricing from "./components/Pricing/Pricing";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer/Footer";

const getProducts = async () => {
  const res = await fetch("/productsData.json");
  const data = await res.json();

  return data;
};
const productsPromise = getProducts();
const getStartPromise = fetch("/getStartData.json").then((res) => res.json());

function App() {
  const [selectedCart, setSelectedCard] = useState([]);
  // console.log(getStartPromise)
  return (
    <>
      <Navbar selectedCart={selectedCart}></Navbar>
      <main className="mt-10 flex flex-col gap-16 md:gap-24">
        <Banner></Banner>
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl"></span>
          }
        >
          <Products
            productsPromise={productsPromise}
            selectedCart={selectedCart}
            setSelectedCard={setSelectedCard}
          ></Products>
        </Suspense>

        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl"></span>
          }
        >
          <GetStart getStartPromise={getStartPromise} />
        </Suspense>

        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl"></span>
          }
        >
          <Pricing></Pricing>
        </Suspense>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
      {/* react Tosify */}
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
