import React from "react";
import { Tabs } from "antd";
import "../css/tab.css";

import restaurant from "../assets/images/restaurant.jpg";
import gym from "../assets/images/gym.jpg";
import spa from "../assets/images/spa.jpg";
import meeting from "../assets/images/meeting.png";
import car from "../assets/images/cars.jpg";
import bar from "../assets/images/bar.jpg";
import bedroom from "../assets/images/bedroom.jpg";
import bedroom2 from "../assets/images/bedroom2.jpg";
import bedroom3 from "../assets/images/bedroom3.jpg";
import lobby from "../assets/images/lobby.jpg";

const { TabPane } = Tabs;

const Gallery = () => {
  return (
    <div className="tab-container">
      <h1 className="text-4xl text-blueBlack font-semibold text-center mb-5">
        Gallery
      </h1>
      <Tabs defaultActiveKey="1" centered className="">
        <TabPane tab="ALL" key="1">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 shadow-lg rounded-lg p-5">
            <img className="rounded-md h-72 object-cover  " src={restaurant} alt="Arab Ali Hotel Images" />
            <img className="rounded-md h-72 object-cover" src={gym} alt="Arab Ali Hotel Images" />
            <img className="rounded-md h-72 object-cover" src={spa} alt="Arab Ali Hotel Images" />
            <img className="rounded-md h-72 object-cover" src={lobby} alt="Arab Ali Hotel Images" />
            <img className="rounded-md h-72 object-cover" src={meeting} alt="Arab Ali Hotel Images" />
            <img className="rounded-md h-72 object-cover" src={car} alt="Arab Ali Hotel Images" />
            <img className="rounded-md h-72 object-cover" src={bar} alt="Arab Ali Hotel Images" />
            <img className="rounded-md h-72 object-cover" src={bedroom} alt="Arab Ali Hotel Images" />
            <img className="rounded-md h-72 object-cover" src={bedroom2} alt="Arab Ali Hotel Images" />
            <img className="rounded-md h-72 object-cover" src={bedroom3} alt="Arab Ali Hotel Images" />
          </div>
        </TabPane>
        <TabPane tab="ROOM" key="5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 shadow-lg rounded-lg p-5">
            <img className="rounded-md h-72 object-cover" src={bedroom} alt="Arab Ali Hotel Images" />
            <img className="rounded-md h-72 object-cover" src={bedroom2} alt="Arab Ali Hotel Images" />
            <img className="rounded-md h-72 object-cover" src={bedroom3} alt="Arab Ali Hotel Images" />
          </div>
        </TabPane>
        <TabPane tab="RESTAURANT" key="4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 shadow-lg rounded-lg p-5">
            <img className="rounded-md h-72 object-cover" src={restaurant} alt="Arab Ali Hotel Images" />
            <img className="rounded-md h-72 object-cover" src={gym} alt="Arab Ali Hotel Images" />
            <img className="rounded-md h-72 object-cover" src={spa} alt="Arab Ali Hotel Images" />
            <img className="rounded-md h-72 object-cover" src={lobby} alt="Arab Ali Hotel Images" />
          </div>
        </TabPane>
        <TabPane tab="GYM" key="6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 shadow-lg rounded-lg p-5">
            <img className="rounded-md h-72 object-cover" src={restaurant} alt="Arab Ali Hotel Images" />
            <img className="rounded-md h-72 object-cover" src={gym} alt="Arab Ali Hotel Images" />
            <img className="rounded-md h-72 object-cover" src={spa} alt="Arab Ali Hotel Images" />
            <img className="rounded-md h-72 object-cover" src={lobby} alt="Arab Ali Hotel Images" />
            <img className="rounded-md h-72 object-cover" src={meeting} alt="Arab Ali Hotel Images" />
            <img className="rounded-md h-72 object-cover" src={car} alt="Arab Ali Hotel Images" />
          </div>
        </TabPane>  
      </Tabs>
    </div>
  );
};

export default Gallery;
