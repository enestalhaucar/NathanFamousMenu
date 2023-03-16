import React from 'react';
import Home from "./Home"
import { Routes, Route } from "react-router-dom"
import Card from "../src/components/Card/Card"



function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/card' element={<Card />} />
    </Routes>
  );
}

export default App;
