import Image from "next/image";
import { LuArrowLeftRight } from "react-icons/lu";
import bg from "/public/images/banner.webp";

const YachtSlide = () => {
   return (
      <>
         <div className="relative my-20 w-[60%]">
            <Image
               className="rounded-md"
               src={bg.src}
               alt="Thumbnail"
               width={800}
               height={600}
            />
            <div className="absolute mx-10 left-0 right-0 -bottom-7 shadow border bg-white py-4 px-3 rounded-md">
               <div>
                  <h3 className="text-secondary font-bold text-2xl">
                     120ft Yacht - Vivanta
                  </h3>
                  <div className="flex items-center gap-3"></div>
               </div>
               <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                     <LuArrowLeftRight className="text-primary" />
                     <p className="text-gray-500">Length: 18m (60ft)</p>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default YachtSlide;
