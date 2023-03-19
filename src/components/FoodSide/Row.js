import React from 'react'
import FoodItem from './FoodItem'
import data from '../../data.json';
import { IoReorderThreeSharp } from 'react-icons/io5'
import { useState } from 'react'






const Row = () => {
    const burgers = data.burgers;
    const fries = data.fries;
    const chickens = data.chickens;
    const hotdogs = data.hotDogs;

    const [search, setSearch] = useState('');

    return (
        <div className="">

            <div className='p-4  w-full opacity-75 font-small text-xl border-b-2'>
                <h1 className='font-bold pl-2'>Choose Your Food</h1>
                <div className='flex justify-between items-center mt-2'>
                    {/* Search Bar */}
                    <div className=''>
                        <input type="text" onChange={(e) => setSearch(e.target.value)} className='border-2 outline-none border-gray-100  rounded-lg p-1 w-96' placeholder='Search for food' />
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

            <div className='flex w-full flex-col justify-between ' >
                <h1 className='text-2xl font-small pl-4 py-4 mb-1'>{burgers.name}</h1>
                <div className='grid grid-cols-2'>
                    {burgers.items.filter((item) => {
                        if (search === '') {
                            return item
                        } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
                            return item
                        }
                    }).map((burger) => (
                        <FoodItem key={burger.id} name={burger.name} image={burger.image} price={burger.price} />
                    ))}
                </div>

                <h1 className='text-2xl font-small pl-4 py-4 mb-1'>{fries.name}</h1>
                <div className='grid grid-cols-2'>
                    {fries.items.filter((item) => {
                        if (search === '') {
                            return item
                        } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
                            return item
                        }
                    }).map((fries) => (
                        <FoodItem key={fries.id} name={fries.name} image={fries.image} price={fries.price} />
                    ))}
                </div>

                <h1 className='text-2xl font-small pl-4 py-4 mb-1'>{hotdogs.name}</h1>
                <div className='grid grid-cols-2'>
                    {hotdogs.items.filter((item) => {
                        if (search === '') {
                            return item
                        }
                        else if (item.name.toLowerCase().includes(search.toLowerCase())) {
                            return item
                        }
                    }).map((hotdog) => (
                        <FoodItem key={hotdog.id} name={hotdog.name} image={hotdog.image} price={hotdog.price} />
                    ))}
                </div>

                <h1 className='text-2xl font-small pl-4 py-4 mb-1'>{chickens.name}</h1>
                <div className='grid grid-cols-2'>
                    {chickens.items.filter((item) => {
                        if (search === '') {
                            return item
                        }
                        else if (item.name.toLowerCase().includes(search.toLowerCase())) {
                            return item
                        }
                    }).map((chicken) => (
                        <FoodItem key={chicken.id} name={chicken.name} image={chicken.image} price={chicken.price} />
                    ))}
                </div>

            </div>
        </div>
    )
}


export default Row