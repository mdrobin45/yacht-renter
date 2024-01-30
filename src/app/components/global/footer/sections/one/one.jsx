import Image from "next/image";
import SocialIcon from "../../socialIcon/socialIcon";

const FooterSectionOne = () => {
   return (
      <div className="w-2/6">
         <Image
            width={150}
            height={300}
            src="https://duruthemes.com/demo/html/harbour/demo1/img/logo-light.png"
            alt="Logo"
         />
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
