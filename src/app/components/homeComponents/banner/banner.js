import bannerBg from "../../../../../public/images/banner.webp";
import Button from "../../global/button/button";
import SubHeading from "../../global/subHeading/subHeading";

const Banner = () => {
   return (
      <div
         style={{
            background: `linear-gradient(0deg, rgba(6, 17, 56, 0.7), rgba(6, 17, 56, 0.7)), url(${bannerBg.src})`,
            backgroundPosition: "center center",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
         }}
         className="flex items-center flex-col justify-center h-[90vh]">
         <SubHeading>YACHT & BOATS</SubHeading>
         <h2 className="text-h1 py-3 font-bold text-white">
            Bespoke Yacht Charter
         </h2>
         <p className="text-white pb-4">
            The yacht life is a life of luxury and adventure.
         </p>
         <Button href="#">Discover Now</Button>
      </div>
   );
};

export default Banner;
