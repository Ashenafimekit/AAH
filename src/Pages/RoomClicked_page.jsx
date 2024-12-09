import React from "react";
import Header2 from "../Components/Header2";
import Footer from "../Components/Footer";
import Body from "../Components/RoomClicked/Body";
import { useParams } from "react-router-dom";

const RoomClicked_Page = () => {
  const { roomType } = useParams();
  return (
    <div className="flex flex-col gap-5">
      <Header2 title={`${roomType} room`} />
      <Body />
      <Footer />
    </div>
  );
};

export default RoomClicked_Page;
