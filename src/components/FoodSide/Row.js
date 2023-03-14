import React from 'react'
import FoodItem from './FoodItem'
import data from '../../data.json';



const Row = () => {
    const burgers = data.burgers;
    const fries = data.fries;
    const chickens = data.chickens;
    const hotdogs = data.hotDogs;


    return (

        <div className='flex w-full flex-col justify-between ' >
            <h1 className='text-2xl font-small pl-4 py-4 mb-1'>{burgers.name}</h1>
            <div className='grid grid-cols-2'>
                {burgers.items.map((burger) => (
                    <FoodItem key={burger.id} name={burger.name} image={burger.image} price={burger.price} />
                ))}
            </div>

            <h1 className='text-2xl font-small pl-4 py-4 mb-1'>{fries.name}</h1>
            <div className='grid grid-cols-2'>
                {fries.items.map((fries) => (
                    <FoodItem key={fries.id} name={fries.name} image={fries.image} price={fries.price} />
                ))}
            </div>

            <h1 className='text-2xl font-small pl-4 py-4 mb-1'>{hotdogs.name}</h1>
            <div className='grid grid-cols-2'>
                {hotdogs.items.map((hotdog) => (
                    <FoodItem key={hotdog.id} name={hotdog.name} image={hotdog.image} price={hotdog.price} />
                ))}
            </div>

            <h1 className='text-2xl font-small pl-4 py-4 mb-1'>{chickens.name}</h1>
            <div className='grid grid-cols-2'>
                {chickens.items.map((chicken) => (
                    <FoodItem key={chicken.id} name={chicken.name} image={chicken.image} price={chicken.price} />
                ))}
            </div>

        </div>

    )
}


export default Row