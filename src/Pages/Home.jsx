import React from "react";
import Header from "../Components/Header";
import HomePageRoom from "../Components/HomePageRoom";
import Carousel_Comp from "../Components/Carausel_Comp";
import HomePageService from "../Components/HomePageService";
import Testimonial from "../Components/Testimonial";
import HomePageContact from "../Components/HomePageContact";
import Footer from "../Components/Footer";
import Carousel from "../Components/Carousel";

const Home = () => {
  return (
    <div className="flex flex-col gap-5">
        <Header/>
        <HomePageRoom/>
        {/* <Carousel_Comp/> */}
        <Carousel/>
        <HomePageService/>
        <Testimonial/>
        <HomePageContact/>
        <Footer/>
    </div>
  );
};

export default Home;
