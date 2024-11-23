import Header2 from '../Components/Header2';
import Body from '../Components/contactUs/Body';
import Location from '../Components/contactUs/Location';
import Footer from '../Components/Footer';

const Contact_Page = () => {
  return (
    <div className="flex flex-col gap-[32px]">
      <Header2 title = {'contact-us'}/>
      <Body />
      <Location />
      <Footer />
    </div>
  )
}

export default Contact_Page