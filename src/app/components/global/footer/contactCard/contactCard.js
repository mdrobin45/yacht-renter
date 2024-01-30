import { FaMapMarkerAlt } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";

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

export default ContactCard;
