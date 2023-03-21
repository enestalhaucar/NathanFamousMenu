import React from 'react'

const CardButtons = () => {

    const ChooseSum = () => {
        const Sum = document.getElementById('SumOfYourOrder')
        const Fav = document.getElementById('Favorites')
        if (!Sum.classList.contains('activeButton')) {
            Sum.classList.add('activeButton')
            Fav.classList.remove('activeButton')
        }
    }

    const ChooseFav = () => {
        const Sum = document.getElementById('SumOfYourOrder')
        const Fav = document.getElementById('Favorites')
        if (!Fav.classList.contains('activeButton')) {
            Fav.classList.add('activeButton')
            Sum.classList.remove('activeButton')
        }
    }

    return (
        <div className='w-11/12 bg-blue-100 h-12 rounded-m mt-10 flex justify-between items-center'>
            {/* Summary of your order */}
            <div className='w-96 flex justify-center items-center'>
                <button className='activeButton py-2 rounded-m w-full mx-1' id='SumOfYourOrder' onClick={ChooseSum}>Summary of Your Order</button>
            </div>
            {/* Favorites */}
            <div className='w-96 flex justify-center items-center'>
                <button className='py-2 rounded-m w-full mx-1' id='Favorites' onClick={ChooseFav}>Favorites</button>
            </div>
        </div>
    )
}

export default CardButtons