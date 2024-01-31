import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const TypeCard = ({ img, count, title, description }) => {
   return (
      <div className=" shadow-md p-4 rounded bg-white">
         <div className="flex items-center justify-between">
            <div>
               <Image height={50} width={50} src={img} alt="Yacht" />
            </div>
            <div>
               <span className=" text-primary bg-[#F0F8FF] rounded-full w-12 h-12 flex items-center justify-center flex-col p-3 hover:bg-[#1283ed]">
                  {count}
               </span>
            </div>
         </div>
         <h2 className="text-xl font-bold pt-3">{title}</h2>
         <p className="text-gray-500 py-3">{description}</p>
         <div>
            <Link
               className="w-12 h-12 flex flex-col items-center justify-center border bg-primary rounded-full p-3 text-white hover:bg-[#1283ed]"
               href="#">
               <FaArrowRight />
            </Link>
         </div>
      </div>
   );
};

export default TypeCard;
