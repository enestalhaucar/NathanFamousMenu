import React from 'react';
import Logo from "./components/HeaderSide/Logo"
import CompanyName from "./components/HeaderSide/CompanyName"
import CompanyDesc from "./components/HeaderSide/CompanyDesc"
import Foods from "./components/FoodSide/Foods"
import logo from "../src/images/sausage.png" // import image
import { HiOutlineShoppingCart } from "react-icons/hi"
import { AiOutlineHome } from "react-icons/ai"




function App() {
  return (
    <div className="bg-blue-100 bg  w-screen bg-fixed">
      {/* Main Header */}
      <div className='bg-white h-20 w-full flex header items-center justify-between fixed'>
        <div className='flex w-10/12 items-center justify-between'>
          <img src={logo} className="w-48 ml-12" alt="" />
          <div className='flex items-center justify-center'>
            <div className='mr-12 flex items-center justify-center pb-2  text-blue-600 text-lg text-center border-b-2 border-blue-600'>
              <AiOutlineHome className='h-8 font-bold' />
              <button className='ml-2 text-lg'><a>Choose Food</a></button>
            </div>
            <button className='mx-6 hover:text-blue-600 text-lg hover:border-b-2 pb-2 hover:border-blue-600'>Give Feedback</button>
          </div>
        </div>
        <div className='mr-12 flex items-center justify-center pb-2 hover:text-blue-600 text-lg text-center hover:border-b-2 hover:border-blue-600 '>
          <HiOutlineShoppingCart className='h-8 font-bold' />
          <button className='ml-2 text-lg font-bold'>Card</button>
        </div>

      </div>

      {/* Logo */}
      <Logo />
      {/* Company Name */}
      <CompanyName />
      {/* Company Description */}
      <CompanyDesc />
      {/* Foods */}
      <Foods />

    </div>


  );
}

export default App;
