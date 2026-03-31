
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Products from './components/Products/Products'

const getProducts = async()=>{
  const res = await fetch('/productsData.json');
  const data = await res.json();
  
  return data;
}

function App() {
const productsPromise = getProducts()
const [selectedCart, setSelectedCard] = useState([]);

  return (
    <>
  
  <Navbar selectedCart={selectedCart}></Navbar>
  <main className='mt-10 flex flex-col gap-16 md:gap-24'>
    <Banner></Banner>
    <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
 <Products
 productsPromise={productsPromise}
 selectedCart={selectedCart} 
 setSelectedCard={setSelectedCard}

 >
  

 </Products>
    </Suspense>
   
    
  </main>
   </>
  )
}

export default App
