import bannerBg from "../../../../../public/images/banner.jpg";
import Button from "../../global/button/button";

const Banner = () => {
   return (
      <div
         style={{
            background: `linear-gradient(0deg, rgba(6, 17, 56, 0.7), rgba(6, 17, 56, 0.7)), url(${bannerBg.src})`,
         }}
         className="flex items-center flex-col justify-center h-[90vh]">
         <p className="text-primary">YACHT & BOATS</p>
         <h2 className="text-6xl py-3 font-bold text-white">
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
