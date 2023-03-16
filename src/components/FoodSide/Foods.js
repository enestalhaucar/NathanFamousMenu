import React from 'react'
import Row from './Row'

import HeaderFood from './HeaderFood'




const Foods = () => {
    return (
        <div className='flex justify-center items-center flex-col mt-10 bg-white/90 w-6/12 m-auto rounded-lg'>
            {/* Header */}
            <HeaderFood />
            {/* Row */}
            <Row />
        </div>
    )
}

export default Foods