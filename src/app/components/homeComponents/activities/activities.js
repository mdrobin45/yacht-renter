import Image from "next/image";
import Link from "next/link";
import { LiaHandPointRightSolid } from "react-icons/lia";
import Container from "../../global/container/container";
import SubHeading from "../../global/subHeading/subHeading";
import paraSailingImg from "/public/images/para-sailing.jpg";

const Activities = () => {
   return (
      <section className="bg-[#F0F8FF] py-32">
         <Container>
            <SubHeading className="justify-center">OUR ACTIVITIES</SubHeading>
            <h2 className="text-h2 text-center font-bold">Water Sports</h2>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-10">
               <div>
                  <Image
                     className="rounded"
                     src={paraSailingImg.src}
                     alt="Para Sailing"
                     width={1200}
                     height={1100}
                  />
               </div>
               <div className="bg-white p-6 md:-ml-32 rounded-md">
                  <h2 className="text-h2 font-bold">Para Sailing</h2>
                  <p className="text-gray-500 pt-3">
                     Parasailing is an exhilarating water sport that combines
                     the thrill of flying with the serenity of gliding over the
                     water.
                  </p>
                  <ul className="pt-4 text-gray-500 gap-y-3 flex flex-col">
                     <li className="flex items-center gap-2">
                        <LiaHandPointRightSolid className="text-primary text-xl" />
                        <span>Aerial Serenity</span>
                     </li>
                     <li className="flex items-center gap-2">
                        <LiaHandPointRightSolid className="text-primary text-xl" />
                        <span>Adrenaline-Packed Thrills</span>
                     </li>
                     <li className="flex items-center gap-2">
                        <LiaHandPointRightSolid className="text-primary text-xl" />
                        <span>Waterfront Adventure</span>
                     </li>
                  </ul>
                  <div className="w-full h-1 bg-blue-300 my-4">
                     <div className="bg-primary block h-full w-1/5"></div>
                  </div>
                  <div className="flex items-center py-4 justify-between">
                     <Link
                        className="bg-primary hover:bg-[#1283ed] transition-all flex items-center gap-1 px-6 py-3 rounded-full text-white"
                        href="#">
                        Know More
                     </Link>
                     <div>
                        <p className="text-gray-500">From</p>
                        <h2>
                           <span className="text-2xl font-bold">$320</span>{" "}
                           <span className="text-gray-500">/Hour</span>
                        </h2>
                     </div>
                  </div>
               </div>
            </div>
         </Container>
      </section>
   );
};

export default Activities;
