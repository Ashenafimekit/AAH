import React from 'react'
import Header from '../Components/Header'
import Gallery from '../Components/Gallery'
import Testimonial from '../Components/Testimonial'
import Footer from '../Components/Footer'

const Gallery_Page = () => {
  return (
    <div className='flex flex-col gap-5'>
      <Header/>
      <Gallery/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default Gallery_Page