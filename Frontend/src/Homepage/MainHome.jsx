import React from 'react'
import AboveFooter from './AboveFooter'
import BelowNav from './BelowNav'
import Footer from './Footer'
import Header from './Header'
import Navbar from './Navbar'
import TimeTaking from './TimeTaking'

const MainHome = () => {
  return (
    <div>
        {/* <Header/> */} 
        <Navbar/>
       <BelowNav/>
       <TimeTaking/>
       <AboveFooter/>
        <Footer />
    </div>
  )
}

export default MainHome;