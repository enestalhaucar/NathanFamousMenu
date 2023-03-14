import React from 'react'

const CompanyName = () => {
    const companyName = "Nathans Famous"
    return (
        <div className="flex justify-center items-center">
            <h1 className="text-5xl text-white mt-8 font-sans font-medium">{companyName}</h1>
        </div>
    )
}

export default CompanyName