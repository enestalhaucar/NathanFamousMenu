import React from 'react'

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
                    {/* Card */}
                    <div>
                        CARD
                    </div>
                </div>
                {/* Result */}
                <div className='flex  justify-between items-center bg-white h-28 p-2 mb-2 w-11/12'>
                    <div className='flex justify-start items-center'>
                        <div className='flex flex-col items-center justify-center'>
                            <div>Toplam</div>
                            <div>İtem</div>
                        </div>
                        <div>$22.00</div>
                    </div>
                    <div>Devam Et</div>
                </div>
            </div>

        )
    }


export default CardContainer