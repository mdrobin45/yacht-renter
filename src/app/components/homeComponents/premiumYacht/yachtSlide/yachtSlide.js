import Image from "next/image";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { GiSpeedBoat } from "react-icons/gi";
import { LuArrowLeftRight } from "react-icons/lu";
import bg from "/public/images/banner.webp";

const YachtSlide = () => {
   return (
      <>
         <div className="relative mx-auto mb-20 w-full">
            <div className="overflow-hidden rounded-md">
               <Image
                  className="rounded-md hover:scale-105 duration-300 transition-all"
                  src={bg.src}
                  alt="Thumbnail"
                  width={800}
                  height={600}
               />
            </div>
            <div className="absolute drop-shadow-md flex items-center justify-between mx-10 left-0 right-0 -bottom-12 bg-white py-4 px-3 rounded-md">
               <div className="">
                  <div>
                     <h3 className="text-secondary font-bold text-2xl">
                        120ft Yacht - Vivanta
                     </h3>
                     <div className="flex items-center gap-3"></div>
                  </div>
                  <div className="flex items-center gap-4 mt-3">
                     <div className="flex items-center gap-1">
                        <LuArrowLeftRight className="text-primary" />
                        <p className="text-gray-500">Length: 18m (60ft)</p>
                     </div>
                     <div className="flex items-center gap-1">
                        <FaRegUser className="text-primary" />
                        <p className="text-gray-500">Guests: 6</p>
                     </div>
                     <div className="flex items-center gap-1">
                        <GiSpeedBoat className="text-primary text-2xl" />
                        <p className="text-gray-500">Build: 2016</p>
                     </div>
                  </div>
               </div>
               <div>
                  <Link
                     className="block border bg-primary rounded-full p-3 text-white hover:bg-[#1283ed]"
                     href="#">
                     <FaArrowRight />
                  </Link>
               </div>
            </div>
         </div>
      </>
   );
};

export default YachtSlide;
