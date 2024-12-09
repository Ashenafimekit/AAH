import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Service from '../Components/Service'

const Service_Page = () => {
  return (
    <div className='flex flex-col gap-5'>
        <Header/>
        <Service/>
        <Footer/>
    </div>
  )
}

export default Service_Page