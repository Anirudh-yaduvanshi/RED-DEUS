import React from 'react'
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Outlet } from 'react-router';


const App = () => {
  return (
    <>
     <Header />
      <Outlet  />
      <Footer />
    </>
  )
}

export default App