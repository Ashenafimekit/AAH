import React from 'react'
import Header2 from '../Components/Header2'
import Room from '../Components/Room'
import Testimonial from '../Components/Testimonial'
import Footer from '../Components/Footer'
import React from "react";
import Header2 from "../Components/Header2";
import Body from "../Components/room/Body";

const RoomClicked_Page = () => {
  return (
    <div className='flex flex-col gap-5'>
      <Header2 title={'single room'}/>
      <Room/>
      <Testimonial/>
      <Footer/>   
    </div>
  )
}
    <div className="flex flex-col gap-5">
      <Header2 title={"single room"} />
      <Body />
    </div>
  );
};

export default Room_Page;
