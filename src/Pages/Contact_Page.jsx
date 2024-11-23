import React from 'react'
import Header from '../Components/contactUs/Header';
import Body from '../Components/contactUs/Body';
import Location from '../Components/contactUs/Location';
import Footer from '../Components/Footer';

const Contact_Page = () => {
  return (
    <div className="flex flex-col gap-[32px]">
      <Header />
      <Body />
      <Location />
      <Footer />
    </div>
  )
}

export default Contact_Page