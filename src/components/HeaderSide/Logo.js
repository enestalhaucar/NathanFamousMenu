import React from 'react'
import logo from "../../images/logo.png" // import image

const Logo = () => {
    return (
        <div className = "flex justify-center items-center">
            <img src={logo} className="w-72 mt-40" alt="" />
        </div>
  );
}

export default Logo