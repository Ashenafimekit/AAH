import React from 'react'
import Header2 from '../Components/Header2'
import Footer from '../Components/Footer'
import Body from '../Components/RoomClicked/Body'

const RoomClicked_Page = () => {
  return (
    <div className='flex flex-col gap-5'>
      <Header2 title={'single room'}/>
      <Body />
      <Footer/>   
    </div>
  )
}

export default RoomClicked_Page;