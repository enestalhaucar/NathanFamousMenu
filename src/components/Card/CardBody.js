import React from 'react'
import data from '../../data.json'
import { FaTrashAlt } from 'react-icons/fa'
const CardBody = () => {

    const image = data.burgers.items[1].image;
    const foodName = data.burgers.items[1].name;
    const foodPrice = data.burgers.items[1].price;
    return (
        <div className='p-3 m-3 w-full'>
            <div className='mt-5 text-blue-800'>
                {/* Product */}
                <div className='flex justify-between items-center'>
                    <div className='flex justify-center items-center'>
                        <div className='mr-7 ml-6'>
                            <img className='w-48 rounded-md' src={image} alt="" />
                        </div>
                        <div>
                            <div className='text-md '>{foodName}</div>
                            <div className='text-lg font-bold'>{foodPrice}</div>
                        </div>
                    </div>
                    <div><FaTrashAlt className='h-6 w-6 mr-4' /></div>
                </div>
            </div>
        </div>
    )
}

export default CardBody