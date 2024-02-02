import Image from "next/image";
import SocialIcon from "../../socialIcon/socialIcon";
import logoWhite from "/public/images/logo-white.svg";

const FooterSectionOne = () => {
   return (
      <div className="md:w-2/6">
         <Image width={200} height={300} src={logoWhite} alt="Logo" />
         <p className="text-gray-300 mt-4">
            Chartering a yacht provides the perfect opportunity to enjoy
            breathtaking coastal landscapes, tranquil seas, and picturesque
            sunsets in a private and intimate setting
         </p>
         <div className="flex items-center gap-3 mt-4">
            <SocialIcon icon="facebook" url="#" />
            <SocialIcon icon="twitter" url="#" />
            <SocialIcon icon="linkedin" url="#" />
         </div>
      </div>
   );
};

export default FooterSectionOne;
