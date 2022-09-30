import React from 'react'
import BelowNav from './BelowNav'
import Footer from './Footer'
import Header from './Header'
import Navbar from './Navbar'

const MainHome = () => {
  return (
    <div>
        {/* <Header/> */} 
        <Navbar/>

       <BelowNav/>

        <Footer />
    </div>
  )
}

export default MainHome;