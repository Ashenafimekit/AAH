import React from "react";
import restaurant from "../assets/images/restaurant.jpg";
import gym from "../assets/images/gym.jpg";
import spa from "../assets/images/spa.jpg";
import meeting from "../assets/images/meeting.png";
import car from "../assets/images/cars.jpg";
import bar from "../assets/images/bar.jpg";


const Service = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 w-full">
      <div className="flex flex-col items-center justify-center gap-3 w-3/5">
        <h1 className="font-semibold text-2xl text-center">
          Experience Comfort, Convenience, and Care
        </h1>
        <p className="text-sm text-justify">
          At Our Hotel, we are committed to providing exceptional service to
          make your stay unforgettable. From elegant accommodations and gourmet
          dining to relaxing wellness treatments and curated experiences, every
          detail is crafted with you in mind. Whether you’re here for
          relaxation, adventure, or business, our dedicated team is here to
          ensure every moment meets your highest expectations. Discover our
          range of services and let us make your stay truly special.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-3 bg-blueBlack w-3/4">
        <div className="flex flex-col items-center justify-center gap-5 p-8 w-full">
          <div className="w-full md:w-3/4 h-1/4">
            <img
              src={restaurant}
              alt="Arab Ali Restaurant"
              className="rounded-lg sm:h-[50vh] w-full object-cover"
            />
          </div>
          <div className="flex flex-col items-center justify-center w-full md:w-3/4 p-5 bg-white rounded-lg">
            <h1 className="font-semibold text-2xl text-center">
              Dining at Our Restaurant
            </h1>
            <p className="text-justify text-sm">
              Enjoy a memorable dining experience at our on-site restaurant,
              featuring fresh, local ingredients and global flavors crafted by
              expert chefs. From a rich breakfast buffet to elegant lunch and
              dinner options, we offer something for every taste.
              <li>
                Breakfast Buffet: A variety of fresh, delicious options to start
                your day.
              </li>
              <li>
                Lunch & Dinner: Local specialties and international dishes,
                prepared with care.
              </li>
              <li>In-Room Dining: Available 24/7 for your convenience.</li>
              Specials & Drinks: Weekly chef’s specials and a curated wine and
              cocktail menu. Reserve Your Table: Call +251987654321 or book
              online.
            </p>
          </div>
        </div>
        <div className="bg-white px-8 py-2 font-bold text-xl">RESTAURANT</div>
      </div>
      <div className="flex flex-col items-center justify-center gap-3 bg-blueBlack w-3/4">
        <div className="flex flex-col items-center justify-center gap-5 p-8 w-full">
          <div className="w-full md:w-3/4 h-1/4">
            <img
              src={gym}
              alt="Arab Ali gym"
              className="rounded-lg sm:h-[50vh] w-full object-cover"
            />
          </div>
          <div className="flex flex-col items-center justify-center w-full md:w-3/4 p-5 bg-white rounded-lg">
            <h1 className="font-semibold text-2xl text-center">
              Fitness at Our Hotel
            </h1>
            <p className="text-justify text-sm">
              Maintain your routine in our fully equipped gym, designed to meet
              the needs of both beginners and fitness enthusiasts. Enjoy a range
              of modern equipment, from cardio machines to free weights, in a
              clean and welcoming space.
              <li>
                Cardio Equipment: Treadmills, bikes, and elliptical for a full
                cardio workout.
              </li>
              <li>
                Strength Training: Free weights, resistance machines, and more
                to build strength.
              </li>
              <li>
                Yoga & Stretching Area: A quiet space for stretching, yoga, and
                relaxation.
              </li>
              Opening Hours: Open daily from 6:00 AM to 10:00 PM.
            </p>
          </div>
        </div>
        <div className="bg-white px-8 py-2 font-bold text-xl">THE GYM</div>
      </div>
      
      <div className="flex flex-col items-center justify-center gap-3 bg-blueBlack w-3/4">
        <div className="flex flex-col items-center justify-center gap-5 p-8 w-full">
          <div className="w-full md:w-3/4 h-1/4">
            <img
              src={meeting}
              alt="Arab Ali meeting room"
              className="rounded-lg sm:h-[50vh] w-full object-cover"
            />
          </div>
          <div className="flex flex-col items-center justify-center w-full md:w-3/4 p-5 bg-white rounded-lg">
            <h1 className="font-semibold text-2xl text-center">
              Meeting Rooms & Conference Halls at Our Hotel
            </h1>
            <p className="text-justify text-sm">
              Host your meetings, conferences, and special events in our
              state-of-the-art facilities designed to meet all your professional
              needs. With flexible layouts, modern technology, and a dedicated
              support team, we ensure your event runs seamlessly.
              <li>
                Versatile Spaces: Choose from a range of rooms that can be
                tailored for small meetings or large conferences.
              </li>
              <li>
                Advanced AV Equipment: High-speed WI-Fi, projectors, screens,
                and sound systems to support presentations and workshops.
              </li>
              <li>
                Catering Services: Customization menus for coffee breaks,
                luncheons, and formal dinners.
              </li>
              Book Your Event: Contact us at [Phone Number] or email [Email
              Address] to discuss your event requirements.
            </p>
          </div>
        </div>
        <div className="bg-white px-8 py-2 font-bold text-xl">MEETING ROOM</div>
      </div>
    </div>
  );
};

export default Service;
