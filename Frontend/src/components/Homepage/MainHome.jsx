import React from 'react'
import Navbar from '../Navbar/Navbar'
import BelowNav from './BelowNav'
import Footer from './Footer'
import TimeTaking from './TimeTaking'

const MainHome = () => {
  return (
    <div>
      <Navbar/>
       <BelowNav/>
       <TimeTaking/>
       <Footer />
    </div>
  )
}

export default MainHome;