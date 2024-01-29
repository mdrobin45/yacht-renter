import cn from "@/app/utils/cn";
import { FaArrowRightLong } from "react-icons/fa6";

const SubHeading = ({ children, className }) => {
   return (
      <div
         className={cn(
            "flex items-center gap-1 text-primary uppercase tracking-widest text-sm",
            className
         )}>
         <FaArrowRightLong className=" rotate-[322deg]" />
         <p>{children}</p>
      </div>
   );
};

export default SubHeading;
