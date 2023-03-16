import React from 'react'
import { HiOutlineShoppingCart } from "react-icons/hi"
import { AiOutlineHome } from "react-icons/ai"
import logo from "../src/images/sausage.png" // import image
import { NavLink } from "react-router-dom"



const MainHeader = () => {
    return (
        <div className='bg-white h-20 w-full flex header items-center justify-between fixed'>
            <div className='flex w-10/12 items-center justify-between'>
                <img src={logo} className="w-48 ml-12" alt="" />
                <div className='flex items-center justify-center'>
                    <div className='mr-12 flex items-center justify-center pb-2  text-lg text-center'>
                        <button className='ml-2 text-lg'>
                            <NavLink to="/" className="flex justify-center items-center"> <AiOutlineHome className='h-8 font-bold' /> <p className='pl-2'>Choose Food</p></NavLink>
                        </button>
                    </div>
                    <button className='mx-6 hover:text-blue-600 text-lg hover:border-b-2 pb-2 hover:border-blue-600'>Give Feedback</button>
                </div>
            </div>
            <div className='mr-12 flex items-center justify-center pb-2 text-lg text-center '>
                
                <button className='ml-2 text-lg font-bold'>
                    <NavLink to="/card" className="flex justify-center items-center"> <HiOutlineShoppingCart className='h-8 font-bold' /> <p className='pl-2'>Card</p> </NavLink>
                </button>
            </div>

        </div>

    )
}

export default MainHeader