import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const Button = ({ children, href }) => {
   return (
      <Link
         className="bg-primary flex items-center gap-1 px-6 py-3 rounded-md text-white"
         href={href}>
         {children}
         <FaArrowRightLong className=" rotate-[300deg]" />
      </Link>
   );
};

export default Button;
