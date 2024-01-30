import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa6";

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

export default SocialIcon;
