import React from 'react'

const Result = () => {
    return (
        <div className='flex  justify-between items-center border-t-2 bg-white h-28 p-2 mb-2 w-11/12'>
            <div className='flex justify-start items-start'>
                <div className='flex flex-col items-start justify-center'>
                    <div className='text-xl font-extrabold text-blue-800 mr-4'>Sum</div>
                    <div className='text-md font-normal text-gray-400'>1 Item</div>
                </div>
                <div className='text-xl font-extrabold text-blue-800'>$22.00</div>
            </div>
            <div>
                <button className='p-3 rounded-lg w-40 text-lg continue'>Continue</button>
            </div>
        </div>
    )
}

export default Result