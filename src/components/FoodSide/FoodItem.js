import React from 'react'


const FoodItem = ({name, price, image}) => {


    return (
        <div className='hover:border-dotted border rounded-xl p-0 mx-2 mb-3'>
            <img className='w-full rounded-xl rounded-b-none' src={image} alt="" />
            <div className='flex flex-col items-center justify-center'>
            <h3 className='p-1 text-lg font-medium'>{name}</h3>
            <h2 className='p-1 flex items-center justify-center'><span className='font-bold text-lg mr-1'>$</span>{price}</h2>
            </div>
            <div className='flex justify-center p-3'>
                <button className='bg-black p-2 text-white rounded-md w-4/5 '>Add Box</button>
            </div>
        </div>
    )
}

export default FoodItem