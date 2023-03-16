import React from 'react'
import { IoReorderThreeSharp } from 'react-icons/io5'

const HeaderFood = () => {
    return (
        <div className='p-4  w-full opacity-75 font-small text-xl border-b-2 '>
            <h1 className='font-bold pl-2'>Choose Your Food</h1>
            <div className='flex justify-between items-center mt-2'>
                {/* Search Bar */}
                <div className=''>
                    <input type="text" className='border-2 outline-none border-gray-100  rounded-lg p-1 w-96' placeholder='Search for food' />
                </div>

                <div className='flex items-center'>
                    <span className='pr-3'> <IoReorderThreeSharp className='h-8 w-8' />  </span>
                    <span>
                        <svg className='text-black w-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 15">
                            <rect width="7" height="7" rx="2"></rect>
                            <rect width="7" height="7" y="8" rx="2"></rect>
                            <rect width="7" height="7" x="8" rx="2"></rect>
                            <rect width="7" height="7" x="16" rx="2"></rect>
                            <rect width="7" height="7" x="8" y="8" rx="2"></rect>
                            <rect width="7" height="7" x="16" y="8" rx="2"></rect>
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default HeaderFood