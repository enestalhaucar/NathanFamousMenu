import React from 'react'
import Title from './Title'
import CardButtons from './CardButtons'
import CardBody from './CardBody'

const CardHeaderBody = () => {

    return (
        <div className='flex flex-col items-center justify-center'>
            {/* Title */}
            <Title />
            {/* Card Buttons */}
            <CardButtons />
            {/* Card Body */}
            <CardBody /> 
        </div>

    )
}

export default CardHeaderBody