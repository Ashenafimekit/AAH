import React from 'react'
import Header2 from '../Components/Header2'
import RoomClicked_page from '../Components/roomClicked'
import Testimonial from '../Components/Testimonial'
import Footer from '../Components/Footer'

const RoomClicked_Page = () => {
  return (
    <div className='flex flex-col gap-5'>
      <Header2 title={'single room'}/>
      <RoomClicked_Page/>
      <Footer/>   
    </div>
  )
}

export default RoomClicked_Page;