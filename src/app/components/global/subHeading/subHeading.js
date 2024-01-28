import { FaArrowRightLong } from "react-icons/fa6";

const SubHeading = ({ children }) => {
   return (
      <div className="flex items-center gap-1 text-primary uppercase tracking-widest text-sm">
         <FaArrowRightLong className=" rotate-[322deg]" />
         <p>{children}</p>
      </div>
   );
};

export default SubHeading;
