import React from 'react'
import MainHeader from "./MainHeader"
import Logo from "./components/HeaderSide/Logo"
import CompanyName from "./components/HeaderSide/CompanyName"
import CompanyDesc from "./components/HeaderSide/CompanyDesc"
import Foods from "./components/FoodSide/Foods"


const Home = () => {
  return (
    <div className="bg w-screen bg-fixed">
    {/* Main Header */}
    <MainHeader />
    {/* Logo */}
    <Logo />
    {/* Company Name */}
    <CompanyName />
    {/* Company Description */}
    <CompanyDesc />
    {/* Foods */}
    <Foods />

  </div>
  )
}

export default Home