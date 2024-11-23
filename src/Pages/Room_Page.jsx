import React from 'react'
import Header2 from '../Components/Header2'
import Room from '../Components/Room'
import Testimonial from '../Components/Testimonial'
import Footer from '../Components/Footer'

const Room_Page = () => {
  return (
    <div className='flex flex-col gap-5'>
      <Header2 title={'single room'}/>
      <Room/>
      <Testimonial/>
      <Footer/>   
    </div>
  )
};

export default Room_Page;
