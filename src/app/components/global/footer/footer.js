import { FaMapMarkerAlt } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import Container from "../container/container";

const Footer = () => {
   return (
      <section className="bg-secondary py-32">
         <Container>
            <div className="flex items-center justify-between border-blue-950 border-2 rounded-md p-6">
               {/* <div className="flex items-center gap-2">
                  <div className="bg-primary rounded-full p-4">
                     <FiPhoneCall className="text-white text-3xl" />
                  </div>
                  <div>
                     <h2 className="text-xl font-bold text-white">Call Now</h2>
                     <p className="text-gray-300">+8801761614500</p>
                  </div>
               </div> */}
               <ContactCard
                  icon="phone"
                  heading="Call Now"
                  text="+8801761614500"
               />
               <ContactCard
                  icon="email"
                  heading="Write to us"
                  text="robin4500bd@gmail.com"
               />
               <ContactCard
                  icon="address"
                  heading="Address"
                  text="Gazipur, Dhaka, Bangladesh"
               />
            </div>
            <div>{/* Bottom section */}</div>
         </Container>
      </section>
   );
};

// Contact card component

const ContactCard = ({ icon, heading, text }) => {
   const renderIcon = () => {
      switch (icon) {
         case "phone":
            return <FiPhoneCall className="text-white text-3xl" />;
         case "email":
            return <TfiEmail className="text-white text-3xl" />;
         case "address":
            return <FaMapMarkerAlt className="text-white text-3xl" />;
      }
   };
   return (
      <div className="flex items-center gap-2">
         <div className="bg-primary rounded-full p-4">{renderIcon()}</div>
         <div>
            <h2 className="text-xl font-bold text-white">{heading}</h2>
            <p className="text-gray-300">{text}</p>
         </div>
      </div>
   );
};

export default Footer;
