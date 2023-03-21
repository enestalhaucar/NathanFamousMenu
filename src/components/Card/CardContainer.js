import React from 'react'
import Result from './Result'
import CardHeaderBody from './CardHeaderBody'

const CardContainer = () => {
    return (

        <div className='w-5/12 bg-white  rounded-2xl h-4/5 mt-40 flex flex-col justify-between items-center drop-shadow-lg'>
            {/* Title and Card Buttons and Card*/}
            <CardHeaderBody />
            {/* Result */}
            <Result />
        </div>

    )
}


export default CardContainer