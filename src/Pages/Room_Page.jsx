import React from 'react'
import Header from '../Components/Header'
import Room from '../Components/Room'
import Testimonial from '../Components/Testimonial'
import Footer from '../Components/Footer'

const Room_Page = () => {
  return (
    <div className='flex flex-col gap-5'>
      <Header/>
      <Room/>
      <Testimonial/>
      <Footer/>   
    </div>
  )
};

export default Room_Page;
