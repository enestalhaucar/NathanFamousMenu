import React from 'react'

const CardContainer = () => {
    return (

        <div className='w-6/12 bg-white rounded-2xl h-4/5 mt-40 flex flex-col justify-between items-center drop-shadow-lg'>
            {/* Title and Card Buttons and Card*/}
            <div className='flex flex-col items-center justify-center'>
                {/* Title */}
                <div>
                    <h1 className='text-2xl font-bold text-start pt-8 pl-8'>Your Order</h1>
                </div>
                {/* Card Buttons */}
                <div className='w-11/12 bg-blue-300 h-12 rounded-xl mt-10 flex justify-between items-center'>
                    {/* Summary of your order */}
                    <div className='w-96 flex justify-center items-center'>
                        <button className='bg-white py-2 rounded-l-xl w-full mx-1'>Summary of Your Order</button>
                    </div>
                    {/* Favorites */}
                    <div className='w-96 flex justify-center items-center'>
                        <button className='bg-white py-2 rounded-r-xl w-full mx-1'>Favorites</button>
                    </div>
                </div>
                {/* Card */}
                <div>
                    CARD
                </div>
            </div>
            {/* Result */}
            <div className='flex  justify-between items-center bg-black h-28 p-2 mb-2 w-11/12'>
                <div className='flex justify-start items-center'>
                    <div className='flex flex-col items-center justify-center'>
                        <div></div>
                        <div></div>
                    </div>
                    <div></div>
                </div>
                <div></div>
            </div>
        </div>

    )
}

export default CardContainer