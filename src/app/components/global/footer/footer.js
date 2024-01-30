import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { LuSend } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";
import Container from "../container/container";

// Quick Links
const quickLinks = [
   {
      text: "Home",
      url: "#",
   },
   {
      text: "About",
      url: "#",
   },
   {
      text: "Yachts",
      url: "#",
   },
   {
      text: "Destinations",
      url: "#",
   },
   {
      text: "Water Sports",
      url: "#",
   },
   {
      text: "Blog",
      url: "#",
   },
];
const Footer = () => {
   return (
      <section className="bg-secondary pt-32 pb-7">
         <Container>
            <div className="flex items-center justify-between border-blue-950 border-2 rounded-md p-6">
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
            <div className="py-20 flex justify-between border-b-2 border-blue-950">
               <div className="w-2/6">
                  <Image
                     width={150}
                     height={300}
                     src="https://duruthemes.com/demo/html/harbour/demo1/img/logo-light.png"
                     alt="Logo"
                  />
                  <p className="text-gray-300 mt-4">
                     Chartering a yacht provides the perfect opportunity to
                     enjoy breathtaking coastal landscapes, tranquil seas, and
                     picturesque sunsets in a private and intimate setting
                  </p>
                  <div className="flex items-center gap-3 mt-4">
                     <SocialIcon icon="facebook" url="#" />
                     <SocialIcon icon="twitter" url="#" />
                     <SocialIcon icon="linkedin" url="#" />
                  </div>
               </div>
               <div className="w-2/6">
                  <div className="w-2/4 mx-auto">
                     <h2 className="text-2xl font-bold text-white">
                        Quick Links
                     </h2>
                     <ul className="flex flex-col gap-y-1 text-white mt-4">
                        {quickLinks.map((item, index) => (
                           <li key={index}>
                              <Link
                                 className="hover:text-primary transition-all"
                                 href={item.url}>
                                 {item.text}
                              </Link>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
               <div className="w-2/6">
                  <h2 className="text-2xl font-bold text-white">Subscribe</h2>
                  <p className="text-gray-300">
                     To get latest update about our offers, promotions, and
                     discounts subscribe our newsletter!
                  </p>
                  <form className="flex items-center mt-4 relative">
                     <input
                        type="text"
                        placeholder="Email address"
                        className="p-4 rounded-full w-full border-2 focus:outline-none text-gray-300 border-primary bg-transparent"
                     />
                     <button className="bg-primary absolute hover:bg-[#1283ed] right-2 rounded-full p-3 text-white text-xl">
                        <LuSend />
                     </button>
                  </form>
               </div>
            </div>
            <p className="text-gray-300 pt-4">
               Designed By{" "}
               <a
                  target="_blank"
                  className="text-primary"
                  href="https://robinrana.vercel.app/">
                  Robin Rana
               </a>
            </p>
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

// Social icon
const SocialIcon = ({ icon, url }) => {
   const renderIcon = () => {
      switch (icon) {
         case "facebook":
            return <FaFacebookF className="text-xl" />;
         case "twitter":
            return <FaTwitter className="text-xl" />;
         case "linkedin":
            return <FaLinkedinIn className="text-xl" />;
      }
   };
   return (
      <div className="text-white p-3 rounded-full bg-primary hover:bg-[#1283ed]">
         <a href={url}>{renderIcon()}</a>
      </div>
   );
};

export default Footer;
