import React from 'react'
import {GiOuroboros} from 'react-icons/gi'
const CompanyDesc = () => {

    const companyDesc = "Delight in Every Bite"

    return (
        <div className="flex justify-center items-center">
            <p className="text-white text-center mt-4 font-sans flex items-center justify-center font-light"> <GiOuroboros /> {companyDesc} <GiOuroboros /></p>
        </div>
    )
}

export default CompanyDesc