import { LuSend } from "react-icons/lu";

const FooterSectionThree = () => {
   return (
      <div className="w-2/6">
         <h2 className="text-2xl font-bold text-white">Subscribe</h2>
         <p className="text-gray-300">
            To get latest update about our offers, promotions, and discounts
            subscribe our newsletter!
         </p>
         <form className="flex items-center mt-4 relative">
            <input
               type="text"
               placeholder="Email address"
               className="p-4 rounded-full w-full border-2 focus:outline-none text-gray-300 border-primary bg-transparent"
            />
            <button className="bg-primary absolute hover:bg-[#1283ed] right-2 rounded-full p-3 text-white text-xl">
               <LuSend />
            </button>
         </form>
      </div>
   );
};

export default FooterSectionThree;
